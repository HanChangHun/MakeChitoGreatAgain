import styled from "styled-components";
import FinalBg from "../../0.particle/BgImages/FinalBg.png"

const StyledFinalPage = styled.div`
  backgroundSize: cover;
  overflow: hidden;
  display: -ms-flex;
  display: -webkit-flex;
  display: flex;
  background: url(${FinalBg}) no-repeat center fixed;
  height: 100vh;

  .main-block {
    flex: 1;
    display: flex;
    backdrop-filter: blur(5px);
    justify-content: space-around;
    flex-direction: column;

    img {
      display: block;
      margin-left: auto;
      margin-right: auto;
    }
  }
`;

export default StyledFinalPage