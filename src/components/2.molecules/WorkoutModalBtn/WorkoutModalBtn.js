import React, {useState} from 'react';
import {withRouter} from "react-router-dom";
import Modal from 'react-modal';
import StyledWorkoutModalBtn from "./WorkoutModalBtn.styles";
import {Button} from "../../1.atoms/Button/Button";
import WorkoutBg from "../../0.particle/BgImages/WorkoutBg.png"
import {workoutAbility} from "../../../_actions/ability_action";
import cookie from "react-cookies";
import {setStatus} from "../../../utils/StatusUtils";
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

function WorkoutModalBtn({params}) {
    const dispatch = useDispatch();

    const [modalIsOpen, setIsOpen] = useState(false);

    function openModal(event) {
        event.preventDefault();

        dispatch(workoutAbility(cookie.load('token')))
            .then(response => {
                setStatus(params, response.payload)
            })

        setIsOpen(true);
    }

    function closeModal(e) {
        e.preventDefault();
        setIsOpen(false);
    }

    return (<StyledWorkoutModalBtn>
            <Button className={"workout-btn"}
                    label={"Workout"}
                    variant={"secondary"}
                    onClick={(params.ActiveBtn === 0) ? openModal : null}/>
            <Modal
                isOpen={modalIsOpen}
                style={modalStyles}
                onRequestClose={(e) => closeModal(e)}
                shouldCloseOnOverlayClick={true}/>
        </StyledWorkoutModalBtn>
    );
}

WorkoutModalBtn.propTypes = {};

WorkoutModalBtn.defaultProps = {};

export default withRouter(WorkoutModalBtn);