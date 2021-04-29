import { createGlobalStyle } from "styled-components";

const StyledLoginPage = createGlobalStyle`
  .article {
    height: 900px;
  }
  
  .article-logo {
    margin-top: 180px;
    margin-bottom: 90px;
    display: flex;
    justify-content: center;
  }
  
  .article-form {
    display: flex;
    justify-content: center;
  }
`;

export default StyledLoginPage;