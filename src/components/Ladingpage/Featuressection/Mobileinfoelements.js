import styled from 'styled-components'


export const Mobileinfosectioncontainer = styled.section`
    display:flex;
    flex-direction: column;
    width:100%;
    flex-wrap: wrap;
    align-content: center;
    padding-bottom:150px;
    @media (max-width: 480px) {
        background: #F5F5F5;
        z-index:-4;
        padding-bottom:10px;
    };

    `
export const Blankdiv = styled.div`
    height:280px;
    @media (max-width: 480px) {
        height:15px;
    };
    `

export const mobileinformationsection = styled.div`
    width :100%;
    display:grid;
    

`

export const Mobileinfo = styled.div`
    max-width: 1440px;
    display:grid;
    grid-template-columns:1fr 1fr;
    row-gap: 1rem;
    margin:auto;
    top:0;
    padding:0;
    background:;
    @media (max-width: 480px) {
        display:flex;
        flex-direction: column;
        width:100%;
        margin-right:auto;
        margin-left:auto;
        z-index:1
    };
    `
export const Featuredivmobile = styled.div`
    display:none;
    @media (max-width: 480px) {
        display: flex;
        flex-direction: column;
        height:auto;
        margin-right:18px;
        margin-left:18px;
        background: #FFFFFF;
        border-radius: 30px;
        text-align:center;
        margin-bottom:20px;
    };
`

export const Phonemockupdivright = styled.div`
    position: relative;
    width:100%;
    top:0;
    padding:0;
    @media (max-width: 480px) {
        display:none;
    };
    `

export const Phonemockupdivleft = styled.div`
    position: relative;
    width:100%;
    margin:0;
    top:0;
    padding:0;
    text-align:right;
    @media (max-width: 480px) {
        display:none;
    };

    `

export const Mockuptextleft = styled.div`
    width:100%;
    height:auto;
    margin:0;
    top:0;
    padding:0;
    text-align:left;
    padding-left:40%;
    margin-top:40px;
    @media (max-width: 480px) {
        display:none;
    };

    `
export const Mockuptextright = styled.div`
    width:auto;
    height:auto;
    margin:0;
    top:0;
    padding:0;
    text-align:left;
    margin-top:40px;
    margin-left:103px;
    @media (max-width: 480px) {
        display:none;
    };

    `

export const Mobilemockupimg = styled.img`
    height:552px;
    width:269.35px;
    margin:0;
    top:0;
    bottom:0;
    padding:0;
    margin-left:73px;

    @media (max-width: 480px) {
        margin-right:auto;
        margin-left:auto;
        padding-left:15px;
    };
    `

export const Mobilemockupimgleft = styled.img`
    height:552px;
    width:269.35px;
    margin:0;
    top:0;
    bottom:0;
    margin-top:-100px;
    margin-right:70px;
    `

export const Title = styled.h1`
    font-style: normal;
    font-weight: 800;
    font-size: 24px;
    line-height: 30px;
    margin:0;
    color: #329EFF;

    @media (max-width: 480px) {
    font-style: normal;
    font-weight: 800;
    font-size: 19px;
    line-height: 23px;
    margin-top:65px;

    text-align: center;
    };
`

export const Headline = styled.h2`
    font-style: normal;
    font-weight: 800;
    font-size: 42px;
    color: #0B132A;
    margin-top:8px;
    margin-bottom:8px;

    @media (max-width: 480px) {
        font-style: normal;
        font-weight: 800;
        font-size: 32px;
        line-height: 53px;
        /* identical to box height, or 165% */
        text-align: center;
        color: #0B132A;
    }
    `

export const Featuretext = styled.h3`
    font-weight: 600;
    font-size: 17px;
    line-height: 30px;
    /* identical to box height, or 176% */
    color: #4F5665;

    @media (max-width: 480px) {
        font-size: 16px;
        font-weight: 500;
        font-stretch: normal;
        font-style: normal;
        line-height: 30px;
        letter-spacing: -0.32;
        text-align: center;
        color: #333333;
        margin-bottom:80px;
        margin-top:0;
        text-align:center;
        width:100%;

        
    }
`