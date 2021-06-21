import React from 'react'
import {Supporttexttwo,Stext,Supportextdivmobile,Ruletextdivmobile,Contentdivmobile,Companylogodivmobile,Supporttextmobiletwo,Supporttextmobileone,Supporttextmobilewrap,Ruleandlogomobile,FooterdivMobile,Footersection,Footerdiv,Contentdiv,Companylogodiv,CompanyLogo,Supportextdiv,Ruletextdiv,Supporttext} from './Footerelements'
import Logoimg from '../../images/Landingpage/Companylogo.svg'
import Logoimgwhite from '../../images/Landingpage/logo_white.png'

export const Footer = ({Supportexts,Ruletexts,Ruletextstwo}) => {
   
    
    return (

        <Footersection>
                <Footerdiv>
                        <Companylogodiv>   
                            <CompanyLogo src={Logoimg} alt="Appstorebanner"/>  
                        </Companylogodiv>

                        <Contentdiv>
                            <Supportextdiv>
                                {Supportexts.map((supportext , index) =>(
                                    <Stext key ={index}>
                                    {supportext.customercenter}<br/>
                                    {supportext.email} <br/>
                                    {supportext.tel} <br/><br/><br/>
                                    {supportext.companyname} <br/>
                                    {supportext.companynumber} <br/>
                                    {supportext.owners} <br/>
                                    {supportext.sellnumber} <br/>
                                    {supportext.address} <br/>
                                    {supportext.linetwo}
                                    </Stext>

                                ))}
                                
                            </Supportextdiv>
                            <Ruletextdiv>
                                <Supporttext >
                                <a href={'http://google.com'} style={{ color: 'black' } }>{Ruletexts}</a>&ensp;&ensp;
                                <a href={'http://google.com'} style={{ color: 'black' } }>{Ruletextstwo}</a>
                                </Supporttext>
                                <Supporttexttwo >
                                Copyright        ⓒ 기록이 몸을 만든다. 번핏!
                                </Supporttexttwo>
                            </Ruletextdiv>
                        </Contentdiv>
                </Footerdiv>


{/*모바일 DIV로 */}

                <FooterdivMobile>
                    <Contentdivmobile>
                        <Supportextdivmobile>
                                {Supportexts.map((supportext , index) =>(
                                    <Supporttextmobilewrap key ={index}>
                                    {supportext.customercenter}<br/>
                                    {supportext.email} <br/>
                                    {supportext.tel} <br/><br/><br/>
                                    {supportext.companyname} <br/>
                                    {supportext.companynumber} <br/>
                                    {supportext.owners} <br/>
                                    {supportext.sellnumber} <br/>
                                    {supportext.address} <br/>
                                    {supportext.linetwo}
                                    </Supporttextmobilewrap>

                                ))}
                        </Supportextdivmobile>
                           
                        
                        <Ruleandlogomobile>
                                <Ruletextdivmobile>
                                    <Supporttextmobileone>
                                    <a href={'http://google.com'} style={{ color: '#F1E8DF' }}>{Ruletexts}</a>&ensp;&ensp;
                                    <a href={'http://google.com'} style={{ color: '#F1E8DF' }}>{Ruletextstwo}</a>
                                    </Supporttextmobileone>
                                    <Supporttextmobiletwo>
                                    Copyright        ⓒ 기록이 몸을 만든다. 번핏
                                    </Supporttextmobiletwo>
                                </Ruletextdivmobile>
                                <Companylogodivmobile>   
                                    <CompanyLogo src={Logoimgwhite} alt="Appstorebanner"/>  
                                </Companylogodivmobile>
                            </Ruleandlogomobile>
                    </Contentdivmobile>

                </FooterdivMobile>
            </Footersection>
    );
}

export default Footer;