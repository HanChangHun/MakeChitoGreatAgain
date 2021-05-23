import styled from "styled-components";

const StyledAdminHeader = styled.div`
  width: 1350px;
  height: 100px;
  background: #FFFFFF;
  border-radius: 10px;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  padding: 10px;

  .greeting {
    display: flex;
    align-items: center;
    img {
      height: 120px;
    }
  }
`;

export default StyledAdminHeader;