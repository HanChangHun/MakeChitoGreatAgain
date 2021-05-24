import styled from "styled-components";

const buttonFontSize = props => {
    if (!props) return "72px";
    if (!props.variant) return "72px";

    if (props.variant === "primary") {
        return "72px";
    } else if (props.variant === "secondary"){
        return "56px";
    } else if (props.variant === "admin"){
        return "30px";
    }
};

const buttonPadding = props => {
    if (!props) return "32px 64px";
    if (!props.variant) return "32px 64px";

    if (props.variant === "primary") {
        return "32px 64px";
    } else if (props.variant === "secondary") {
        return "32px 40px";
    }else if (props.variant === "admin"){
        return "20px";
    }
};

const StyledButton = styled.button`
  //display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: ${props => buttonPadding(props)};
  background-color: #55AB67;
  border-radius: 36px;
  border: 0;
  cursor: pointer;
  line-height: 100%;
  white-space: normal;
  font-family: S-Core, serif;
  font-weight: 600;
  font-size: ${props => buttonFontSize(props)};
  text-transform: capitalize;
  color: white;

  .button__icon {
    display: inline-block;
    margin-right: 4px;
  }
`;

export default StyledButton;
