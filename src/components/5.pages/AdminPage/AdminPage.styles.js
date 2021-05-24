import styled from "styled-components";
import AdminBg from "../../0.particle/BgImages/AdminBg.png"

const StyledAdminPage = styled.div.attrs({className:'page-container page'})`
  backgroundSize: cover;
  overflow: hidden;
  display: -ms-flex;
  display: -webkit-flex;
  background: url(${AdminBg}) no-repeat center fixed;
  background-size: 100% 100%;
  height: 100vh;

  .main-block {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    backdrop-filter: blur(10px);
    flex-direction: column;
  }
  .main-body{
    display: flex;
    flex-direction: row;
    margin-top: 10px;
  }
`;

export default StyledAdminPage