"use client";
import { useEffect, useState, useRef } from 'react';

const TerminalWriter = ({ children, allowWrite, onFinishedTyping, speed = 70 }: {
  children: string;
  allowWrite: boolean;
  onFinishedTyping?: () => void;
  speed?: number;
}) => {
  const [current, setCurrent] = useState(0);
  const [showCursor, setShowCursor] = useState(true);
  const intervalIDRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (!allowWrite) {
      setCurrent(0);
      return;
    }

    function myCallback() {
      setCurrent((c) => {
        const next = c + 1;
        if (next >= children.length) {
          clearInterval(intervalIDRef.current!);
          onFinishedTyping?.();
        }
        return next;
      });
    }

    const intervalID = setInterval(myCallback, speed);
    intervalIDRef.current = intervalID;

    const cursorInterval = setInterval(() => setShowCursor((prev) => !prev), 500);
    return () => {
      clearInterval(intervalID);
      clearInterval(cursorInterval);
    };
  }, [allowWrite, children.length, onFinishedTyping, speed]);

  return (
    <>
      {children.substring(0, current)}
      {allowWrite && current < children.length && (
        <span className={`blink ${showCursor ? 'opacity-100' : 'opacity-0'}`}>|</span>
      )}
    </>
  );
};

export default TerminalWriter;