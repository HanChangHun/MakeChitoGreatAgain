import styled from "styled-components";

const StyledLoginForm = styled.div`
  align-items: center;
  background: white;
  border-radius: 45px;
  width: 720px;
  height: 840px;
  padding: 0 85px;
  input {width:550px; height: 75px;}
  Button {height: 120px;}
  .buttons {
    display: flex;
    margin: 65px 0;
  }
  .inner-form{
    width: 550px;
  }
  .login {
    flex:1;
  }
  .signup {
    flex:1;
  }
`;

export default StyledLoginForm;