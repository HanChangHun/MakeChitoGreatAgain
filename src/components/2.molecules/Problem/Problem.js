import React, {useEffect, useRef, useState} from 'react';
import StyledProblem from "./Problem.styles";
import ProblemImg from "../../0.particle/Char/Problem.png"
import SleepyImg from "../../0.particle/Char/Sleepy.png"
import {number} from "prop-types";
import Modal from 'react-modal';
import {Button} from "../../1.atoms/Button/Button";
import {Link} from "react-router-dom";

const sleepyModalStyles = {
    content: {
        display: 'flex',
        width: '300px',
        height: '300px',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        background: "rgba(0,0,0,0)",
        backgroundSize: '100% 100%',
        border:0
    }
};

const endModalStyles = {
    content: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        width: '1020px',
        height: '692px',
        fontSize: '50px',
    }
};

export const Problem = ({x, y, health, sleepy}) => {

    const [Health, setHealth] = useState(health);
    const [CurrentHealth, setCurrentHealth] = useState(health);
    const [End, setEnd] = useState(false);
    const [OpenSleepy, setOpenSleepy] = useState(false);
    const [Sleepy, setSleepy] = useState(sleepy);

    const [Timer, setTimer] = useState(0)
    const [RecordTime, SetRecordTime] = useState(0)
    const [OpenEndModal, setOpenEndModal] = useState(false);


    function useInterval(callback, delay) {
        const savedCallback = useRef();
        useEffect(() => {
            savedCallback.current = callback;
        }, [callback]);

        useEffect(() => {
            let id = setInterval(() => {
                savedCallback.current();
            }, delay);
            return () => clearInterval(id);
        }, [delay]);
    }

    useInterval(() => {
        setTimer(Timer + 1);
    }, 1000);

    function attack() {
        if (CurrentHealth - 10 >= 0) {
            setCurrentHealth(CurrentHealth - 10);
            if (Sleepy > 0) {
                console.log("Hello " + Sleepy);
                openModal();
                setSleepy(Sleepy - 1);
            }
        } else {
            SetRecordTime(Timer);
            setEnd(true);
            setOpenEndModal(true);
        }
    }

    function openModal() {
        let new_x = Math.floor(Math.random() * (70)) + 10;
        let str_new_x = String(new_x) + "%"
        let new_y = Math.floor(Math.random() * (70)) + 10;
        let str_new_y = String(new_y) + "%"

        sleepyModalStyles.content.left = str_new_x
        sleepyModalStyles.content.top = str_new_y
        setOpenSleepy(true);
    }

    function closeModal() {
        setOpenSleepy(false);
    }


    return (<>
        <p className="timer" style={{
            margin: 0,
            position: "absolute",
            float:"left",
            left: "50%",
            fontSize: "70px",
            fontFamily: "S-Core",
            fontWeight: "700",
            color: "orangered",
            textShadow: "6px 6px 2px gray"
        }}>{End ? RecordTime : Timer}</p>
        <StyledProblem>
            <img className={End ? 'problem-disabled' : 'problem-enabled'} src={ProblemImg} alt="Problem"
                 onClick={attack}
                 style={{left: x, top: y}}/>
            <progress className="progressTag" value={CurrentHealth} max={Health}/>
            <Modal
                isOpen={OpenSleepy}
                style={sleepyModalStyles}
            >
                <img src={SleepyImg} alt="Sleepy" onClick={closeModal} style={{width: "100%", height: "100%"}}/>
            </Modal>
            <Modal
                isOpen={OpenEndModal}
                style={endModalStyles}
            >
                <p style={{
                    textAlign: "center"
                }}>Slain time : {RecordTime}</p>
                <p style={{
                    textAlign: "center"
                }}>Obtain hint : 3</p>
                <Link to={"/main"}>
                    <Button label={"OK"}/>
                </Link>
            </Modal>
        </StyledProblem>
    </>);
};

Problem.propTypes = {
    x: number,
    y: number,
    health: number,
    sleepy: number,
};

Problem.defaultProps = {
    x: 100,
    y: 100,
    health: 100,
    sleepy: 5
};
