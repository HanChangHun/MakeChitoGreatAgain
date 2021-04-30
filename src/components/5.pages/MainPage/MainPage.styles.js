import styled from "styled-components";


const StyledMainPage = styled.div`
  backgroundSize: cover;
  overflow: hidden;
  display: -ms-flex;
  display: -webkit-flex;
  display: flex;

  .main-block {
    flex: 1;
    backdrop-filter: blur(5px);
    display: flex;
    justify-content: space-around;
    flex-direction: column;
  }

  .buttons1 {
    display: flex;
    justify-content: center;
    button {
      padding: 0;
      height: 140px;
      width: 320px;
    }

    button + button {
      margin-left: 65px;
    }
  }

  .buttons2 {
    display: flex;
    justify-content: center;
    button {
      height: 140px;
      width: 525px;
    }

    button + button {
      margin-left: 42px;
    }
  }


`;

export default StyledMainPage;