"use client"
import {useEffect, useState, useRef} from 'react';
import {startTypeChecking} from "next/dist/build/type-check";

const TerminalWriter = ({children, allowWrite, onFinishedTyping}: {
    children: string,
    allowWrite: boolean,
    onFinishedTyping?: () => void
}) => {
    const [current, setCurrent] = useState(0);
    const intervalIDRef = useRef<NodeJS.Timeout | null>(null)
    useEffect(() => {
        if (!allowWrite) {
            return;
        }

        function myCallback() {
            setCurrent(c => c + 1);
        }

        const intervalID = setInterval(myCallback, 10);
        intervalIDRef.current = intervalID;
        return () => clearInterval(intervalID);
    }, [allowWrite])

    useEffect(() => {
        let x = intervalIDRef.current;
        if (x !== null && current === children.length) {
            clearInterval(x);
            onFinishedTyping?.();
        }
    }, [current, intervalIDRef]);
    return children.substring(0, current);
}

export default TerminalWriter;