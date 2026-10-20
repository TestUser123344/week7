import { useState } from 'react';
import { useAutosleep } from './utils/useAutosleep';

function Creature(props) {
    // BASIC Each creature owns its own state
    const [isAwake, setIsAwake] = useState(false);  
    const [x, setX] = useState(props.initialX);
    const [y, setY] = useState(props.initialY);
    //useAutosleep(isAwake, () => setIsAwake(false), 3000);

    const style = {
        position: 'absolute',
        left: x + 'px',
        top: y + 'px',
        textAlign: 'center',
        imageRendering: 'pixelated',
        cursor: 'pointer' // Cursor changes to pointer on hover
    };

    // BASIC toggle isAwake and move when waking up
    const handleClick = () => {
        if (!isAwake) {
            // Waking up - toggle and move to new random position
            setIsAwake(true);
            setX(Math.floor(Math.random() * 700));
            setY(Math.floor(Math.random() * 700));
        } else {
            // Going back to sleep - toggle only, stay in position
            setIsAwake(false);
        }
    };

    return (
        <div style={style} onClick={handleClick}>
            {/* BASIC conditional rendering for image */}
            <img
                src={isAwake ? props.awakeImageUrl : props.sleepImageUrl}
                alt={props.name}
                width="120"
            />
            <p>{props.name}, age {props.age}</p>
        </div>
    );
}

export default Creature;
