import { useState } from 'react';
import CreatureAdv from './CreatureAdv.jsx';

function CreatureFieldAdv() {
    // ADVANCED State lifted up to CreatureField as an array
    const [creatures, setCreatures] = useState([
        {
            id: 1, name: "Mr. Fresh", age: 3,
            sleepImageUrl: "/images/first_sleep.png",
            awakeImageUrl: "/images/first_awake.png",
            x: 120, y: 140, isAwake: false
        },
        {
            id: 2, name: "Meimei", age: 5,
            sleepImageUrl: "/images/second_sleep.png",
            awakeImageUrl: "/images/second_awake.png",
            x: 300, y: 260, isAwake: false
        },
        {
            id: 3, name: "Bingus", age: 2,
            sleepImageUrl: "/images/third_sleep.png",
            awakeImageUrl: "/images/third_awake.png",
            x: 550, y: 40, isAwake: false
        },
        {
            id: 4, name: "Leipä", age: 4,
            sleepImageUrl: "/images/fourth_sleep.png",
            awakeImageUrl: "/images/fourth_awake.png",
            x: 150, y: 420, isAwake: false
        },
        {
            id: 5, name: "Mista", age: 4,
            sleepImageUrl: "/images/fifth_sleep.png",
            awakeImageUrl: "/images/fifth_awake.png",
            x: 550, y: 590, isAwake: false
        }
    ]);

    // ADVANCED Count awake creatures for summary
    const awakeCount = creatures.filter(c => c.isAwake).length;
    const allAwake = awakeCount === creatures.length;
    const allAsleep = awakeCount === 0;

    // ADVANCED Handle individual creature wake/sleep
    const handleWake = (id) => {
        setCreatures(creatures.map(c => {
            if (c.id === id) {
                if (!c.isAwake) {
                    // Waking up - toggle and move to random position
                    return {
                        ...c,
                        isAwake: true,
                        x: Math.floor(Math.random() * 700),
                        y: Math.floor(Math.random() * 700)
                    };
                } else {
                    // Going to sleep - toggle only, stay in position
                    return { ...c, isAwake: false };
                }
            }
            return c;
        }));
    };

    // BONUS Handle auto-sleep
    const handleAutoSleep = (id) => {
        setCreatures(creatures.map(c =>
            c.id === id ? { ...c, isAwake: false } : c
        ));
    };


    // ADVANCEd - Toggle all creatures
    const toggleAll = () => {
        if (allAwake) {
            // All awake -> put all to sleep
            setCreatures(creatures.map(c => ({ ...c, isAwake: false })));
        } else {
            // Some or all asleep -> wake all and move to random positions
            setCreatures(creatures.map(c => ({
                ...c,
                isAwake: true,
                x: Math.floor(Math.random() * 700),
                y: Math.floor(Math.random() * 700)
            })));
        }
    };

    // ADVANCED Background color changes
    let backgroundColor = '#ffffff';
    if (allAwake) backgroundColor = '#ffd700';
    else if (allAsleep) backgroundColor = '#1a1a2e';

    const fieldStyle = {
        position: 'relative',
        width: '800px',
        height: '800px',
        border: '2px solid #ccc',
        margin: '20px auto',
        backgroundColor: backgroundColor
        };


    return (
        <div>
            {/* ADVANCED Summary and toggle button */}
            <div style={{ textAlign: 'center', margin: '10px' }}>
                <p>{awakeCount} of {creatures.length} creatures awake</p>
                <button onClick={toggleAll}>
                    {allAwake ? 'Let all sleep' : 'Wake all'}
                </button>
            </div>

            <div style={fieldStyle}>
                {creatures.map(c => (
                    <CreatureAdv
                        key={c.id} id={c.id} name={c.name}
                        age={c.age}
                        sleepImageUrl={c.sleepImageUrl}
                        awakeImageUrl={c.awakeImageUrl}
                        x={c.x} y={c.y}
                        isAwake={c.isAwake} onWake={handleWake}
                        //onAutoSleep={() => handleAutoSleep(c.id)}// BONUS - enable auto-sleep
                    />
                ))}
            </div>
        </div>
    );
}

export default CreatureFieldAdv;
