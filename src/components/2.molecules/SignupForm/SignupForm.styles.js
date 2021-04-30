import styled from "styled-components";

const StyledSignupForm = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  overflow-y: scroll;
  background: white;
  border-radius: 45px;
  width: 720px;
  height: 840px;
  padding: 0 85px;
  //::-webkit-scrollbar {
  //  display: none;
  //}
  p {
    margin-top: 50px;
  }
  input {
    margin-top: 12px;
    width: 550px;
    height: 75px;
  }

  Button {
    margin: 50px 0;
    width: 100%;
    height: 120px;
  }

  .inner-form {
    width: 550px;
  }
`;

export default StyledSignupForm;