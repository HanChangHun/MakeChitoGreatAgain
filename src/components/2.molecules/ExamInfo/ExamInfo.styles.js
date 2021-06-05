import styled from "styled-components";

const StyledExamInfo = styled.div`
  .exam-body {
    width: 930px;
    background: #FFFFFF;
    border: 1px solid #000000;
    border-radius: 10px;
    padding: 20px;
    display: flex;
    flex-direction: column;
    margin: 10px;

    .num-prob {
      font-family: S-Core, serif;
      font-size: 16px;
    }

    select {
      font-family: S-Core, serif;
      padding: 5px;
    }
  }
`;

export default StyledExamInfo;