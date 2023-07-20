import s from "./style.module.css";
import { MenuListItem } from "../MenuListItem/MenuListItem";

export function MenuList({ difficulty, onItemClick }) {
    return (
        <div className={s.container}>
            <MenuListItem onClick={onItemClick} difficulty="Low" />
            <MenuListItem onClick={onItemClick} difficulty="Medium" />
            <MenuListItem onClick={onItemClick} difficulty="High" />
            <MenuListItem onClick={onItemClick} difficulty="Insane" />
        </div>
    );
}
