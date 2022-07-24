import React from 'react';
import AfterParty from '../../assets/images/afterparty_screenshot.png'
import CodeQuiz from '../../assets/images/Code-Quiz-Screenshot.png'
import RunBuddy from '../../assets/images/Run-Buddy.jpeg'

function Portfolio() {
    return (
        <section className="my-5">
            <div className="row">
                <div className="col-1">
                    <p>agh</p>
                </div>
                <div className="col-5">
                    <h3>AfterParty</h3>
                    <a href="https://tessshearer.github.io/afterParty/" target="_blank"rel="noreferrer"> <img
                        src={AfterParty} className="picture-link" alt="The Afterparty Application"/> </a>
                    <a href="https://github.com/TessShearer/afterParty" target="_blank" rel="noreferrer">View Github Repository Here</a>
                </div>
                <div className="col-5">
                <h3>Coding Quiz</h3>
                    <a href="https://tessshearer.github.io/Code-Quiz/" target="_blank" rel="noreferrer"> <img
                        src={CodeQuiz} className="picture-link" alt="The Afterparty Application"/> </a>
                    <a href="https://github.com/TessShearer/Code-Quiz" target="_blank" rel="noreferrer">View Github Repository Here</a>
                </div>
                <div className="col-1">
                <p>agh</p>
                </div>
            </div>
            <div className="row">
                <div className="col-1">

                </div>
                <div className="col-5">
                <h3>Run Buddy</h3>
                    <a href="https://tessshearer.github.io/run-buddy/" target="_blank" rel="noreferrer"> <img
                        src={RunBuddy} className="picture-link" alt="The Afterparty Application"/> </a>
                    <a href="https://github.com/TessShearer/run-buddy" target="_blank" rel="noreferrer">View Github Repository Here</a>
                </div>
                <div className="col-5">

                </div>
                <div className="col-1">

                </div>
            </div>
            <div className="row">
                <div className="col-1">

                </div>
                <div className="col-5">

                </div>
                <div className="col-5">

                </div>
                <div className="col-1">

                </div>

            </div>
        </section>
    );
}

export default Portfolio;