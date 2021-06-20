import styled from 'styled-components'


export const Userimagesection = styled.div`
    display:flex;
    flex-direction: column;
    width:100%;
    align-content: center;
    padding-top:156px;
    height:1000px;
    @media (max-width: 480px) {
        height:100%;
        background: #F5F5F5;
        padding-top:156px;
    };
    `
export const Userimagesdivs = styled.div`
    width: 100%;
    height: 100%;
    text-align: center;
    height:320px;
    margin-top:0;
    @media (max-width: 480px) {
        height:100%;
    }
    `

export const Userimagestextsection = styled.div`
    position: relative;
    width:100%;
    margin-top:0;
    padding:0;
    height:auto;
    align-content: center;
    text-align: center;
    x-axis:2;
        @media (max-width: 480px) {
            height:auto;
            weight:100%;
        }
    
    `

export const Userimagessection = styled.div`
.slick-slide {
  margin: 0 20px;
  height:600px;
  width:397px;
  
}

    .slick-slide img {
        height:397px;
        width:397px;
    }


    .slick-next{
        right:10px;
        z-index: 1000;
        }
        .slick-prev{
        left:10px;
        z-index: 1000;
        }
    @media (max-width: 480px) {
            display:none;
        };

    `
export const UserimagessectionMobile = styled.div`
display: none;
@media (max-width: 480px) {
    display:block;
      .slick-slide {
        margin: 0 15px;


        .slick-next{
            right:10px;
            z-index: 1000;
            }
            .slick-prev{
            left:10px;
            z-index: 1000;
            }    
      }

}
`


export const Userimagess = styled.img`
    margin-left: auto;
    margin-right: auto;
    margin-top:122px;
    width:397px;
        .slick-next{
            right:10px;
            z-index: 1000;
            }
            .slick-prev{
            left:10px;
            z-index: 1000;
            }

        @media (max-width: 480px) {
                display:none;
            }
    `
export const Userimagessmobile = styled.img`
    margin-left: auto;
    margin-right: auto;
    margin-top:122px;
    width:397px;
        .slick-next{
            right:10px;
            z-index: 1000;
            }
            .slick-prev{
            left:10px;
            z-index: 1000;
            }

        @media (max-width: 480px) {
            margin-left:12px;
            margin-top:58px;
            
            }
    `



export const Userimagetextimg = styled.img`
    width: 450px;
    height: 260px;
    -webkit-font-smoothing: antialiased;

`

export const Imagediv = styled.div`
    width: 100%;
    height: 100%;
    text-align: center;
    height:320px;
    margin-top:0;
    @media (max-width: 480px) {
        height:500px;
        width:100%;
    }

    `


export const Title = styled.h1`
    font-family: Apple SD Gothic Neo;
    font-style: normal;
    font-weight: 800;
    font-size: 24px;
    line-height: 30px;
    /* identical to box height, or 125% */
    text-align: center;
    color: #FFFFFF;
        @media (max-width: 480px) {
            font-size: 20px;
            font-weight: bold;
            font-stretch: normal;
            font-style: normal;
            line-height: 1.5;
            letter-spacing: normal;
            text-align: center;
            color: #cfe8ff;
        }

`
export const Subtitle = styled.h2`
    font-family: Apple SD Gothic Neo;
    font-style: normal;
    font-weight: 800;
    font-size: 46px;
    line-height: 70px;
    /* or 152% */
    text-align: center;
    color: #FFFFFF;
        @media (max-width: 480px) {
            font-size: 32px;
            font-weight: 800;
            font-stretch: normal;
            font-style: normal;
            line-height: 1.56;
            letter-spacing:-2px;
            text-align: center;
            color: #ffffff;
        }
`

export const Subsubtitle = styled.h3`
    font-family: Apple SD Gothic Neo;
    font-style: normal;
    font-weight: normal;
    font-size: 17px;
    line-height: 30px;
    /* or 176% */
    text-align: center;
    color: #FFFFFF;
        @media (max-width: 480px) {
            display:none;
        }
`

export const Subsubtitlemobile = styled.h3`
   display:none;
        @media (max-width: 480px) {
            display:block;
            font-size: 16px;
            font-weight: normal;
            font-stretch: normal;
            font-style: normal;
            line-height: 2;
            letter-spacing: -0.32px;
            text-align: center;
            color: #ffffff;
            margin-bottom:0;
        }
`