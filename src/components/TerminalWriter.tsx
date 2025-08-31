import React, { useEffect, useState, useRef } from 'react';

const TerminalWriter = ({ children, allowWrite, onFinishedTyping, speed = 30, renderFunction }: {
  children: string;
  allowWrite: boolean;
  onFinishedTyping?: () => void;
  speed?: number;
  renderFunction?: (text: string) => React.ReactNode;
}) => {
  const [current, setCurrent] = useState(0);
  const [showCursor, setShowCursor] = useState(true);
  const intervalIDRef = useRef<NodeJS.Timeout | null>(null);
  const cursorIntervalRef = useRef<NodeJS.Timeout | null>(null);

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

    // Only show cursor blinking for the active typing element
    if (current < children.length) {
      cursorIntervalRef.current = setInterval(() => setShowCursor((prev) => !prev), 300);
    }

    return () => {
      clearInterval(intervalID);
      if (cursorIntervalRef.current) {
        clearInterval(cursorIntervalRef.current);
      }
    };
  }, [allowWrite, children.length, onFinishedTyping, speed, current]);

  const displayText = children.substring(0, current);

  return (
    <>
      {renderFunction ? renderFunction(displayText) : displayText}
      {allowWrite && current < children.length && (
        <span className={`${showCursor ? 'opacity-100' : 'opacity-0'} transition-opacity`}>|</span>
      )}
    </>
  );
};
export default TerminalWriter;