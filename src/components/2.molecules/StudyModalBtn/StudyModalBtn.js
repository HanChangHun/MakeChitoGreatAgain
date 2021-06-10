import React, {useState} from 'react';
import {withRouter} from "react-router-dom";
import Modal from 'react-modal';
import cookie from 'react-cookies';
import StyledStudyModalBtn from "./StudyModalBtn.styles";
import {Button} from "../../1.atoms/Button/Button";
import StudyBg from "../../0.particle/BgImages/StudyBg.png"
import {useDispatch} from "react-redux";
import {studyAbility} from "../../../_actions/ability_action";
import {setStatus} from "../../../utils/StatusUtils";

const modalStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        backgroundImage: `url(${StudyBg})`,
        backgroundSize: '100% 100%',
        width: '1020px',
        height: '692px',
    }
};


function StudyModalBtn({params, ...props}) {
    const dispatch = useDispatch();

    const [modalIsOpen, setIsOpen] = useState(false);

    function openModal(event) {
        event.preventDefault();

        dispatch(studyAbility(cookie.load('token')))
            .then(response => {
                setStatus(params, response.payload)
            })

        setIsOpen(true);
    }


    function closeModal(e, setIsOpen) {
        e.preventDefault();
        setIsOpen(false);
    }

    return (<StyledStudyModalBtn>
            <Button className={"study-btn"}
                    label={"Study"}
                    variant={"secondary"}
                    onClick={(params.ActiveBtn === 0) ? openModal : null}/>
            <Modal
                isOpen={modalIsOpen}
                style={modalStyles}
                ariaHideApp={false}
                onRequestClose={(e) => closeModal(e, setIsOpen)}
                shouldCloseOnOverlayClick={true}/>
        </StyledStudyModalBtn>
    );
}

StudyModalBtn.propTypes = {};

StudyModalBtn.defaultProps = {};

export default withRouter(StudyModalBtn);