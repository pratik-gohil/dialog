"use client"
import { useLayoutEffect, useRef } from "react";
import { createPortal } from "react-dom";
import type { TPortal } from "./types";

const Portal = ({ children, selector, show }: TPortal) => {
 const ref = useRef<Element | null>(null);

 useLayoutEffect(() => {
  ref.current = document.getElementById(selector);
 }, [selector]);

 return show && ref.current ? createPortal(children, ref.current) : null;
};

export default Portal;