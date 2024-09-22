// ! Copyright (c) 2024, Brandon Ramirez, brr.dev

import React, { useEffect } from 'react';
import { ZenithConsoleProps } from './ZenithConsole.types';
import './ZenithConsole.css';

const DEFAULT_CONSOLE_INPUT_PREFIX = <>&gt;&gt;&nbsp;</>;

export default function ZenithConsoleComponent({
    inputRef: _outerRef,
    onInputSubmit,
    inputPrefix = DEFAULT_CONSOLE_INPUT_PREFIX,
    consoleOutput = [],
    focusOnLoad = true,
}: ZenithConsoleProps): React.ReactElement {
    const _innerRef = React.useRef<HTMLDivElement>(null);
    const inputRef = _outerRef ?? _innerRef; // Prefer the outer ref if passed

    // Focus the Console input when any part of the console is clicked
    const onConsoleClick = React.useCallback<React.MouseEventHandler>(() => {
        inputRef.current?.focus();
    }, [inputRef]);

    // Run submit handler on "Enter" key press
    const onKeyDown = React.useCallback<React.KeyboardEventHandler>(
        (event) => {
            // We only care about the Enter key press
            if (event.key !== 'Enter') return;

            // Prevent default behavior
            event.stopPropagation();
            event.preventDefault();

            if (inputRef.current) {
                const inputText = inputRef.current.innerText ?? '';

                // Clear the input text unless false was returned
                if (onInputSubmit?.(inputText) !== false) {
                    inputRef.current.innerText = '';
                }
            }
        },
        [onInputSubmit, inputRef],
    );

    // Focus on load once we have a ref to our input
    useEffect(() => {
        if (focusOnLoad) {
            inputRef.current?.focus();
        }
    }, [inputRef, focusOnLoad]);

    return (
        <div className="ui-console" onClick={onConsoleClick}>
            <div>{consoleOutput}</div>
            <div className="ui-console-input-wrapper">
                <div className="ui-console-input-prefix">{inputPrefix}</div>
                <div
                    ref={inputRef}
                    onKeyDown={onKeyDown}
                    className="ui-console-input"
                    contentEditable
                ></div>
            </div>
        </div>
    );
}
