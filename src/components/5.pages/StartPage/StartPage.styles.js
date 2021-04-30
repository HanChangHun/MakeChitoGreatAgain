import styled from "styled-components";


const StyledStartPage = styled.div`
  backgroundSize: cover;
  overflow: hidden;
  display: -ms-flex;
  display: -webkit-flex;
  display: flex;
  .main-block {
    flex:1;
    backdrop-filter: blur(5px);
    display: flex;
    justify-content: space-around;
    flex-direction: column;
  }
  .buttons {
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