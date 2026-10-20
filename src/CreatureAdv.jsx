import { useState } from "react";
import { useAutosleep } from './utils/useAutosleep.js'; // BONUS

function CreatureAdv(props) {

    useAutosleep(props.isAwake, props.onAutoSleep, 5000);// BONUS  creature fall asleep after 5 seconds

    const style = {
        position: 'absolute',
        left: props.x + 'px',
        top: props.y + 'px',
        textAlign: 'center',
        imageRendering: 'pixelated',
        cursor: 'pointer' // Cursor changes to pointer on hover
    };

    const handleClick = () => {
        props.onWake(props.id);
    };

    return (
        <div style={style} onClick={handleClick}>
            <img
                src={props.isAwake ? props.awakeImageUrl : props.sleepImageUrl}
                alt={props.name}
                width="120"
            />
            <p>{props.name}, age {props.age}</p>
        </div>
    );
}

export default CreatureAdv;
