import React from 'react'
import {Buttonamobile,Buttona,BunnFitlogowhite,Maincircle,Container,Headersection,Headersectiontextdiv,Headersectionimgdiv,Headerimages,Logoimages,Title,SubTitle,SubSubTitle,Button} from './Headsectorelements'
import Headerimageone from '../../../images/Landingpage/Headerimages/main image_1.jpg'
import Headerimagetwo from '../../../images/Landingpage/Headerimages/main image_2.jpg'
import Headerimagethree from '../../../images/Landingpage/Headerimages/main image_3.jpg'
import Maincircleimage from '../../../images/Landingpage/Headerimages/main_circle.svg'
import BunnFitlogo from '../../../images/Landingpage/Headerimages/BunnFit_logo_white.png'

import Blacklogo from '../../../images/Landingpage/logo_black.svg'
import { useTranslation } from 'react-i18next';
import { withTranslation } from 'react-i18next';



{/*나누기

export const Headsector = ({Titlej,Subtext,Buttontext,Subofsubtext},props) => {
*/}

class Headsector extends React.Component {

  
    constructor(props) {
      super(props);
      this.state = {
        images: [
            Headerimageone,
            Headerimagetwo,
            Headerimagethree
        ],
        selectedImage: Headerimageone,
      };



      
    }

    btnClick() {
        window.open="https://play.google.com/store/apps/details?id=com.bunnit.haja.android";
        }

    componentDidMount() {
      setInterval(() => {


        this.setState(prevState => {
          if (prevState.selectedImage === this.state.images[0]) {
            return {
              selectedImage: this.state.images[1]
            };
          } else if (prevState.selectedImage === this.state.images[1]){
            return {
                selectedImage: this.state.images[2]
            };
        }else {
                return {
                    selectedImage: this.state.images[0]
            };
        }
        });
      }, 3000);
    }


  render() {
    const { t } = this.props;
    return (
        <Container>
            <Headersection>
                <Headersectiontextdiv>
                        <Logoimages src ={Blacklogo}/>
                        <Title>{t('Headsectordata.titlej')}</Title>
                 
                    <SubTitle >
                        {t('Headsectordata.subtext_one')}<br/>
                        {t('Headsectordata.subtext_two')}
                    </SubTitle>

                        <SubSubTitle>{t('Headsectordata.subofsubtext')}</SubSubTitle>
                        <Buttona href="https://bunn.fit" target="_blank">
                          <Button>{t('Headsectordata.buttontext')}</Button>
                        </Buttona>
                        <Buttonamobile href="http://onelink.to/c4c5ur" target="_blank">
                          <Button>{t('Headsectordata.buttontext')}</Button>
                        </Buttonamobile>

                </Headersectiontextdiv>
                    <Headersectionimgdiv>
                            <Maincircle src ={Maincircleimage}/>
                            <BunnFitlogowhite src ={BunnFitlogo}/>
                            <Headerimages src={this.state.selectedImage} alt={"none"}/>
                </Headersectionimgdiv>

            </Headersection>

        </Container>
    );
}
}

export default  withTranslation() (Headsector);