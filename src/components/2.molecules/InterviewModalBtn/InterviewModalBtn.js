import React, {useState} from 'react';
import {withRouter} from "react-router-dom";
import Modal from 'react-modal';
import StyledInterviewModalBtn from "./InterviewModalBtn.styles";
import {Button} from "../../1.atoms/Button/Button";
import InterviewBg from "../../0.particle/BgImages/InterviewBg.png"
import {useDispatch} from "react-redux";
import {speechAbility} from "../../../_actions/ability_action";
import cookie from "react-cookies";
import {setStatus} from "../../../utils/AbilityUtils";

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
                setStatus(params, response)
            })

        setIsOpen(true);
    }

    function closeModal() {
        params.setInt(params.Int - 1);
        params.setHealth(params.Health - 1);
        params.setSpeech(params.Speech + 3);
        setIsOpen(false);
    }

    // const dispatch = useDispatch();

    // const onInterviewHandler = (event) => {
    //     event.preventDefault();
    //
    //     let body = {}
    //
    //     dispatch(loginUser(body))
    //         .then(response => {
    //             if (response.payload) {
    //                 console.log(response.payload)
    //                 props.history.push('/main')
    //             } else {
    //                 alert('Error˝')
    //             }
    //         })
    // }


    return (<StyledInterviewModalBtn>
            <Button className={"workout-btn"} label={"Prepare Interview"} variant={"secondary"} onClick={openModal}/>
            <Modal
                isOpen={modalIsOpen}
                style={modalStyles}
            >
                <button onClick={closeModal}>close</button>
            </Modal>
        </StyledInterviewModalBtn>
    );
}

InterviewModalBtn.propTypes = {};

InterviewModalBtn.defaultProps = {};

export default withRouter(InterviewModalBtn);