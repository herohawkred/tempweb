import styled from 'styled-components'


export const Linebreakerimg = styled.img`
    object-fit: contain;
        @media (max-width: 480px) {
            display:none;
        };
`

export const Linebreakerimgmobile = styled.img`
    display:none;
        @media (max-width: 480px) {
            display:block;
            height:30px;
        };
`

export const Linebreaker = styled.div`
    width:auto;
    height:auto;
    
        @media (max-width: 480px) {
            height:30px;
            width:100%;
            display:none;
        };

`