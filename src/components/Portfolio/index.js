import React from 'react';
import AfterParty from '../../assets/images/afterparty_screenshot.png'
import CodeQuiz from '../../assets/images/Code-Quiz-Screenshot.png'
import RunBuddy from '../../assets/images/Run-Buddy.jpeg'
import Weather from '../../assets/images/weather-dashboard.png'
import AltPortfolio from '../../assets/images/portfolio.png'
import SocialNetwork from '../../assets/images/social-network-api.png'

function Portfolio() {
    return (
        <section className="my-5 portfolio">
            <div className="row">
                <div className="col-1">
                </div>
                <div className="col-5 portfolio-apps">
                    <h3>AfterParty</h3>
                    <a href="https://tessshearer.github.io/afterParty/" target="_blank" rel="noreferrer"> <img
                        src={AfterParty} className="picture-link" alt="The Afterparty Application" /> </a>
                    <div>
                        <a href="https://github.com/TessShearer/afterParty" target="_blank" rel="noreferrer" className="github-link">View Github Repository Here</a>
                    </div>
                </div>
                <div className="col-5 portfolio-apps">
                    <h3>Coding Quiz</h3>
                    <a href="https://tessshearer.github.io/Code-Quiz/" target="_blank" rel="noreferrer"> <img
                        src={CodeQuiz} className="picture-link" alt="The Coding Quiz Application" /> </a>
                    <div>
                        <a href="https://github.com/TessShearer/Code-Quiz" target="_blank" rel="noreferrer" className="github-link">View Github Repository Here</a>
                    </div>
                </div>
                <div className="col-1">
                </div>
            </div>
            <div className="row">
                <div className="col-1">

                </div>
                <div className="col-5 portfolio-apps">
                    <h3>Run Buddy</h3>
                    <a href="https://tessshearer.github.io/run-buddy/" target="_blank" rel="noreferrer"> <img
                        src={RunBuddy} className="picture-link" alt="The Run Buddy Front End Application" /> </a>
                    <div>
                        <a href="https://github.com/TessShearer/run-buddy" target="_blank" rel="noreferrer" className="github-link">View Github Repository Here</a>
                    </div>
                </div>
                <div className="col-5 portfolio-apps">
                    <h3>Alternate Portfolio</h3>
                    <a href="https://tessshearer.github.io/Portfolio/" target="_blank" rel="noreferrer"> <img
                        src={AltPortfolio} className="picture-link" alt="The Alternate Portfolio Application" /> </a>
                    <div>
                        <a href="https://github.com/TessShearer/Portfolio" target="_blank" rel="noreferrer" className="github-link">View Github Repository Here</a>
                    </div>
                </div>
                <div className="col-1">

                </div>
            </div>
            <div className="row">
                <div className="col-1">

                </div>
                <div className="col-5 portfolio-apps">
                    <h3>Weather Dashboard</h3>
                    <a href="https://tessshearer.github.io/Weather-Dashboard/" target="_blank" rel="noreferrer"> <img
                        src={Weather} className="picture-link" alt="The Weather Dashboard Application"/> </a>
                    <div>
                        <a href="https://github.com/TessShearer/Weather-Dashboard" target="_blank" rel="noreferrer" className="github-link">View Github Repository Here</a>
                    </div>
                </div>
                <div className="col-5 portfolio-apps">
                    <h3>Social Network</h3>
                    <a href="https://github.com/TessShearer/Social-Network-API" target="_blank" rel="noreferrer"> <img
                        src={SocialNetwork} className="picture-link" alt="The Social Network Application" /> </a>
                    <div>

                        <a href="https://github.com/TessShearer/Social-Network-API" target="_blank" rel="noreferrer" className="github-link">This Project is only the back end, view GitHub Repository</a>
                    </div>
                </div>
                <div className="col-1">

                </div>

            </div>
        </section>
    );
}

export default Portfolio;