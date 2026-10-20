import { useEffect } from 'react';

/**
 * Custom hook: useAutosleep
 * 
 * This hook automatically puts a creature to sleep after a 
 * given delay. When isAwake becomes true, the hook starts a 
 * timer. When the timer runs out, it calls goToSleep().
 * 
 * Parameters:
 * - isAwake: current awake state (boolean)
 * - goToSleep: function to call when the timer runs out
 * - delay: time in milliseconds before falling asleep 
 *          (default 3000 ms)
 * 
 * Usage in a version where Creature owns its own state:
 * 
 *   import { useAutosleep } from './utils/useAutosleep.js';
 *   
 *   const [isAwake, setIsAwake] = useState(false);
 *   useAutosleep(isAwake, () => setIsAwake(false), 3000);
 * 
 * Usage in a version where state is lifted to CreatureField:
 * 
 *   In CreatureField:
 *   - Create a function handleAutoSleep(id) that sets a 
 *     specific creature's isAwake to false without moving it.
 *     This is different from handleWake which also changes 
 *     position.
 *   - Pass it to each Creature as a callback prop called 
 *     onAutoSleep.
 * 
 *   In Creature:
 *   - Import useAutosleep
 *   - Call: useAutosleep(props.isAwake, props.onAutoSleep, 3000)
 *   - The hook will call props.onAutoSleep after the delay,
 *     which flows up to CreatureField and updates the state.
 */
export function useAutosleep(isAwake, goToSleep, delay = 3000) {
    useEffect(() => {
        if (isAwake) {
            const timer = setTimeout(() => {
                goToSleep();
            }, delay);
            
            // Cleanup: if the component re-renders or disappears,
            // clear the timer so it doesn't trigger unexpectedly
            return () => clearTimeout(timer);
        }
    }, [isAwake, goToSleep, delay]);
}