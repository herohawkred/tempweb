import React from 'react'
import {Buttonamobile,Buttona,BunnFitlogowhite,Maincircle,Container,Headersection,Headersectiontextdiv,Headersectionimgdiv,Headerimages,Logoimages,Title,SubTitle,SubSubTitle,Button} from './Headsectorelements'
import Headerimageone from '../../../images/Landingpage/Headerimages/main image_1.jpg'
import Headerimagetwo from '../../../images/Landingpage/Headerimages/main image_2.jpg'
import Headerimagethree from '../../../images/Landingpage/Headerimages/main image_3.jpg'
import Maincircleimage from '../../../images/Landingpage/Headerimages/main_circle.svg'
import BunnFitlogo from '../../../images/Landingpage/Headerimages/BunnFit_logo_white.png'

import Blacklogo from '../../../images/Landingpage/logo_black.svg'





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

        this.data = {
            Titlej:[
                "기록이 몸을 만든다. 번핏"
            ],
            Subtext:[{
              subtext_one:"좋은 기록이 좋은 근육을 만든다.",
              subtext_two:"운동일지는 이제 번핏으로!"
            }
            ],
            Subofsubtext:["이제 제대로 근육 만들러 가기"],
            Buttontext:["다운받으러가기"]
        }


      
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
    return (
        <Container>
            <Headersection>
                <Headersectiontextdiv>
                        <Logoimages src ={Blacklogo}/>
                        <Title>{this.data.Titlej}</Title>
                        {this.data.Subtext.map((subtext , index) =>(
                    <SubTitle key= {index}>
                        {subtext.subtext_one}<br/>
                        {subtext.subtext_two}
                    </SubTitle>
                         ))}
                        <SubSubTitle>{this.data.Subofsubtext}</SubSubTitle>
                        <Buttona href="https://bunn.fit" target="_blank">
                          <Button>앱 다운로드</Button>
                        </Buttona>
                        <Buttonamobile href="http://onelink.to/c4c5ur" target="_blank">
                          <Button>앱 다운로드</Button>
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

export default Headsector;