import styled from "styled-components";

const StyledFinalProblemInfo = styled.div`
  width: 930px;
  background: #FFFFFF;
  border: 1px solid #000000;
  border-radius: 10px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  margin: 10px;

  .question {
    margin-bottom: 10px;
    display: flex;
  }

  .bottom {
    display: flex;
    justify-content: space-between;
    padding: 10px;
  }

  .selects {
    width: 500px;

    div {
      display: flex;
      margin: 0;
    }
  }

  .option {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 300px;
    margin-left: 20px;

    div {
      display: flex;
      justify-content: center;
    }
  }
`;

export default StyledFinalProblemInfo;