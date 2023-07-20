import s from "./style.module.css";
import { MenuListItem } from "../MenuListItem/MenuListItem";
import { DIFFICULTIES } from "./constant";

export function MenuList({ difficulty, onItemClick }) {
    return (
        <div className={s.container}>
            {
                DIFFICULTIES.map((diff) => (
                    <MenuListItem
                        onClick={onItemClick}
                        difficulty={diff}
                        isSelected={difficulty === diff}
                    />
                ))
            }
        </div>
    );
}
