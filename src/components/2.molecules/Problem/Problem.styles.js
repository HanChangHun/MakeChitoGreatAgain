import styled from "styled-components";

const StyledProblem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100vh;

  
  img {
    float: left;
    width: 50%;
    height: 50%;
    object-fit: contain;
  }

  .problem-enabled:hover {
    filter: brightness(95%);
  }

  .problem-enabled:active {
    filter: brightness(80%);
    transform: translate(0px, 5px);
    padding: 30px;
  }

  .problem-disabled {
    filter: brightness(50%);
  }

  progress {
    position: absolute;
    width: 20%;
    height: 10%;
    right: 5%;
    top: 5%;
    float: right;
  }
  
`;

export default StyledProblem;