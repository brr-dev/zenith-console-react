// ! Copyright (c) 2024, Brandon Ramirez, brr.dev

import { Meta, StoryObj } from '@storybook/react';
import './ZenithConsole.css';
import ZenithConsole from './ZenithConsoleComponent';
import React from 'react';

const meta: Meta<typeof ZenithConsole> = {
    component: ZenithConsole,
    title: 'Organisms/ZenithConsole',
    parameters: {
        controls: {
            include: [],
        },
    },
    decorators: [
        (Story) => {
            const [consoleOutput, setConsoleOutput] = React.useState<
                React.ReactNode[]
            >([]);

            const onInputSubmit = React.useCallback(
                (inputText?: string) => {
                    if (inputText) {
                        setConsoleOutput((prev) => [
                            ...prev,
                            inputText,
                            <br />,
                        ]);
                    }
                },
                [setConsoleOutput],
            );

            return <Story args={{ consoleOutput, onInputSubmit }} />;
        },
    ],
};

export default meta;

export const Standard: StoryObj<typeof ZenithConsole> = {
    globals: {
        background: {
            value: '#F5F5F5',
        },
    },
};
export const DarkMode: StoryObj<typeof ZenithConsole> = {
    decorators: [
        (Story) => (
            <div className="ui-dark-mode">
                <Story />
            </div>
        ),
    ],
    globals: {
        backgrounds: {
            value: '#111111',
        },
    },
};
