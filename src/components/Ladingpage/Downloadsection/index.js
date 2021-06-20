import React from "react";
import {Downloadsectiondiv,Downloadtextdiv,Downalodbannerdiv,Title,Subtitle,Appstoreimg,Googleplayimg,Appstorediv,Googlestorediv} from './Downloadelements'
import Appstorebanner from '../../../images/Landingpage/Appstorebanner.svg';
import Googleplaybanner from '../../../images/Landingpage/Googleplaybanner.svg';

export const Downloadsection = ({DownloadTitle,DownloadSubtitle}) => {


    return (
        <Downloadsectiondiv key="downloadsection">
            <Downloadtextdiv key="texdiv">
                <Title key="title" >{DownloadTitle}</Title>

                {DownloadSubtitle.map((download , index) =>(
                <Subtitle key="subtitle">
                    {download.mail}<br/>
                    {download.start}
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
