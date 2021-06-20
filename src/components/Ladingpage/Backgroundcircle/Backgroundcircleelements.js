import styled from 'styled-components'


export const Backgrounddiv = styled.div`
    position: absolute;
    top:1873px;
    height: 4000px;
    width:100%;
    z-index:-3;
    @media (min-width: 1400px) {
        top:2200px;
    }
    @media (max-width: 480px) {
        position: absolute;
        margin-top:1400px;
        z-index:0;
        height:auto;
    
    `
export const Backgroundobjectimg = styled.img`
  
    width: 100%;
    height: 2790px;
    object-fit: none;
    margin-left:auto;
    margin-right:auto;

    @media (max-width: 480px) {
        display:none;
        object-fit:none;
`

export const BackgroundobjectimgMobile = styled.img`
    
    display:none;

    @media (max-width: 480px) {
        display:block;
        width:100%;
        height:2000px;;
        object-fit:none;
        z-index:-1;
`
  