import './board.css';
import React, { useState } from 'react';
import Square from './Square';

export default function Board() {
    const [squares, setSquares] = useState(Array(9).fill(null));
    const [xIsNext, setxIsNext] = useState(true);
    const winner = calculateWinner(squares);
    const nextPlayer = xIsNext ? '🧞‍♂️' : '🧜🏻‍♀️';

    function handleClick(i) {
        if (winner) return;
        const newsquares = squares.slice();
        newsquares[i] = nextPlayer;
        setSquares(newsquares);
        setxIsNext(!xIsNext);
    }

    function renderSquare(i) {
        return <Square value={squares[i]} onClick={() => handleClick(i)} />;
    }

    const status = winner ? 'Winner is' + winner : 'Next player:' + nextPlayer;

    return (
        <div>
            <div className='status'>{status}</div>
            <div className='board-row'>
                {renderSquare(0)}
                {renderSquare(1)}
                {renderSquare(2)}
            </div>
            <div className='board-row'>
                {renderSquare(3)}
                {renderSquare(4)}
                {renderSquare(5)}
            </div>
            <div className='board-row'>
                {renderSquare(6)}
                {renderSquare(7)}
                {renderSquare(8)}
            </div>
        </div>
    );
}

function calculateWinner(squares) {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [2, 4, 6],
        [0, 4, 8],
    ];
    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a];
        }
    }
    return null;
}
