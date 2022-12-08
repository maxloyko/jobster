import React from 'react';
import Wrapper from "../assets/wrappers/SmallSidebar";
import {FaTimes} from "react-icons/fa";
import {NavLink} from "react-router-dom";
import Logo from "./Logo";
import {useSelector, useDispatch} from "react-redux";
import {toggleSidebar} from "../features/user/userSlice";
import links from "../utils/links";

const SmallSidebar = () => {
    const {isSidebarOpen} = useSelector((state) => state.user)
    const dispatch = useDispatch();
    const toggle = () => {
        dispatch(toggleSidebar())
    }
    return (
        <Wrapper>
            <div className={isSidebarOpen ? "sidebar-container show-sidebar" : "sidebar-container"}>
                <div className="content">
                    <button type={"button"} className={'close-btn'} onClick={toggle}>
                        <FaTimes/>
                    </button>
                    <header>
                        <Logo/>
                    </header>
                    <div className="nav-links">
                        {links.map((link) => {
                            const {id, text, path, icon} = link;
                            return <NavLink
                                to={path}
                                className={({isActive}) => isActive ? 'nav-link active' : 'nav-link'}
                                key={id}
                                onClick={toggle}
                            >
                                <span className={'icon'}>{icon}</span>
                                {text}
                            </NavLink>
                        })}
                    </div>
                </div>
            </div>
        </Wrapper>
    );
};

export default SmallSidebar;