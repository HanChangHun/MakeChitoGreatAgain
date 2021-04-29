import styled from "styled-components";

const StyledSlideMenu = styled.div`
  font-family: S-Core,serif;
  font-weight: 500;
  font-size: 22px;
  position: absolute;
  label{
    width: 250px;
    display: inline-block;
    text-align: center;
    background: #91b7a5;
    color: white;
    height: auto;
    padding: 13px 0 13px 0;
    border-top-left-radius: 7px;
    border-top-right-radius: 7px;
  }
  .r1{
    border-top-right-radius: 0;
  }
  .r2{
    border-top-left-radius: 0;
  }
  label:hover {
    cursor: pointer;
  }
  [type=radio] {
    display: none;
  }
  [type=radio]:checked + label {
    background-color: #3e9a2c;
  }
`;

export default StyledSlideMenu;