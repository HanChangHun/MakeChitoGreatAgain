import styled from "styled-components";

const linkColor = props => {
    // Fallback value if we can't get access to props
    if (!props || !props.variant) return "#000000";

    // Dynamically determine the background colour based on props
    let colour;
    switch (props.variant) {
        case "primary":
            colour = "#000000";
            break;
        case "big":
        case "secondary":
            colour = "#2e2a2b";
            break;
        default:
            colour = "#000000";
            break;
    }
    return colour;
};

const linkFontSize = props => {
    // Fallback value if we can't get access to props
    if (!props || !props.variant) return "20px";

    // Dynamically determine the background colour based on props
    let fontSize;
    switch (props.variant) {
        case "primary":
            fontSize = "20px";
            break;
        case "secondary":
            fontSize = "18px";
            break;
        case "big":
            fontSize = "30px";
            break;
        default:
            fontSize = "20px";
            break;
    }
    return fontSize;
};

const linkFontWeight = props => {
    // Fallback value if we can't get access to props
    if (!props || !props.variant) return 400;

    // Dynamically determine the background colour based on props
    let fontWeight;
    switch (props.variant) {
        case "primary":
        case "secondary":
            fontWeight = 400;
            break;
        case "big":
            fontWeight = 500;
            break;
        default:
            fontWeight = 400;
            break;
    }
    return fontWeight;
};

const StyledLink = styled.a`
  font-family: S-Core,serif;
  font-weight: ${props => linkFontWeight(props)};
  font-size: ${props => linkFontSize(props)};
  letter-spacing: -0.8px;
  color: ${props => linkColor(props)};
  text-decoration: none;
`;

export default StyledLink;