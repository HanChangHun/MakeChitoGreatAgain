import styled from "styled-components";
import StartPageBg from "../../0.particle/BgImages/StartPageBg.png"


const StyledStartPage = styled.div`
  background: url(${StartPageBg}) no-repeat center fixed;
  backgroundSize: cover;
  overflow: hidden;
  display: flex;
  height: 100vh;
  background-size: 100% 100%;
  
  .main-block {
    flex: 1;
    backdrop-filter: blur(5px);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    img {
      display: block;
      margin-left: auto;
      margin-right: auto;
    }
  }

  .start-buttons {
    margin-top: 100px;
    display: flex;

    button {
      width: 600px;
      height: 135px;
      flex: 1;
      margin-bottom: 160px;
      margin-left: 50px;
      margin-right: 50px;
    }

    button + button {
      margin-left: 140px;
    }
  }
`;

export default StyledStartPage;