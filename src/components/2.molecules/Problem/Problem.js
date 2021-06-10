import React, {useEffect, useRef, useState} from 'react';
import StyledProblem from "./Problem.styles";
import ProblemImg from "../../0.particle/Char/Problem.png"
import SleepyImg from "../../0.particle/Char/Sleepy.png"
import Modal from 'react-modal';
import {Button} from "../../1.atoms/Button/Button";
import {withRouter} from "react-router-dom";
import {getMidtermStatus} from "../../../utils/midtermUtils";
import cookie from "react-cookies";
import {auth} from "../../../_actions/user_action";
import {useDispatch} from "react-redux";

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
    const [MaxHealth, setMaxHealth] = useState(null);
    const [CurrentHealth, setCurrentHealth] = useState(null);
    const [NumClicked, setNumClicked] = useState(0);
    const [Damage, setDamage] = useState(null);
    const [Sleepy, setSleepy] = useState(null);
    const [End, setEnd] = useState(false);
    const [OpenSleepy, setOpenSleepy] = useState(false);

    const [Timer, setTimer] = useState(0)
    const [RecordTime, SetRecordTime] = useState(0)
    const [OpenEndModal, setOpenEndModal] = useState(false);

    let passParams = {
        MaxHealth: MaxHealth, setMaxHealth: setMaxHealth,
        CurrentHealth: CurrentHealth, setCurrentHealth: setCurrentHealth,
        NumClicked: NumClicked, setNumClicked: setNumClicked,
        Damage: Damage, setDamage: setDamage,
        Sleepy: Sleepy, setSleepy: setSleepy,
    }

    const dispatch = useDispatch();
    dispatch(auth(cookie.load("token"))).then(response => {
        if (response.payload.username === "admin") {
            return 0
        } else {
            getMidtermStatus(passParams, response.payload.chito)
        }
    })

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
        if (CurrentHealth - Damage > 0) {
            setNumClicked(NumClicked + 1)
            if (Sleepy > 0) {
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

    function numHint(time) {
        if (time > 30) return 0
        else if (time >= 20) return 1
        else if (time >= 10) return 2
        else return 3
    }

    function toMain(e) {
        e.preventDefault()
        props.history.push('/main')

        // dispatch(midtermEnd(cookie.load("token"), numHint(RecordTime))).then(response => {
        // })
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
            <progress className="progressTag" value={CurrentHealth} max={MaxHealth}/>
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