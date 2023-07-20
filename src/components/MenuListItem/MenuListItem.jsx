import { useState } from "react";
import s from "./style.module.css";

export function MenuListItem({onClick, difficulty}) {
const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            onClick={() => onClick(difficulty)}
            style={{backgroundColor: isHovered ? "#a5e9ff" : "#eff0ef"}}
            className={s.container}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            Set to : {difficulty}
      </div>
    );
}
