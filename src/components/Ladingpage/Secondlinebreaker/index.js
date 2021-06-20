import React from 'react'
import {Linebreaker,Secondbreakerimg} from './linebreakerelements'
import Secondlineb from '../../../images/Landingpage/BunnFit Workout.svg'
import Marquee from "react-fast-marquee";

export const Secondlinebreaker = () => {
    return (
        <Linebreaker>
            <Marquee gradient={false}>
                <Secondbreakerimg src={Secondlineb} alt="secondlinebreaker"/>
                <Secondbreakerimg src={Secondlineb} alt="secondlinebreaker"/>
            </Marquee>
        </Linebreaker>
    );
}

export default Secondlinebreaker;