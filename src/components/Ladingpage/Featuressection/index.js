import React, { useEffect } from "react";
import {Featuredivmobile,Mobileinfosectioncontainer,Blankdiv,Mobileinfo,Mobilemockupimg,Title,Phonemockupdivright,Phonemockupdivleft,Mockuptextleft,Mockuptextright, Featuretext,Headline,Mobilemockupimgleft} from './Mobileinfoelements'
import Featureimage1 from '../../../images/Landingpage/Featureimages/featureimage_1.png';
import Featureimage2 from '../../../images/Landingpage/Featureimages/featureimage_2.png';
import Featureimage3 from '../../../images/Landingpage/Featureimages/featureimage_3.png';
import featureimagemobile1 from '../../../images/Landingpage/Featureimages/featureimagemobile1.png';
import featureimagemobile2 from '../../../images/Landingpage/Featureimages/featureimagemobile2.png';
import featureimagemobile3 from '../../../images/Landingpage/Featureimages/featureimagemobile3.png';
import AOS from "aos";
import 'aos/dist/aos.css';

export const Featuressection = ({Titleone,Titletwo,Titlethree,Headlineone,Headlinetwo,Headlinethree,Featuretextone,Featuretexttwo,Featuretextthree,index}) => {
    useEffect(() => {
        AOS.init({
          duration : 2000,
        });
      }, []);
    
    return (
        <Mobileinfosectioncontainer >
            <Mobileinfo >
            <Blankdiv></Blankdiv><Blankdiv></Blankdiv>
                <Mockuptextleft >
                    <Title >{Titleone}</Title> 
                    <Headline >{Headlineone} </Headline>
                    
                        {Featuretextone.map((featuretext , index) =>(
                    <Featuretext key= {index}>
                        {featuretext.featuretextone_one}<br/>
                        {featuretext.featuretextone_two}<br/>
                        {featuretext.featuretextone_three}<br/>
                        {featuretext.featuretextone_four}
                    </Featuretext>
                         ))}

                </Mockuptextleft>
                <Phonemockupdivright >
                    <Mobilemockupimg src={Featureimage1} alt="mobilemockupimg" data-aos="fade-left" data-aos-duration="2000"/>
                </Phonemockupdivright>
{/*나누기*/}
                <Phonemockupdivleft >
                    <Mobilemockupimgleft src={Featureimage2} alt="mobilemockupimg" data-aos="fade-right"/>
                </Phonemockupdivleft>
                <Mockuptextright >
                    <Title >{Titletwo}</Title>

                    {Headlinetwo.map((headline , index) =>(
                    <Headline key= {index}>
                        {headline.headlinetwo_one}<br/>
                        {headline.headlinetwo_two}
                    </Headline>
                         ))}

                      {Featuretexttwo.map((featuretext , index) =>(
                    <Featuretext key= {index}>
                        {featuretext.featuretexttwo_one}<br/>
                        {featuretext.featuretexttwo_two}<br/>
                        {featuretext.featuretexttwo_three}<br/>
                    </Featuretext>
                         ))}
                </Mockuptextright>
{/*나누기*/}
                <Mockuptextleft >
                    <Title >{Titlethree}</Title>

                    {Headlinethree.map((headline , index) =>(
                    <Headline key= {index}>
                        {headline.headlinethree_one}<br/>
                        {headline.headlinethree_two}
                    </Headline>
                     ))}

                    {Featuretextthree.map((featuretext , index) =>(
                    <Featuretext key= {index}>
                        {featuretext.featuretextthree_one}<br/>
                        {featuretext.featuretextthree_two}<br/>
                        {featuretext.featuretextthree_three}
                    </Featuretext>
                         ))}
                </Mockuptextleft>
                <Phonemockupdivright >
                    <Mobilemockupimg src={Featureimage3} alt="mobilemockupimg" data-aos="fade-left"/>
                </Phonemockupdivright>

{/*모바일버전   */}
                <Featuredivmobile >
                    <Title >{Titleone}</Title>
                    <Headline >{Headlineone} </Headline>
                    <Mobilemockupimg src={featureimagemobile1} alt="mobilemockupimg" data-aos="fade-up"data-aos-easing="linear" data-aos-duration="700"/>
                    
                        {Featuretextone.map((featuretext , index) =>(
                    <Featuretext key= {index}>
                        {featuretext.featuretextone_one}<br/>
                        {featuretext.featuretextone_two}<br/>
                        {featuretext.featuretextone_mobilethree}<br/>
                        {featuretext.featuretextone_mobilefour}
                    </Featuretext>
                         ))}
                    

                </Featuredivmobile>

                <Featuredivmobile >
                    <Title >{Titletwo}</Title>
                    {Headlinetwo.map((headline , index) =>(
                    <Headline key= {index}>
                        {headline.headlinetwo_one}<br/>
                        {headline.headlinetwo_two}
                    </Headline>
                         ))}
                    <Mobilemockupimg src={featureimagemobile2} alt="mobilemockupimg" data-aos="fade-up"data-aos-easing="linear" data-aos-duration="700"/>
                    {Featuretexttwo.map((featuretext , index) =>(
                    <Featuretext key= {index}>
                        {featuretext.featuretexttwo_one}<br/>
                        {featuretext.featuretexttwo_twomobile}<br/>
                        {featuretext.featuretexttwo_threemobile}
                    </Featuretext>
                         ))}
                </Featuredivmobile>
                <Featuredivmobile >
                    <Title >{Titlethree}</Title>
                        {Headlinethree.map((headline , index) =>(
                        <Headline key= {index}>
                            {headline.headlinethree_one}<br/>
                            {headline.headlinethree_two}
                        </Headline>
                        ))}
                    <Mobilemockupimg src={featureimagemobile3} alt="mobilemockupimg" data-aos="fade-up"data-aos-easing="linear" data-aos-duration="700"/>
                    {Featuretextthree.map((featuretext , index) =>(
                    <Featuretext key= {index}>
                        {featuretext.featuretextthree_one}<br/>
                        {featuretext.featuretextthree_two}<br/>
                        {featuretext.featuretextthree_three}
                    </Featuretext>
                         ))}
                </Featuredivmobile>
            </Mobileinfo> 
        </Mobileinfosectioncontainer>
        
    );
}

export default Featuressection;