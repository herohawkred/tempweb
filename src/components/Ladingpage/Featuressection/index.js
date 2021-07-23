import React, { useEffect } from "react";
import {Featuredivmobile,Mobileinfosectioncontainer,Blankdiv,Mobileinfo,Mobilemockupimg,Title,Phonemockupdivright,Phonemockupdivleft,Mockuptextleft,Mockuptextright, Featuretext,Headline,Mobilemockupimgleft} from './Mobileinfoelements'
import Featureimage1 from '../../../images/Landingpage/Featureimages/featureimage_1.png';
import Featureimage1en from '../../../images/Landingpage/Featureimages/featureimage_1en.png';
import Featureimage2 from '../../../images/Landingpage/Featureimages/featureimage_2.png';
import Featureimage2en from '../../../images/Landingpage/Featureimages/featureimage_2en.png';
import Featureimage3 from '../../../images/Landingpage/Featureimages/featureimage_3.png';
import Featureimage3en from '../../../images/Landingpage/Featureimages/featureimage_3en.png';
import featureimagemobile1 from '../../../images/Landingpage/Featureimages/featureimagemobile1.png';
import featureimagemobile1en from '../../../images/Landingpage/Featureimages/featureimagemobile1en.png';
import featureimagemobile2 from '../../../images/Landingpage/Featureimages/featureimagemobile2.png';
import featureimagemobile2en from '../../../images/Landingpage/Featureimages/featureimagemobile2en.png';
import featureimagemobile3 from '../../../images/Landingpage/Featureimages/featureimagemobile3.png';
import featureimagemobile3en from '../../../images/Landingpage/Featureimages/featureimagemobile3en.png';
import AOS from "aos";
import 'aos/dist/aos.css';
import { useTranslation } from 'react-i18next';

export const Featuressection = ({Mobilemockupimgsafa,Titleone,Titletwo,Titlethree,Headlineone,Headlinetwo,Headlinethree,Featuretextone,Featuretexttwo,Featuretextthree,index}) => {
    useEffect(() => {
        AOS.init({
          duration : 2000,
        });
      }, []);
const { t, i18n } = useTranslation();

var image1,image2,image3,mobileimage1,mobileimage2,mobileimage3;

if (navigator.language === 'en' ){
    image1 = Featureimage1en
    image2 = Featureimage2en
    image3 = Featureimage3en
    mobileimage1 = featureimagemobile1en
    mobileimage2 = featureimagemobile2en
    mobileimage3 = featureimagemobile3en

}else if(navigator.language === "ko"){
    image1 = Featureimage1
    image2 = Featureimage2
    image3 = Featureimage3
    mobileimage1 = featureimagemobile1
    mobileimage2 = featureimagemobile2
    mobileimage3 = featureimagemobile3
}else {
    image1 = Featureimage1en
    image2 = Featureimage2en
    image3 = Featureimage3en
    mobileimage1 = featureimagemobile1en
    mobileimage2 = featureimagemobile2en
    mobileimage3 = featureimagemobile3en
}

;

    return (
        <Mobileinfosectioncontainer >
            <Mobileinfo >
            <Blankdiv></Blankdiv><Blankdiv></Blankdiv>
                <Mockuptextleft >
                    <Title > {t('Featuresection.titleone')}</Title> 
                    <Headline >{t('Featuresection.headlineone')} </Headline>
                    
                        {Featuretextone.map((featuretext , index) =>(
                    <Featuretext key= {index}>
                        {t('Featuresection.featuretextone_one')}<br/>
                        {t('Featuresection.featuretextone_two')}<br/>
                        {t('Featuresection.featuretextone_three')}<br/>
                        {t('Featuresection.featuretextone_four')}
                    </Featuretext>
                         ))}

                </Mockuptextleft>
                <Phonemockupdivright >
                    <Mobilemockupimg src={image1} alt="Workout planner" data-aos="fade-left" data-aos-duration="2000"/>
                </Phonemockupdivright>
{/*나누기*/}
                <Phonemockupdivleft >
                    <Mobilemockupimgleft src={image2} alt="Tracking workout" data-aos="fade-right"/>
                </Phonemockupdivleft>
                <Mockuptextright >
                    <Title >{t('Featuresection.titletwo')}</Title>

                    {Headlinetwo.map((headline , index) =>(
                    <Headline key= {index}>
                        {t('Featuresection.headlinetwo_one')} <br/>
                        {t('Featuresection.headlinetwo_two')}
                    </Headline>
                         ))}

                      {Featuretexttwo.map((featuretext , index) =>(
                    <Featuretext key= {index}>
                        {t('Featuresection.featuretexttwo_one')}<br/>
                        {t('Featuresection.featuretexttwo_two')}<br/>
                        {t('Featuresection.featuretexttwo_three')}<br/>
                    </Featuretext>
                         ))}
                </Mockuptextright>
{/*나누기*/}
                <Mockuptextleft >
                    <Title >{t('Featuresection.titlethree')}</Title>

                    {Headlinethree.map((headline , index) =>(
                    <Headline key= {index}>
                         {t('Featuresection.headlinethree_one')}<br/>
                         {t('Featuresection.headlinethree_two')}
                    </Headline>
                     ))}

                    {Featuretextthree.map((featuretext , index) =>(
                    <Featuretext key= {index}>
                        {t('Featuresection.featuretextthree_one')}<br/>
                        {t('Featuresection.featuretextthree_two')}<br/>
                        {t('Featuresection.featuretextthree_three')}
                    </Featuretext>
                         ))}
                </Mockuptextleft>
                <Phonemockupdivright >
                    <Mobilemockupimg src={image3} alt="Home workout" data-aos="fade-left"/>
                </Phonemockupdivright>

{/*모바일버전   */}
                <Featuredivmobile >
                    <Title >{t('Featuresection.titleone')}</Title>
                    <Headline >{t('Featuresection.headlineone')} </Headline>
                    <Mobilemockupimg src={mobileimage1} alt="Workout planner" data-aos="fade-up"data-aos-easing="linear" data-aos-duration="700"/>
                    
                        {Featuretextone.map((featuretext , index) =>(
                    <Featuretext key= {index}>
                        {t('Featuresection.featuretextone_one')}<br/>
                        {t('Featuresection.featuretextone_two')}<br/>
                        {t('Featuresection.featuretextone_mobilethree')}<br/>
                        {t('Featuresection.featuretextone_mobilefour')}
                    </Featuretext>
                         ))}
                    

                </Featuredivmobile>

                <Featuredivmobile >
                    <Title >{t('Featuresection.titletwo')}</Title>
                    {Headlinetwo.map(( index) =>(
                    <Headline key= {index}>
                         {t('Featuresection.headlinetwo_one')}<br/>
                         {t('Featuresection.headlinetwo_two')}
                    </Headline>
                         ))}
                    <Mobilemockupimg src={mobileimage2} alt="Tracking workout" data-aos="fade-up"data-aos-easing="linear" data-aos-duration="700"/>
                    {Featuretexttwo.map((index) =>(
                    <Featuretext key= {index}>
                        {t('Featuresection.featuretexttwo_one')}<br/>
                        {t('Featuresection.featuretexttwo_twomobile')}<br/>
                        {t('Featuresection.featuretexttwo_threemobile')}
                    </Featuretext>
                         ))}
                </Featuredivmobile>
                <Featuredivmobile >
                    <Title >{t('Featuresection.titlethree')}</Title>
                        {Headlinethree.map((headline , index) =>(
                        <Headline key= {index}>
                            {t('Featuresection.headlinethree_one')}<br/>
                            {t('Featuresection.headlinethree_two')}
                        </Headline>
                        ))}
                    <Mobilemockupimg src={mobileimage3} alt="Home workout" data-aos="fade-up"data-aos-easing="linear" data-aos-duration="700"/>
                    {Featuretextthree.map((featuretext , index) =>(
                    <Featuretext key= {index}>
                        {t('Featuresection.featuretextthree_one')}<br/>
                        {t('Featuresection.featuretextthree_two')}<br/>
                        {t('Featuresection.featuretextthree_three')}
                    </Featuretext>
                         ))}
                </Featuredivmobile>
            </Mobileinfo> 
        </Mobileinfosectioncontainer>
        
    );
}

export default Featuressection;