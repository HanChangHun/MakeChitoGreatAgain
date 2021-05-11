import styled from "styled-components";
import MidtermBg from "../../0.particle/BgImages/MidtermBg.png"

const StyledMidtermPage = styled.div`
  backgroundSize: cover;
  overflow: hidden;
  display: -ms-flex;
  display: -webkit-flex;
  display: flex;
  background: url(${MidtermBg}) no-repeat center fixed;
  height: 100vh;

  .main-block {
    flex: 1;
    display: flex;
    justify-content: space-around;
    flex-direction: column;

    img {
      display: block;
      margin-left: auto;
      margin-right: auto;
    }
  }
`;

export default StyledMidtermPage