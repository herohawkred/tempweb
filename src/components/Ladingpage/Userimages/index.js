import React from 'react';
import {Subsubtitlemobile,Userimagessmobile,Title,Subtitle,Subsubtitle,UserimagessectionMobile,Imagediv,Userimagess,Userimagesection,Userimagestextsection,Userimagessection} from './Userimageselements';
import Image1 from '../../../images/Landingpage/Userimages/userimage_1.jpg';
import Image2 from '../../../images/Landingpage/Userimages/userimage_2.jpg';
import Image3 from '../../../images/Landingpage/Userimages/userimage_3.jpg';
import Image4 from '../../../images/Landingpage/Userimages/userimage_4.jpg';
import Image5 from '../../../images/Landingpage/Userimages/userimage_5.jpg';
import Image6 from '../../../images/Landingpage/Userimages/userimage_6.jpg';
import Image7 from '../../../images/Landingpage/Userimages/userimage_7.jpg';
import Image8 from '../../../images/Landingpage/Userimages/userimage_8.jpg';
import ImageMobile1 from '../../../images/Landingpage/Userimages/userimage_mobile_1.jpg';
import ImageMobile2 from '../../../images/Landingpage/Userimages/userimage_mobile_2.jpg';
import ImageMobile3 from '../../../images/Landingpage/Userimages/userimage_mobile_3.jpg';
import ImageMobile4 from '../../../images/Landingpage/Userimages/userimage_mobile_4.jpg';
import ImageMobile5 from '../../../images/Landingpage/Userimages/userimage_mobile_5.jpg';
import ImageMobile6 from '../../../images/Landingpage/Userimages/userimage_mobile_6.jpg';
import ImageMobile7 from '../../../images/Landingpage/Userimages/userimage_mobile_7.jpg';
import ImageMobile8 from '../../../images/Landingpage/Userimages/userimage_mobile_8.jpg';
//import Text from '../../../images/Landingpage/Userimages/userimagetext.svg';
import Slider from "react-slick";

{/*나누기*/}
{/*
export const Userimages = ({UserimageTitle,UserimageSubtitle,UserimageDescription}) => {
    
    return (
        <Userimagesection>
            <Userimagestextsection>
              {/*  <Title>{UserimageTitle}</Title>
                <Subtitle>{UserimageSubtitle} </Subtitle>
                <Userimagetext>{UserimageDescription}</Userimagetext>
                <Userimagetextimg src={Text} alt="imgtext"/> 
                <Userimagetextimg src={Text} alt="imgtext"/>
            </Userimagestextsection>
            <Userimagessection>
                    <Userimagess src={Image1} alt="Image1"/>
                    <Userimagess src={Image2} alt="Image2"/>
                    <Userimagess src={Image3} alt="Image3"/>
                    <Userimagess src={Image4} alt="Image4"/>
                    <Userimagess src={Image5} alt="Image5"/>
            </Userimagessection>
            

        </Userimagesection>      
    );
}

export default Userimages;
*/}

  

const Userimages = ({index,UserimageTitle,UserimageSubtitle,UserimageDescription}) => { //부모 컴포넌트에서 받은 state와 method

    //settings 부분, 슬라이더의 기능을 조정할 수 있다.
    const settings = {
        className: "slider variable-width",
        infinite: true,
        slidesToShow: 3,
        speed: 1500,
        autoplay:true,
        autoplaySpeed:500,
        variableWidth: true,

        responsive: [
            {
                breakpoint: 480,
                settings: {
                    infinite:true,
                    slidesToShow:1,
                    slidesToScroll:1,
                    autoplay:true,
                    speed: 2000,
                    autoplaySpeed: 1000,
                    arrows:false
                    
                },
            },
        ],
    };


return (
        

    <Userimagesection>
        <Userimagestextsection >
            <Title>{UserimageTitle}</Title>
                {UserimageSubtitle.map((userimagesub , index) =>(
            <Subtitle key= {index}>
                {userimagesub.yourrecord}<br/>
                {userimagesub.shareit}
            </Subtitle>
                    ))}

                {UserimageDescription.map((userimageDescription , index) =>(
            <Subsubtitle key= {index}>
                {userimageDescription.together}<br/>
                {userimageDescription.share}
            </Subsubtitle>
                    ))}

                {UserimageDescription.map((userimageDescription , index) =>(
            <Subsubtitlemobile key= {index}>
                {userimageDescription.mobile1}<br/>
                {userimageDescription.mobile2}<br/>
                {userimageDescription.mobile3}<br/>
            </Subsubtitlemobile>
                    ))}

        </Userimagestextsection>
    <Imagediv>
         <Userimagessection key={index} >
            <Slider {...settings} >
                    <Userimagess src={Image1} alt="Image1"/>
                    <Userimagess src={Image2} alt="Image2"/>
                    <Userimagess src={Image3} alt="Image3"/>
                    <Userimagess src={Image4} alt="Image4"/>
                    <Userimagess src={Image5} alt="Image5"/>
                    <Userimagess src={Image6} alt="Image6"/>
                    <Userimagess src={Image7} alt="Image7"/>
                    <Userimagess src={Image8} alt="Image8"/>
            </Slider>
        </Userimagessection>
        <UserimagessectionMobile >
            <Slider {...settings}>
                    <Userimagessmobile key={11} src={ImageMobile1} alt="Image12"/>
                    <Userimagessmobile key={12} src={ImageMobile2} alt="Image13"/>
                    <Userimagessmobile key={13} src={ImageMobile3} alt="Image13"/>
                    <Userimagessmobile key={14} src={ImageMobile4} alt="Image14"/>
                    <Userimagessmobile key={15} src={ImageMobile5} alt="Image15"/>
                    <Userimagessmobile key={16} src={ImageMobile6} alt="Image16"/>
                    <Userimagessmobile key={17} src={ImageMobile7} alt="Image17"/>
                    <Userimagessmobile key={18} src={ImageMobile8} alt="Image18"/>
            </Slider>
        </UserimagessectionMobile>
    </Imagediv>

</Userimagesection>

      );
    };
    
export default Userimages;