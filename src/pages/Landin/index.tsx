import React from 'react';

import {Link} from 'react-router-dom'

import logoImg from '../../assets/images/logo.svg'
import landingImg from '../../assets/images/landing.svg'
import studyIcon from '../../assets/images/icons/study.svg'
import giveClassesIcon from '../../assets/images/icons/give-classes.svg'
import purpleHeartIcon from '../../assets/images/icons/purple-heart.svg'

import './styles.css'


function Landing(){
    return(
        <div id="page-landing">
            <div id="page-landing-content" className="container">
                <div className="logo-container">
                    <img src={logoImg} alt="Proffy"/>
                    <h2>Sua Plataforma de estudos online</h2>

                </div>
                <img src={landingImg} alt="landing" className="hero-image"/>

                <div className="buttons-container">
                    <Link className="study" to="study">
                        <img src={studyIcon} alt="Estudar"/>
                        Estudar
                    </Link>

                    <Link className="give-classes" to="give-classes">
                        <img src={giveClassesIcon} alt="Dar aulas"/>
                        Dar aulas
                    </Link>

                </div>

                <span className="total-connections">
                    Total de 200 conexões já realizadas <img src={purpleHeartIcon} alt="Coração Roxo"/>
                </span>
            </div>
        </div>

    )
}

export default Landing;