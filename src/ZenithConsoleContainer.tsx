// ! Copyright (c) 2024, Brandon Ramirez, brr.dev

import React, { useEffect } from 'react';
import { ZenithConsoleContainerProps, ZenithConsoleInputSubmitCB } from './ZenithConsole.types';
import ZenithConsoleComponent from './ZenithConsoleComponent';
import { Zenith } from '@zenith-game/core';

export default function ZenithConsoleContainer(
    props: ZenithConsoleContainerProps,
): React.ReactElement {
    /* Console I/O Handlers */
    const [inputPrefix, setInputPrefix] = React.useState<React.ReactNode>();
    const [consoleOutput, setOutputText] = React.useState<React.ReactNode[]>();

    /* External Ref for Console Input */
    const inputRef = React.useRef<HTMLDivElement>(null);

    /* Game Controller */
    const [gameController, setGameController] = React.useState<Zenith.GameController>();

    // Input submit handler to process user interaction
    const onInputSubmit = React.useCallback<ZenithConsoleInputSubmitCB>(
        (inputText) => {
            if (inputText) gameController?.handleInput(inputText);
        },
        [gameController],
    );

    // Need this in a useEffect so that we build the controller after the input is built
    useEffect(() => {
        if (inputRef.current) {
            // Build the ConsoleController instance
            const console = new Zenith.ConsoleController({
                inputRef,
                setInputPrefix,
                setOutputText,
            });

            // Initialize the GameController instance
            setGameController(new Zenith.GameController({ console }));
        }
    }, [inputRef]);

    // Once the gameController is initialized after everything, play the game
    useEffect(() => {
        gameController?.play(props.gameDisc);
    }, [gameController, props.gameDisc]);

    return (
        <ZenithConsoleComponent
            inputRef={inputRef}
            inputPrefix={inputPrefix}
            onInputSubmit={onInputSubmit}
            consoleOutput={consoleOutput}
            focusOnLoad={props.focusOnLoad}
        />
    );
}
