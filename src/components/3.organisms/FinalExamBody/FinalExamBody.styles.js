import styled from "styled-components";

const StyledFinalExamBody = styled.div`
  width: 1280px;
  height: 800px;
  background: #FFFFFF;
  border-radius: 10px;
  padding: 20px;
  display: flex;
  flex-direction: column;

  .problems {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 570px;
    overflow: scroll;
    margin-top: 20px;
    border: 0 solid #000000;
    border-radius: 10px;
    background-color: rgba(85, 171, 103, 0.2);
  }

  .buttons {
    display: flex;
    justify-content: flex-end;
    margin-top: 20px;
  }
`;

export default StyledFinalExamBody;