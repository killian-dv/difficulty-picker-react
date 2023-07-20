import { useState } from "react";
import { DisplayDifficulty } from "./components/DisplayDifficulty/DisplayDifficulty";
import { MenuList } from "./components/MenuList/MenuList";

export function App() {

    const [currentDifficulty, setCurrentDifficulty] = useState("");

    function updateDifficulty(difficulty) {
        setCurrentDifficulty(difficulty);
    }

    return (
        <div>
            <MenuList 
                onItemClick={updateDifficulty}
                difficulty={currentDifficulty} 
            />
            <DisplayDifficulty difficulty={currentDifficulty} />
        </div>
    );
}