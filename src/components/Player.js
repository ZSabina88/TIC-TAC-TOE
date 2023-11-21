import React from 'react';
import { useState } from 'react';

function Player({ initialName, symbol }) {
    const [isEditing, setIsEditing] = useState(false);
    const [playerName, setplayerName] = useState(initialName);

    const handleClick = () => {
        setIsEditing(editing => !editing);
    };

    const handleChange = (e) => {
        setplayerName(e.target.value);
    }

    let editPlayerName = <span className='player-name'>{playerName}</span>;

    if (isEditing) {
        editPlayerName = <input type='text' value={playerName} onChange={handleChange} required />
    }

    return (
        <li>
            <span className='player'>
                {editPlayerName}
                <span className='player-symbol'>{symbol}</span>
            </span>
            <button onClick={handleClick}>{isEditing ? "Save" : "Edit"}</button>
        </li>
    );
}

export default Player;
