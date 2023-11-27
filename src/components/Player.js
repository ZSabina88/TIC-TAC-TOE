import React from 'react';
import { useState } from 'react';

function Player({ initialName, symbol, isActive, onChangeName }) {
    const [isEditing, setIsEditing] = useState(false);
    const [playerName, setplayerName] = useState(initialName);

    const handleClick = () => {
        setIsEditing(editing => !editing);

        if (isEditing) {
            onChangeName(symbol, playerName);
        }
    };

    const handleChange = (e) => {
        setplayerName(e.target.value);
    }

    let editPlayerName = <span className='player-name'>{playerName}</span>;

    if (isEditing) {
        editPlayerName = <input type='text' value={playerName} onChange={handleChange} required />
    }

    return (
        <li className={isActive ? "active" : undefined}>
            <span className='player'>
                {editPlayerName}
                <span className='player-symbol'>{symbol}</span>
            </span>
            <button onClick={handleClick}>{isEditing ? "Save" : "Edit"}</button>
        </li>
    );
}

export default Player;
