import React, {useEffect, useRef, useState} from 'react';
import StyledProblem from "./Problem.styles";
import ProblemImg from "../../0.particle/Char/Problem.png"
import SleepyImg from "../../0.particle/Char/Sleepy.png"
import Modal from 'react-modal';
import {Button} from "../../1.atoms/Button/Button";
import {withRouter} from "react-router-dom";
import cookie from "react-cookies";
import {useDispatch} from "react-redux";
import {midtermEnd} from "../../../_actions/ability_action";

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
        border: 0
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

function Problem(props) {
    const dispatch = useDispatch();

    const maxHealth = parseInt(cookie.load("max_health"))
    const damage = parseInt(cookie.load("damage"))
    const sleepy = parseInt(cookie.load("sleepy"))
    const [CurrentHealth, setCurrentHealth] = useState(maxHealth);
    const [NumClicked, setNumClicked] = useState(0);
    const [End, setEnd] = useState(false);
    const [OpenSleepy, setOpenSleepy] = useState(false);

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
        if (Timer >= 31) {
            SetRecordTime(31);
            setEnd(true);
            setOpenEndModal(true);
        }
    }, 1000);

    function attack() {
        if (CurrentHealth - damage > 0) {
            setCurrentHealth(CurrentHealth - damage)
            setNumClicked(NumClicked + 1)
            if (sleepy > NumClicked) {
                openModal();
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

    function numHint(time) {
        if (time > 30) return 0
        else if (time >= 20) return 1
        else if (time >= 10) return 2
        else return 3
    }

    function toMain(e) {
        e.preventDefault()
        cookie.remove("max_health")
        cookie.remove("sleepy")
        cookie.remove("damage")
        props.history.push('/main')

        dispatch(midtermEnd(cookie.load("token"), numHint(RecordTime))).then(response => {
            console.log(response)
        })
    }

    return (<>
        <p className="timer" style={{
            margin: 0,
            position: "absolute",
            float: "left",
            left: "50%",
            fontSize: "70px",
            fontFamily: "S-Core",
            fontWeight: "700",
            color: "orangered",
            textShadow: "6px 6px 2px gray"
        }}>{End ? RecordTime : Timer}</p>
        <StyledProblem>
            <img className={End ? 'problem-disabled' : 'problem-enabled'} src={ProblemImg} alt="Problem"
                 onClick={attack}/>
            <progress className="progressTag" value={CurrentHealth} max={maxHealth}/>
            <Modal
                isOpen={OpenSleepy}
                ariaHideApp={false}
                style={sleepyModalStyles}>
                <img src={SleepyImg} alt="Sleepy" onClick={closeModal} style={{width: "100%", height: "100%"}}/>
            </Modal>
            <Modal
                isOpen={OpenEndModal}
                ariaHideApp={false}
                style={endModalStyles}>
                <p style={{
                    textAlign: "center"
                }}>Slain time: {RecordTime}</p>
                <p style={{
                    textAlign: "center"
                }}>Obtain hint: {numHint(RecordTime)}</p>
                <Button onClick={toMain} label={"OK"}/>
            </Modal>
        </StyledProblem>
    </>);
}

Problem.propTypes = {};

Problem.defaultProps = {};

export default withRouter(Problem)