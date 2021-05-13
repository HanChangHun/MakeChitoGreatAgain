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


function StudyModalBtn({params, ...props}) {
    const [modalIsOpen, setIsOpen] = useState(false);

    function openModal() {
        params.setWeek(params.Week + 1);

        if (params.Week === 7)
            params.setActiveBtn(1)
        else if (params.Week === 15)
            params.setActiveBtn(2)
        else
            params.setActiveBtn(0)

        console.log(params.ActiveBtn)
        setIsOpen(true);
    }

    // function afterOpenModal() {
    // }

    function closeModal() {
        params.setInt(params.Int + 3);
        params.setHealth(params.Health - 1);
        if (params.Speech === 0 )
            void(0)
        else
            params.setSpeech(params.Speech - 1);
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