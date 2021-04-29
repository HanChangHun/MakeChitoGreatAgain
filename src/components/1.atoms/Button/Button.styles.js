import styled from "styled-components";

const buttonBackground = props => {
    // Fallback value if we can't get access to props
    if (!props) return "#a4d65e";
    // If no variant is specified, return the primary colour in our theme
    if (!props.variant) return "#a4d65e";

    // Dynamically determine the background colour based on props
    let colour;
    switch (props.variant) {
        case "primary":
            colour = "#a4d65e";
            break;
        default:
            colour = "#a4d65e";
            break;
    }

    return colour;
};

const StyledButton = styled.button`
  padding: 5px;
  align-items: center;
  text-align: center;
  background-color: ${props => buttonBackground(props)};
  border-radius: 5px;
  border: solid 1px #12af67;
  cursor: pointer;
  line-height: 1;
  outline: none;
  text-decoration: none;
  transition: all 0.15s ease;
  white-space: nowrap;
  font-family: S-Core, serif;
  font-weight: 400;
  font-size: 30px;

  .button__icon {
    display: inline-block;
    margin-right: 4px;
  }
`;

export default StyledButton;
export const StyledToggle = styled.a`
  height: 30px;
  text-align: center;
  color:#2e2a2b;
  background-color: #e7e8e8;
  border-radius: 12px;
  border: 0;
  padding: 6px 18px 6px 18px;
  cursor: pointer;
  line-height: normal;
  text-decoration: none;
  font-family: S-Core, serif;
  font-weight: 500;
  font-size: 14px;
  :hover{
    color:green;
    text-decoration: none;
  }
`;
export const StyledLinkButton = styled(StyledButton).attrs({as: "a"})``;
