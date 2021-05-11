import React, {useState} from 'react';
import {withRouter} from "react-router-dom";
import Modal from 'react-modal';
import StyledStudyModalBtn from "./StudyModalBtn.styles";
import {Button} from "../../1.atoms/Button/Button";
import StudyBg from "../../0.particle/BgImages/StudyBg.png"

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


function StudyModalBtn(props) {
    const [modalIsOpen, setIsOpen] = useState(false);

    function openModal() {
        setIsOpen(true);
    }

    // function afterOpenModal() {
    // }

    function closeModal() {
        setIsOpen(false);
    }

    // const dispatch = useDispatch();

    // const onStudyHandler = (event) => {
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


    return (<StyledStudyModalBtn>
            <Button className={"study-btn"} label={"Study"} variant={"secondary"} onClick={openModal}/>
            <Modal
                isOpen={modalIsOpen}
                style={modalStyles}
            >
                <button onClick={closeModal}>close</button>
            </Modal>
        </StyledStudyModalBtn>
    );
}

StudyModalBtn.propTypes = {};

StudyModalBtn.defaultProps = {};

export default withRouter(StudyModalBtn);