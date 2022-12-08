import React from 'react';
import Wrapper from "../assets/wrappers/BigSidebar";
import NavLinks from "./NavLinks";
import Logo from "./Logo";
import {useSelector} from "react-redux";
const BigSidebar = () => {
    const {isSidebarOpen} = useSelector((store) => store.user)
    return (
        <Wrapper>
            <div className={isSidebarOpen ? 'sidebar-container' : 'sidebar-container show-sidebar'}>
                <div className="content">
                    <header><Logo/></header>
                </div>
                <NavLinks/>
            </div>
        </Wrapper>
    );
};

export default BigSidebar;