import styled from "styled-components";
import MainPageBg from "../../0.particle/BgImages/MainPageBg.png"

const StyledMainPage = styled.div.attrs({className: 'page-container page'})`
  backgroundSize: cover;
  overflow: hidden;
  display: -ms-flex;
  display: -webkit-flex;
  display: flex;
  background: url(${MainPageBg}) no-repeat center fixed;
  background-size: 100% 100%;
  height: 100vh;

  .logout {
    margin-left: auto;
    margin-right: 20px;
  }

  .main-block {
    flex: 1;
    backdrop-filter: blur(5px);
    display: flex;
    justify-content: space-around;
    flex-direction: column;

    img {
      display: block;
      margin-left: auto;
      margin-right: auto;
    }
  }

  .buttons1 {
    display: flex;
    justify-content: center;

    div {
      button {
        padding: 0;
        height: 140px;
        width: 320px;
      }
    }

    div + div {
      margin-left: 65px;
    }

  }

  .buttons1.disabled {
    button {
      filter: brightness(50%);
      cursor: not-allowed;
    }
  }

  .buttons2 {
    display: flex;
    justify-content: center;

    a {
      button {
        height: 140px;
        width: 525px;
      }
    }

    a + a {
      margin-left: 42px;
    }
  }

  .status {
    position: absolute;
    top: 50px;
    left: 50px;
    background: rgba(0, 0, 0, 0.5);
    padding: 10px;
  }

  button.disabled {
    filter: brightness(50%);
    cursor: not-allowed;
  }
`;

export default StyledMainPage;