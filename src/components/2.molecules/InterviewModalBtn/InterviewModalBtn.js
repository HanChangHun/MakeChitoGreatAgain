import React, {useState} from 'react';
import {withRouter} from "react-router-dom";
import Modal from 'react-modal';
import StyledInterviewModalBtn from "./InterviewModalBtn.styles";
import {Button} from "../../1.atoms/Button/Button";
import InterviewBg from "../../0.particle/BgImages/InterviewBg.png"

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
    const [modalIsOpen, setIsOpen] = useState(false);

    function openModal() {
        params.setWeek(params.Week + 1);

        if (params.Week === 7)
            params.setActiveBtn(1)
        else if (params.Week === 15)
            params.setActiveBtn(2)
        else
            params.setActiveBtn(0)

        setIsOpen(true);
    }

    // function afterOpenModal() {
    // }

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