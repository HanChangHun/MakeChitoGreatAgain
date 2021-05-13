import styled from "styled-components";
import MidtermBg from "../../0.particle/BgImages/MidtermBg.png"

const StyledMidtermPage = styled.div.attrs({className:'page-container page'})`
  backgroundSize: cover;
  overflow: hidden;
  display: -ms-flex;
  display: -webkit-flex;
  display: flex;
  background: url(${MidtermBg}) no-repeat center fixed;
  background-size: 100% 100%;
  height: 100vh;
`;

export default StyledMidtermPage