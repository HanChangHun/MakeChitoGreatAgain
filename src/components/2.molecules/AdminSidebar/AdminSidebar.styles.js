import styled from "styled-components";

const StyledAdminSidebar = styled.div`
  width: 320px;
  height: 780px;
  background: #FFFFFF;
  border-radius: 10px;

  ul {
    list-style-type: none;
    margin: 10px;
    padding: 10px;
  }

  a {
    font-family: S-Core, serif;
    margin: 0;
    font-weight: 400;
    size: 24px;
    color: #000000;

    :hover {
      text-decoration: none;
      color: #777777;
    }
  }
`;

export default StyledAdminSidebar;