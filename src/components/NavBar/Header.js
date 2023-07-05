import * as React from 'react';
import {NavLink} from "react-router-dom";
import {useSelector} from "react-redux";
import {busketSelect} from "../../redux/slices/basketSlice";


function Header() {
    const {busket} = useSelector(busketSelect)

    return (
        <div>
            <NavLink className='link' to={'/'}>
                HOME
            </NavLink>
            <buscket/>
            {!!busket.length && busket.length}
        </div>
    );
}

export default Header;
