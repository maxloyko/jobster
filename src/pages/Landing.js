import React from 'react';
import main from '../assets/images/main.svg'
import Wrapper from "../assets/wrappers/LandingPage";
import {Logo} from '../component'
import {Link} from "react-router-dom";
const Landing = () => {
    return (
        <Wrapper>
            <nav>
                <Logo/>
            </nav>
            <div className="container page">
                <div className="info">
                    <h1>
                        job <span>tracking</span> app
                    </h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aliquam at beatae consectetur
                        cupiditate delectus doloremque doloribus enim error eveniet fuga itaque quae quaerat, quidem
                        reprehenderit rerum tenetur. Deleniti, reiciendis!</p>
                    <Link to={'/register'} className={'btn btn-hero'}>login/register</Link>
                </div>
                <img src={main} alt="main" className={'img main-img'}/>
            </div>
        </Wrapper>
    );
};



export default Landing;