import React from "react";
import useToggle from './hooks/useToggle';
function Toggler() {
    const [isHappy, toggleIsHappy] = useToggle(true);
    const [inLove, toggleinlove] = useToggle(true);

    return (
        <div>
            <h1 onClick={toggleIsHappy}>{isHappy ? "😀" : "😞"}</h1>
            <h1 onClick={toggleinlove}>{inLove ? "❤️" : "💔"}</h1>

        </div>
    );

}
export default Toggler;

