import React, { useEffect } from 'react'
import {Programoneoftwomobile,Programsectorcontainer,Programone,Programtwo,Title,Subtitle,Programtext,Programoneofone,Programoneoftwo,Programoneofthree,Programoneofour,Programoneoffive,Programimgone,Programimgtwo,Programimgthree,Programimgfour} from './Programelements';
import Programimageone from '../../../images/Landingpage/Programs/fitness program.svg';
import Programimagetwo from '../../../images/Landingpage/Programs/startingstrength.svg';
import Programimagethree from '../../../images/Landingpage/Programs/Madcow.svg';
import Programimagefour from '../../../images/Landingpage/Programs/pullup.svg';

import Programimageonemobile from '../../../images/Landingpage/Programs/fitness program_mobile.jpg';
import Programimagetwomobile from '../../../images/Landingpage/Programs/startingstrength_mobile.jpg';
import Programimagethreemobile from '../../../images/Landingpage/Programs/Madcow_mobile.jpg';
import Programimagefourmobile from '../../../images/Landingpage/Programs/pullup_mobile.jpg';



import AOS from "aos";
import 'aos/dist/aos.css';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

export const Programsector = ({Titleone, Headlineone, Textinfo }) => {
    useEffect(() => {
        AOS.init({
          duration : 1000
        });
      }, []);

    const mobilesettings = {
        className: "slider variable-width",
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 200,
        autoplay:true,
        variableWidth: true,
        arrows:false

    };
    return (
        <Programsectorcontainer>
            <Programone>
                <Programoneofone>
                    <Title>{Titleone}</Title>

                        {Headlineone.map((headline , index) =>(
                    <Subtitle key= {index}>
                        {headline.diverse}<br/>
                        {headline.workoutprogram}
                    </Subtitle>
                         ))}

                        {Textinfo.map((textinfo , index) =>(
                    <Programtext key ={index}>
                    {textinfo.mobileone}<br/>
                    {textinfo.mobiletwo}<br/>
                    {textinfo.mobilethree}<br/>
                    {textinfo.mobilefour}
                    </Programtext>
                        ))}

                </Programoneofone>
                <Programoneoftwo>
                    <Programimgone src={Programimageone} alt="Image1" data-aos="fade-down"data-aos-easing="linear" data-aos-duration="1000"/>
                </Programoneoftwo>


                <Programoneoftwomobile>
                    <Slider {...mobilesettings}>
                        <Programimgone src={Programimageonemobile} alt="Image1" data-aos-duration="2000"/>
                        <Programimgone src={Programimagetwomobile} alt="Image2" data-aos-duration="3000"/>
                        <Programimgone src={Programimagethreemobile} alt="Image3" data-aos-duration="3000"/>
                        <Programimgone src={Programimagefourmobile} alt="Image4" data-aos-duration="4000"/>
                    </Slider>
                </Programoneoftwomobile>

            </Programone>
            <Programtwo>
                <Programoneofthree>
                    <Programimgtwo src={Programimagetwo} alt="Image2" data-aos="fade-down"data-aos-easing="linear" data-aos-duration="1000"/>
                </Programoneofthree>
                <Programoneofour>
                    <Programimgthree src={Programimagethree} alt="Image3" data-aos="fade-down"data-aos-easing="linear" data-aos-duration="1000"/>
                </Programoneofour>
                <Programoneoffive>
                    <Programimgfour src={Programimagefour} alt="Image4" data-aos="fade-down"data-aos-easing="linear" data-aos-duration="1000"/>
                </Programoneoffive>         
            </Programtwo>
        </Programsectorcontainer>
    );
}

export default Programsector;
