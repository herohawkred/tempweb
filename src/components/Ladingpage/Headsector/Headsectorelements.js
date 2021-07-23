import styled from 'styled-components'



export const Container = styled.div`
    display:grid;
    background-color:#F5F5F5;
        @media (max-width: 480px) {
            width:100%;
            height:auto;
        };
    -webkit-height:auto;
`

export const Headersection = styled.div`
    display:grid;
    grid-template-columns: 1fr 1fr;
    height:100%;

        @media (max-width: 480px) {
            display:flex;
            flex-direction: column-reverse;
            height:100%;
        }

`
export const Headersectiontextdiv = styled.div`
    display:flex;
    flex-direction:column;   
    width:100%;
    height:100%;
    margin-top:20%;
    margin-bottom:20%;

        @media (max-width: 480px) {
            margin-bottom:80px;
            padding-top:60px;
        };
`

export const Logoimages = styled.img`
    width:168px;
    height:auto;
    display:relative;
    margin-right:auto;
    margin-left:auto;

        @media (max-width: 480px) {
        
        };
`

export const Title = styled.h1`
        font-style: normal;
        flex-grow: 0;
        font-size: 38px;
        font-weight: bold;
        font-weight:800;
        font-stretch: normal;
        font-style: normal;
        line-height: 1.84;
        letter-spacing: normal;
        text-align: center;
        color: #0b132a;

        @media (max-width: 480px) {
            font-style: normal;
            font-size: 28px;
            font-weight: bold;
            font-stretch: normal;
            font-style: normal;
            line-height: 1.98;
            letter-spacing: normal;
            text-align: center;
            color: #0b132a;
        };
`



export const SubTitle = styled.h2`
font-style: normal;
        font-size: 17px;
        font-weight: 500;
        font-stretch: normal;
        font-style: normal;
        line-height: 1.76;
        letter-spacing: normal;
        text-align: center;
        color: #0b132a;

        @media (max-width: 480px) {
            font-style: normal;
            font-size: 15px;
            font-weight: normal;
            font-stretch: normal;
            font-style: normal;
            line-height: 1.58;
            letter-spacing: normal;
            text-align: center;
            color: #0b132a;
        }   
`
export const SubSubTitle = styled.h3`   
        padding-top:52px;
        font-size: 17px;
        font-weight: bold;
        font-stretch: normal;
        font-style: normal;
        line-height: 1.76;
        letter-spacing: normal;
        text-align: center;
        color: #0b132a;

    @media (max-width: 480px) {
        font-size: 15px;
        font-weight: normal;
        font-stretch: normal;
        font-style: normal;
        line-height: 1.58;
        letter-spacing: normal;
        text-align: center;
        color: #0b132a;
    }   

`

export const Button = styled.button`

    width: 250px;
    height: 60px;
    left: 235px;
    top: 512px;

    background: #329EFF;
    border-radius: 10px;
    /* 2 */
    border-color: transparent;

    box-shadow: 5px 15px 18px rgba(50, 158, 255, 0.35);
    margin-right:auto;
    margin-left:auto;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 25px;
    /* identical to box height, or 156% */

    text-align: center;

    color: #FFFFFF;
    &:hover ${Button} {
        background: black;
        color: white;
      }

        @media (max-width: 480px) {
            font-size: 16px;
            font-weight: bold;
            font-stretch: normal;
            font-style: normal;
            line-height: 1.24;
            letter-spacing: normal;
            text-align: center;
            color: #ffffff;
        }   
`

export const Buttona = styled.a`
    margin-right:auto;
    margin-left:auto;

    @media (max-width: 480px) {
        display:none;
    }   
`
export const Buttonamobile = styled.a`
    display:none;

    @media (max-width: 480px) {
        display:block;
        margin-right:auto;
        margin-left:auto;
    }   
`


export const Headersectionimgdiv = styled.div`
    max-width:100%;
    height:100%;
    object-fit: cover;
    position: relative;
    display: inline;

    @media (max-width: 480px) {
        width:100%;
        height:322px;
     };
`

export const Headerimages = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;

    @media (max-width: 480px) {
        width:100%;
        height:322px;
     };
`

export const Maincircle = styled.img`
    width:auto;
    height:auto;
    position: absolute;
    bottom: 0;
    padding-bottom: 10px;
    right: 0;


    @media (max-width: 480px) {
       width:90px;
       height:auto;
    }
`
export const BunnFitlogowhite = styled.img`
   display:none;

    @media (max-width: 480px) {
       display:block;
       height:auto;
       width:98px;
       position:absolute;
       bottom:0;
       left:0;
       margin-left:18px;
       margin-bottom:17px;

    }
`