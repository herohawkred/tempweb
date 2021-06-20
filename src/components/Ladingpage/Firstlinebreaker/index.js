import React from 'react'
import {Linebreaker,Linebreakerimg,Linebreakerimgmobile} from './linebreakerelements'
import Marquee from "react-fast-marquee";
import Firstlineb from '../../../images/Landingpage/Headerimages/1stframe.svg'
import Firstlinebmobile from '../../../images/Landingpage/Headerimages/1stframemobile.svg'

export const Firstlinebreaker = () => {
    return (
        <Linebreaker>
        <Marquee gradient = {false} speed = {40}>
                <Linebreakerimg src ={Firstlineb}/>&ensp;&ensp;
                <Linebreakerimg src ={Firstlineb}/>
                <Linebreakerimgmobile src ={Firstlinebmobile}/>&ensp;&ensp;
                <Linebreakerimgmobile src ={Firstlinebmobile}/>
        </Marquee>
    </Linebreaker>
    );
}

export default Firstlinebreaker;