import React, {useState} from 'react';
import {withRouter} from "react-router-dom";
import Modal from 'react-modal';
import StyledWorkoutModalBtn from "./WorkoutModalBtn.styles";
import {Button} from "../../1.atoms/Button/Button";
import WorkoutBg from "../../0.particle/BgImages/WorkoutBg.png"

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
        params.setHealth(params.Health + 3);
        if (params.Speech === 0 )
            void(0)
        else
            params.setSpeech(params.Speech - 1);

        setIsOpen(false);
    }

    // const dispatch = useDispatch();
    //
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