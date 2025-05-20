import React, { useState, useRef } from 'react';
import { cn } from '../../utils/cn';

interface IVarInput extends Omit<React.HTMLProps<HTMLTextAreaElement>, "onChange" | "value"> {
  value?: string,
  onChange: (value: string) => void,
  vars?: string[],
}

const VarInput: React.FC<IVarInput> = ({ vars = [], value: defaultValue = "", onChange, className, ...rest }) => {
  const [value, setValue] = useState(defaultValue);
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [caretIndex, setCaretIndex] = useState<number>(0);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const getLastWord = (text: string, pos: number) => {
    const beforeCaret = text.slice(0, pos);
    const match = beforeCaret.match(/{(\w*)$/); // match open brace and partial word
    return match?.[1] || '';
  };

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const text = e.target.value;
    const cursor = e.target.selectionStart;
    setValue(text);
    onChange(text);
    setCaretIndex(cursor);

    const partial = getLastWord(text, cursor);
    if (partial) {
      const filtered = vars.filter(v => v.startsWith(partial));
      setSuggestions(filtered);
    } else {
      setSuggestions([]);
    }
  };

  const insertVariable = (variable: string) => {
    const textBefore = value.slice(0, caretIndex);
    const textAfter = value.slice(caretIndex);
    const partial = getLastWord(value, caretIndex);
    const start = textBefore.lastIndexOf('{' + partial);

    const newValue =
      value.slice(0, start) + `{${variable}}` + textAfter;

    setValue(newValue);
    onChange(newValue);
    setSuggestions([]);

    // restore cursor
    setTimeout(() => {
      if (textareaRef.current) {
        textareaRef.current.focus();
        textareaRef.current.selectionStart =
          textareaRef.current.selectionEnd = start + variable.length + 2;
      }
    }, 0);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if ((e.key === 'Tab' || e.key === 'Enter') && suggestions.length > 0) {
      e.preventDefault();
      insertVariable(suggestions[0]);
    }
  };

  const highlightVariables = (text: string) => {
    return text.replace(/{(\w+?)}/g, '<span class="text-blue-600 font-semibold">{$1}</span>');
  };

  return (
    <div>
      {/* suggestions */}
      {suggestions.length > 0 && (<div className="pb-3 text-sm z-20">
        {suggestions.map((s, i) => (
          <span
            key={i}
            onMouseDown={() => insertVariable(s)}
            className="px-3 py-1 rounded hover:bg-gray-300 shadow cursor-pointer w-fit inline-block"
          >
            {s}
          </span>
        ))}
      </div>)}

      <div className="relative w-full max-w-xl">
        {/* highlight layer */}
        <div className={cn("pointer-events-none whitespace-pre-wrap absolute inset-0 p-2 text-black bg-transparent border border-gray-300 rounded z-0", className)}>
          <div
            dangerouslySetInnerHTML={{
              __html: highlightVariables(value),
            }}
          />
        </div>

        {/* editable textarea */}
        <textarea
          ref={textareaRef}
          value={value}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          className={cn("block relative z-10 w-full p-2 bg-transparent text-black caret-black border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-transparent transition rounded resize-none h-40", className, {
            "text-transparent": value
          })}
          {...rest}
        />
      </div>
    </div>
  );
};

export default VarInput;
