import styled from 'styled-components'


export const Programsectorcontainer = styled.div`
    height:auto;
    width:100%;
    display:flex;
    flex-direction: column;
    padding-top:10px;
    white-space:nowrap;
    @media (max-width: 480px) {
        display:flex;
        flex-direction:column;
        background: #F5F5F5;
        width:100%;
    };
`

export const Programone = styled.div`
    display:relative;
    height:auto;
    width: 100%;
    display:grid;
    grid-template-columns:2fr 1.5fr;
    margin:0;
    @media (max-width: 480px) {
        display:flex;
        flex-direction:column
    }

`
export const Programoneofone = styled.div`
    display:relative;
    padding-left:20%;
    margin-top:10%;
    bottom:0;
    @media (max-width: 480px) {
        text-align:center;
        z-index:2;
        margin-left:auto;
        margin-right:auto;
        width:100%;
        padding-left:0;
    }
    
`
export const Programoneoftwo = styled.div`
    display:relative;
    height:auto;
    width:auto;
    text-align:right;
    @media (max-width: 480px) {
        display:none;
    }
`
export const Programoneoftwomobile = styled.div`
    display: none;
    @media (max-width: 480px) {
            margin-top:82px;
             display:block;
            .slick-slide {
                margin: 0 14px 14px 0;
            }
            height:286px;

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


export const Programoneofthree = styled.div`
    display:relative;
    height:auto;
    width:auto;
    left:0;

`

export const Programoneofour  = styled.div`
    display:relative;
    height:auto;
    width:auto;
    text-align:right;
    margin-right:60px;
`

export const Programoneoffive = styled.div`
    display:relative;
    height:auto;
    width:auto;
    text-align:center;
    margin-top:155px;

`

export const Programtwo = styled.div`
    display:relative;
    height:100%;
    width: 100%;
    max-width:1440px;
    background-color:;
    margin-top:50px;
    margin:0;
    display:grid;
    grid-template-columns:1fr 1fr 1fr;
    @media (max-width: 480px) {
        display:none;
    }

`
export const Programtwoofone = styled.div`
    display:relative;
`
export const Programtwooftwo = styled.div`
    display:relative;
`
export const Programtwoofthree = styled.div`
    display:relative;
`

export const Title = styled.h1`
    font-style: normal;
    font-weight: 800;
    font-size: 24px;
    line-height: 30px;
    color: #329EFF;
    text-align: left;
    margin-bottom:8px;
    margin-top:0;
        @media (max-width: 480px) {
            font-family: NotoSansKR;
            font-size: 20px;
            font-weight: bold;
            font-stretch: normal;
            font-style: normal;
            line-height: 1.5;
            letter-spacing: normal;
            text-align: center;
            color: #329eff;
        }
    `

export const Subtitle = styled.h2`
    font-style: normal;
    font-weight: 800;
    font-size: 46px;
    line-height: 70px;
    color: #000000;
    text-align: left;
    margin-bottom:8px;
    margin-top:0;
        @media (max-width: 480px) {
            font-size: 32px;
            font-weight: 800;
            font-stretch: normal;
            font-style: normal;
            line-height: 1.56;
            letter-spacing: normal;
            text-align: center;
            color: var(--black);
        }

    `
export const Programtext = styled.h3`
    font-style: normal;
    font-weight: normal;
    font-size: 17px;
    line-height: 30px;
    text-align:left;
    color: #4F5665;
        @media (max-width: 480px) {
            font-size: 16px;
            font-weight: normal;
            font-stretch: normal;
            font-style: normal;
            line-height: 1.63;
            letter-spacing: -0.32px;
            text-align: center;
            color: #333333;
        }
    `

export const Programimgone = styled.img`
    width:436px;
    height:100%;
    text-align:right;
        @media (max-width: 480px) {
            height:auto;
        }
`

export const Programimgtwo = styled.img`
    width:auto;
    height:auto;
    left:0;
    margin-top:100px;
`

export const Programimgthree = styled.img`
    width:auto;
    height:auto;
`

export const Programimgfour = styled.img`
    width:auto;
    height:auto;

`