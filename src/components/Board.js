import './board.css';
import React, { useState } from 'react';
import getRandomPlayer from '../utils/getRandomPlayer';
import calculateWinner from '../utils/calculateWinner';

import Square from './Square';

export default function Board() {
    const [squares, setSquares] = useState(Array(9).fill(null));
    // const player = getRandomPlayer();
    // const [nextPlayer, setNextPlayer] = useState(player);

    const [nextPlayer, setNextPlayer] = useState(() => getRandomPlayer()); // wird nur einmal gefeuert, statt eine Konstante zu deklarieren Z: 10/11

    const winner = calculateWinner(squares);

    function handleClick(i) {
        if (winner) return;

        const newsquares = squares.slice();
        newsquares[i] = nextPlayer;
        setSquares(newsquares);
        setNextPlayer(nextPlayer === '🧞‍♂️' ? '🧜🏻‍♀️' : '🧞‍♂️');
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
