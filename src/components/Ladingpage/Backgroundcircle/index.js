import React from 'react'
import {BackgroundobjectimgMobile,Backgrounddiv,Backgroundobjectimg} from './Backgroundcircleelements'
import Backgroundimage_1 from '../../../images/Landingpage/backgroundobject.png';
import Backgroundimage_mobile from '../../../images/Landingpage/backgroundobjectmobile.png';


export const Backgroundcircle = () => {
    return (
            <Backgrounddiv>
         <Backgroundobjectimg src = {Backgroundimage_1}/>
         <BackgroundobjectimgMobile src ={Backgroundimage_mobile}/>
            </Backgrounddiv>
        );
}

export default Backgroundcircle;