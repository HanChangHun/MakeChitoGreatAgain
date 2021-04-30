import styled from "styled-components";

const StyledText = styled.p`
  font-family: S-Core,serif;
  margin: 0;
`;

export default StyledText;

export const StyledLinkedText = styled.a`
  font-family: S-Core,serif;
  margin: 0;
  weight: 400;
  size: 24px;
  color: #999999;
  float: right;
  :hover {
    text-decoration: none;
    color: #777777;
  }
`;
