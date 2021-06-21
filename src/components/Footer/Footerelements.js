import styled from 'styled-components'

export const Footersection = styled.section`
   display: relative;
   background:#FAFAFA;
   width:100%;
   height:auto;

   @media (max-width: 480px) {
      background: #222426;
  };

`


export const Footerdiv = styled.footer`
    display: flex;
    flex-direction: column;
    height:auto;
    width:100%;
    top-margin:75px;
    justify-content: center;

    @media (max-width: 480px) {
      display:none;
  };
 `

 export const FooterdivMobile = styled.div`
   display:none;
   

   @media (max-width: 480px) {
      display:flex;
      flex-direction :column;
      width:100%;
  };
`


 

export const Companylogodiv = styled.div`
    display:flex;
    justify-content: flex-start;
    height:auto;
    width:auto;
    margin-left:10%;
    max-width:1440px;
    padding-top:75px;
    @media (max-width: 480px) {
      bottom:0px;
      padding:0;
      margin-top:20px;
      width:73px;
      height:17px;
  };
`


export const Companylogodivmobile = styled.div`
    display:flex;
    justify-content: flex-start;
    height:auto;
    width:auto;
    margin-left:10%;
    max-width:1440px;
    padding-top:75px;
    @media (max-width: 480px) {
      bottom:0px;
      padding:0;
      margin-top:20px;
      width:73px;
      height:17px;
  };
`


export const Contentdiv = styled.div`
    display: flex;
    flex-direction: row;
    height:auto;
    width:100%;
   @media (max-width: 480px) {
      display:flex;
      flex-direction :column;
  };
 `

 export const Contentdivmobile = styled.div`
    display: flex;
    flex-direction: row;
    height:auto;
    width:100%;
   @media (max-width: 480px) {
      display:flex;
      flex-direction :column;
  };
 `

 export const Supportextdiv = styled.div`
    width:100%;
    max-width:1440px;
    justify-content: center;

    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 170%;
    /* or 27px */

    letter-spacing: -0.02em;
    color: #4F5665;
    margin-left:10%;
    

      @media (max-width: 480px) {
         width:100%;
         font-style: normal;
         font-weight: 500;
         font-size: 10px;
         line-height: 170%;
         /* or 17px */
         letter-spacing: -0.02em;
         color: #F1E8DF;
         margin-left:0;
    }
 `

 export const Supportextdivmobile = styled.div`
 display: flex;
 flex-direction: column;
 width:100%;
 max-width:1440px;
 justify-content: center;

 font-family: Gothic A1;
 font-style: normal;
 font-weight: 500;
 font-size: 16px;
 line-height: 170%;
 /* or 27px */

 letter-spacing: -0.02em;
 color: #4F5665;
 margin-left:10%;
 

   @media (max-width: 480px) {
      width:100%;
      font-style: normal;
      font-weight: 500;
      font-size: 10px;
      line-height: 170%;
      /* or 17px */
      letter-spacing: -0.02em;
      color: #F1E8DF;
      margin-left:0;
 }
`

 export const Ruletextdiv = styled.div`
    display: flex;
    flex-direction: column;
    width:100%;
    max-width:1440px;
   font-style: normal;
   font-weight: 500;
   font-size: 16px;
   line-height: 170%;
   /* or 27px */
   letter-spacing: -0.02em;
   margin-left:10%;
   margin-top:10px;
   color: #4F5665;

@media (max-width: 480px) {
   display:flex;
   flex-direction :column;
   width:auto;
   margin-left:40px;
   margin-top:10px;
   height: 100px;
};
 `

 export const Ruletextdivmobile = styled.div`
    display: flex;
    flex-direction: column;
    height: 500px;
    width:100%;
    max-width:1440px;
   font-style: normal;
   font-weight: 500;
   font-size: 16px;
   line-height: 170%;
   /* or 27px */
   letter-spacing: -0.02em;
   margin-left:20%;
   margin-top:200px;
   color: #4F5665;

@media (max-width: 480px) {
   display:flex;
   flex-direction :column;
   width:auto;
   margin-left:40px;
   margin-top:10px;
   height: 100px;
};
 `



 export const Ruleandlogomobile = styled.div`
  
 @media (max-width: 480px) {
   display:grid;
   grid-template-columns: 1fr 0.5fr
};

 `

 export const CompanyLogo = styled.img`
    justify-self: flex-start;
    cursor: pointer;
    display:flex;
    width:149px;
    height:21
    left:0;
    margin:0;
`


export const Supporttextmobilewrap = styled.div`
      display:none;
      @media (max-width: 480px) {
         display:block;
         width:auto;
         height:auto;
         margin-top:10%;
         margin-left:40px;
      }

`
export const Supporttext = styled.h4`
   font-style: normal;
   font-weight: 500;
   font-size: 16px;
   line-height: 170%;
   /* or 27px */

   letter-spacing: -0.02em;

   color: #4F5665;
      @media (max-width: 480px) {
         font-style: normal;
         font-weight: 500;
         font-size: 10px;
         line-height: 170%;
         /* or 17px */
         letter-spacing: -0.02em;
         color: #F1E8DF;
   };
    `

    export const Supporttextmobileone = styled.h4`
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 170%;
    /* or 27px */
 
    letter-spacing: -0.02em;
 
    color: #4F5665;
       @media (max-width: 480px) {
          font-style: normal;
          font-weight: 500;
          font-size: 10px;
          line-height: 170%;
          /* or 17px */
          letter-spacing: -0.02em;
          color: #F1E8DF;
    };
     `
     export const Supporttextmobiletwo = styled.h4`
     font-style: normal;
     font-weight: 500;
     font-size: 16px;
     line-height: 170%;
     /* or 27px */
  
     letter-spacing: -0.02em;
  
     color: #4F5665;
        @media (max-width: 480px) {
           font-style: normal;
           font-weight: 500;
           font-size: 10px;
           line-height: 170%;
           /* or 17px */
           letter-spacing: -0.02em;
           color: #F1E8DF;
     };

      `

      export const Stext = styled.h3`
      width:100%;
      justify-content: center;
      font-family: Gothic A1;
      font-style: normal;
      font-weight: 500;
      font-size: 16px;
      /* or 27px */
  
      letter-spacing: -0.02em;
      color: #4F5665;
      
      }
 
       `

