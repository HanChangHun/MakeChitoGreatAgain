import styled from "styled-components";

const StyledNavigation = styled.nav`
  display: flex;
  padding: 16px;

  a + a {
    margin-left: 24px
  }
`;

export default StyledNavigation;