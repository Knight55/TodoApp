import * as React from 'react';

import './Hello.css';

export interface HelloProps {
    name: string;
    enthusiasmLevel?: number;
    onIncrement?: () => void;
    onDecrement?: () => void;
}

export default function Hello({ name, enthusiasmLevel = 1, onIncrement, onDecrement }: HelloProps) {
    if (enthusiasmLevel <= 0) {
        throw new Error('You could be a little more enthusiastic.');
    }

    return (
        <div className="hello">
            <div className="greeting">
                Hello {name + getExclamationMarks(enthusiasmLevel)}
            </div>
            <div>
                <button onClick={onIncrement}>+</button>
                <button onClick={onDecrement}>-</button>
            </div>
        </div>
    );
}

function getExclamationMarks(numChars: number) {
    return Array(numChars + 1).join('!');
}