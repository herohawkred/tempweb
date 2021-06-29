import React from 'react'
import Headsector from '../../components/Ladingpage/Headsector'
import {BrowserRouter} from 'react-router-dom';
import { Headsectordata } from '../../components/Ladingpage/Headsector/Data';
import Firstlinebreaker from '../../components/Ladingpage/Firstlinebreaker';
import Featuressection from '../../components/Ladingpage/Featuressection';
import {Featuressectiondata} from '../../components/Ladingpage/Featuressection/Data';
import Userimages from '../../components/Ladingpage/Userimages';
import { Secondlinebreaker } from '../../components/Ladingpage/Secondlinebreaker';
import Programsector from '../../components/Ladingpage/Programsection';
import {Programsectiondata} from '../../components/Ladingpage/Programsection/Data';
import Downloadsection from '../../components/Ladingpage/Downloadsection';
import Footer from '../../components/Footer';
import { Footerdata } from '../../components/Footer/Data';
import {Userimagesdata} from '../../components/Ladingpage/Userimages/Data';
import {Downloadsectiondata} from '../../components/Ladingpage/Downloadsection/Data';
import Backgroundcircle from '../../components/Ladingpage/Backgroundcircle';
import Fontstyles from '../../fontStyles';
import { useTranslation } from 'react-i18next';

const Home = () => {

    const { t, i18n } = useTranslation();
    return (
        <Fontstyles/>,
        <BrowserRouter>
            <Firstlinebreaker/>            
            <Headsector {...Headsectordata}/>
            {/*<Navbar/>*/}
            <Featuressection {...Featuressectiondata} />
            <Backgroundcircle/>
            <Secondlinebreaker />
            <Userimages {...Userimagesdata}/>
            <Programsector {...Programsectiondata}/>
            <Downloadsection {...Downloadsectiondata} />
            <Footer {...Footerdata}/>
        </BrowserRouter>
    )
}

export default Home;