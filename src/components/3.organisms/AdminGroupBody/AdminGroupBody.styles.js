import styled from "styled-components";

const StyledAdminGroupBody = styled.div`
  width: 1020px;
  height: 780px;
  background: #FFFFFF;
  border-radius: 10px;
  padding: 20px;
  display: flex;
  flex-direction: column;

  .group-tops{
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .groups-body {
    height: 570px;
    overflow: scroll;
  }
`;

export default StyledAdminGroupBody;