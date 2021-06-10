import React, {useState} from 'react';
import {withRouter} from "react-router-dom";
import Modal from 'react-modal';
import StyledWorkoutModalBtn from "./WorkoutModalBtn.styles";
import {Button} from "../../1.atoms/Button/Button";
import WorkoutBg from "../../0.particle/BgImages/WorkoutBg.png"
import {workoutAbility} from "../../../_actions/ability_action";
import cookie from "react-cookies";
import {setStatus} from "../../../utils/AbilityUtils";
import {useDispatch} from "react-redux";

const modalStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        backgroundImage: `url(${WorkoutBg})`,
        backgroundSize: '100% 100%',
        width: '1020px',
        height: '692px',
    }
};


function WorkoutModalBtn({params, ...props}) {
    const dispatch = useDispatch();

    const [modalIsOpen, setIsOpen] = useState(false);

    function openModal(event) {
        event.preventDefault();

        dispatch(workoutAbility(cookie.load('token')))
            .then(response => {
                setStatus(params, response)
            })

        setIsOpen(true);
    }

    function closeModal() {
        params.setInt(params.Int - 1);
        params.setHealth(params.Health + 3);
        if (params.Speech === 0)
            void (0)
        else
            params.setSpeech(params.Speech - 1);

        setIsOpen(false);
    }

    return (<StyledWorkoutModalBtn>
            <Button className={"workout-btn"} label={"Workout"} variant={"secondary"} onClick={openModal}/>
            <Modal
                isOpen={modalIsOpen}
                style={modalStyles}
            >
                <button onClick={closeModal}>close</button>
            </Modal>
        </StyledWorkoutModalBtn>
    );
}

WorkoutModalBtn.propTypes = {};

WorkoutModalBtn.defaultProps = {};

export default withRouter(WorkoutModalBtn);