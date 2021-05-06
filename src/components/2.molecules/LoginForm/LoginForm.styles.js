import styled from "styled-components";

const StyledLoginForm = styled.div`
  align-items: center;
  background: white;
  border-radius: 45px;
  width: 720px;
  height: 840px;
  padding: 0 85px;

  .close {
    float: right;
    font-size: 50px;
  }

  input {
    width: 550px;
    height: 75px;
  }

  .buttons {
    display: flex;
    align-items: flex-start;
    margin: 65px 0;
    text-align: center;

    .signup {
      height: 120px;
      flex: 2;
      margin-right: 10px;
    }

    .login {
      height: 120px;
      flex: 1;
    }
  }

  .inner-form {
    padding-top: 50px;
    width: 550px;
  }

  .login {
    flex: 1;
  }

  .signup {
    flex: 1;
  }
`;

export default StyledLoginForm;