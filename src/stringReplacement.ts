export const stringReplaceUtil = (payload: string, replacements: { [key: string]: string }) => {
 const replacement = Object.keys(replacements).reduce((acc, curr) => {
  return acc.replace(`{${curr}}`, replacements[curr]);
 }, payload);

 return replacement;
};
