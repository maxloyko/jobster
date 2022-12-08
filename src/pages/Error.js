import React from 'react';
import Wrapper from "../assets/wrappers/ErrorPage";
import {Link} from "react-router-dom";
import img from '../assets/images/not-found.svg'

const Error = () => {
    return (
        <Wrapper className={'full-page'}>
            <div>
                <img src={img} alt="error"/>
                <h3>Ouch page not found!</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias assumenda commodi consectetur, dolore
                    incidunt ipsam ipsum, laborum molestiae molestias pariatur quae quibusdam similique soluta vel
                    veritatis vero voluptas. Consequatur, maxime!</p>
                <Link to={'/'}>back home</Link>
            </div>
        </Wrapper>
    );
};

export default Error;