// ! Copyright (c) 2024, Brandon Ramirez, brr.dev

import { Zenith } from '@zenith-game/core';
import React from 'react';

export type ZenithConsoleInputSubmitCB = (inputText?: string) => void | false;

export type ZenithConsoleProps = {
    onInputSubmit: ZenithConsoleInputSubmitCB;
    inputRef: React.RefObject<HTMLDivElement>;
    inputPrefix: React.ReactNode;
    consoleOutput?: React.ReactNode[];
    focusOnLoad?: boolean;
};

export type ZenithConsoleContainerProps = {
    gameDisc: Zenith.GameDiscDefinition;
    focusOnLoad?: boolean;
};
