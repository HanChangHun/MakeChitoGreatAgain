import React, {useState} from 'react';
import {withRouter} from "react-router-dom";
import Modal from 'react-modal';
import StyledInterviewModalBtn from "./InterviewModalBtn.styles";
import {Button} from "../../1.atoms/Button/Button";
import InterviewBg from "../../0.particle/BgImages/InterviewBg.png"
import {useDispatch} from "react-redux";
import {speechAbility} from "../../../_actions/ability_action";
import cookie from "react-cookies";
import {setStatus} from "../../../utils/StatusUtils";

const modalStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        backgroundImage: `url(${InterviewBg})`,
        backgroundSize: '100% 100%',
        width: '1020px',
        height: '692px',
    }
};


function InterviewModalBtn({params, ...props}) {
    const dispatch = useDispatch();

    const [modalIsOpen, setIsOpen] = useState(false);

    function openModal(event) {
        event.preventDefault();

        dispatch(speechAbility(cookie.load('token')))
            .then(response => {
                setStatus(params, response.payload)
            })

        setIsOpen(true);
    }

    function closeModal(e) {
        e.preventDefault();
        setIsOpen(false);
    }

    return (<StyledInterviewModalBtn>
            <Button className={"workout-btn"}
                    label={"Prepare Interview"}
                    variant={"secondary"}
                    onClick={(params.ActiveBtn === 0) ? openModal : null}/>
            <Modal
                isOpen={modalIsOpen}
                style={modalStyles}
                onRequestClose={(e) => closeModal(e)}
                shouldCloseOnOverlayClick={true}/>
        </StyledInterviewModalBtn>
    );
}

InterviewModalBtn.propTypes = {};

InterviewModalBtn.defaultProps = {};

export default withRouter(InterviewModalBtn);