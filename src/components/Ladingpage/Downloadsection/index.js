import React from "react";
import {Titlemobile,Downloadsectiondiv,Downloadtextdiv,Downalodbannerdiv,Title,Subtitle,Appstoreimg,Googleplayimg,Appstorediv,Googlestorediv} from './Downloadelements'
import Appstorebanner from '../../../images/Landingpage/Appstorebanner.svg';
import Googleplaybanner from '../../../images/Landingpage/Googleplaybanner.svg';
import { useTranslation } from 'react-i18next';

export const Downloadsection = ({DownloadTitle_mobile,DownloadTitle,DownloadSubtitle}) => {
    const { t, i18n } = useTranslation();

    return (
        <Downloadsectiondiv key="downloadsection">
            <Downloadtextdiv key="texdiv">
                <Title>{t('Downloadsection.downloadTitle')}<br/></Title>

                {DownloadTitle_mobile.map((download , index) =>(
                <Titlemobile key="subtitle">
                    {t('Downloadsection.one')}<br/>
                    {t('Downloadsection.two')}
                </Titlemobile>

))}

                {DownloadSubtitle.map((download , index) =>(
                <Subtitle key="subtitle">
                    {t('Downloadsection.mail')}<br/>
                    {t('Downloadsection.start')}
                </Subtitle>

))}
            </Downloadtextdiv>
            <Downalodbannerdiv key="bannertext">
                <Appstorediv key="appstore" >
                <a href={window.location} target="_blank"><Appstoreimg src={Appstorebanner} alt="Appstorebanner" /></a>
                </Appstorediv>
                <Googlestorediv key="Googleplay">
                    <a href="https://play.google.com/store/apps/details?id=com.bunnit.haja.android" target="_blank"><Googleplayimg src={Googleplaybanner} alt="Googleplaybanner"/></a>
                </Googlestorediv>

            </Downalodbannerdiv>
        </Downloadsectiondiv>
    );
}

export default Downloadsection;
