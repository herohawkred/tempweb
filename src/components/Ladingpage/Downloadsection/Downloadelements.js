import styled from 'styled-components'


export const Downloadsectiondiv = styled.div`
    display:flex;
    flex-direction: column;
    width:100%;
    flex-wrap: wrap;
    align-content: center;
    padding-top:120px;

    @media (max-width: 480px) {
        background: #F5F5F5;
    };
    `


export const Downloadtextdiv = styled.div`
    display:flex;
    flex-direction: column;
    width:100%;
    `

export const Downalodbannerdiv = styled.div`
    display:flex;
    flex-direction: row;
    justify-content: center;
    width:100%;
    padding-top:70px;
    padding-bottom:173px;
    @media (max-width: 480px) {
        display:flex;
        flex-direction:column;
        padding-top:40px;
    };


    `
export const Appstorediv = styled.div`
    display:relative;
    width:163px;
    height:47px;
    padding:10px;
    @media (max-width: 480px) {
        width:198px;
        height:57px;
        margin-left:auto;
        margin-right:auto;
        padding:0;
    };

    `

export const Googlestorediv = styled.div`
    display:relative;
    width:163px;
    height:47px;
    padding:10px;
    @media (max-width: 480px) {
        width:198px;
        height:57px;
        margin-left:auto;
        margin-right:auto;
        padding:0;
    };

    `
    

export const Title = styled.h1`
    font-weight: 800;
    font-size: 46px;
    line-height: 70px;
    text-align: center;
    color: #0B132A;

    @media (max-width: 480px) {
display:none;
    };
`
export const Titlemobile = styled.h1`
display:none;
@media (max-width: 480px) {
    display:block;
    font-size: 32px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.56;
    letter-spacing: normal;
    text-align: center;
    color: var(--black);
};

`

export const Subtitle = styled.h2`
    font-weight: normal;
    font-size: 27px;
    line-height: 40px;
    text-align: center;

    @media (max-width: 480px) {
        font-size: 18px;
        font-weight: normal;
        font-stretch: normal;
        font-style: normal;
        line-height: 1.44;
        letter-spacing: -0.36px;
        text-align: center;
        color: #333333;
    };


`


export const Appstoreimg = styled.img`
    font-weight: normal;
    font-size: 27px;
    line-height: 40px;
    text-align: center;
    @media (max-width: 480px) {
        height:100%;
        width:100%;
    };
`

export const Googleplayimg = styled.img`
    font-weight: normal;
    font-size: 27px;
    line-height: 40px;
    text-align: center;
    @media (max-width: 480px) {
        height:100%;
        width:100%;
        margin-top:30px;
    };
`

