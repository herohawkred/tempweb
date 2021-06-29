import React from 'react'
import {Supporttexttwo,Stext,Supportextdivmobile,Ruletextdivmobile,Contentdivmobile,Companylogodivmobile,Supporttextmobiletwo,Supporttextmobileone,Supporttextmobilewrap,Ruleandlogomobile,FooterdivMobile,Footersection,Footerdiv,Contentdiv,Companylogodiv,CompanyLogo,Supportextdiv,Ruletextdiv,Supporttext} from './Footerelements'
import Logoimg from '../../images/Landingpage/Companylogo.svg'
import Logoimgwhite from '../../images/Landingpage/logo_white.png'
import { useTranslation } from 'react-i18next';

export const Footer = ({Supportexts,Ruletexts,Ruletextstwo}) => {
   
    const { t, i18n } = useTranslation();
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
                                    {t('Supportexts.customercenter')}<br/>
                                    {t('Supportexts.email')} <br/>
                                    {t('Supportexts.tel')} <br/><br/><br/>
                                    {t('Supportexts.companyname')} <br/>
                                    {t('Supportexts.companynumber')} <br/>
                                    {t('Supportexts.owners')} <br/>
                                    {t('Supportexts.sellnumber')} <br/>
                                    {t('Supportexts.address')} <br/>
                                    {t('Supportexts.linetwo')}
                                    </Stext>

                                ))}
                            </Supportextdiv>
                            <Ruletextdiv>
                                <Supporttext >
                                <a href={'https://www.notion.so/bunnit/b741d24acd03456b8a1eeb19823413e4'} style={{ color: 'black' } }>{t('Supportexts.ruletexts')}</a>&ensp;&ensp;
                                <a href={'https://www.notion.so/bunnit/e01e7dacdfa7466895775171ebb3fb90'} style={{ color: 'black' } }>{t('Supportexts.ruletextstwo')}</a>
                                </Supporttext>
                                <Supporttexttwo >
                                {t('Supportexts.companyslogan')}
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
                                    {t('Supportexts.customercenter')}<br/>
                                    {t('Supportexts.email')} <br/>
                                    {t('Supportexts.tel')} <br/><br/><br/>
                                    {t('Supportexts.companyname')} <br/>
                                    {t('Supportexts.companynumber')} <br/>
                                    {t('Supportexts.owners')} <br/>
                                    {t('Supportexts.sellnumber')} <br/>
                                    {t('Supportexts.address')} <br/>
                                    {t('Supportexts.linetwo')}
                                    </Supporttextmobilewrap>

                                ))}
                        </Supportextdivmobile>
                           
                        
                        <Ruleandlogomobile>
                                <Ruletextdivmobile>
                                    <Supporttextmobileone>
                                    <a href={'https://www.notion.so/bunnit/b741d24acd03456b8a1eeb19823413e4'} style={{ color: '#F1E8DF' }}>{t('Supportexts.ruletexts')}</a>&ensp;&ensp;
                                    <a href={'https://www.notion.so/bunnit/e01e7dacdfa7466895775171ebb3fb90'} style={{ color: '#F1E8DF' }}>{t('Supportexts.ruletextstwo')}</a>
                                    </Supporttextmobileone>
                                    <Supporttextmobiletwo>
                                    {t('Supportexts.companyslogan')}
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