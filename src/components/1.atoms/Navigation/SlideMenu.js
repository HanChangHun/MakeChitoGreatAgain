import React from 'react';
import StyledSlideMenu from "./SlideMenu.styles";

export const SlideMenu = () => (
    <StyledSlideMenu>
        <input type={"radio"} id={"r1"} name={"t"} checked />
        <label className={"r1"} htmlFor={"r1"}>전체종목</label>
        <input type={"radio"} id={"r2"} name={"t"} />
        <label className={"r2"} htmlFor={"r2"}>관심종목</label>
    </StyledSlideMenu>
);

SlideMenu.propTypes = {
};

SlideMenu.defaultProps = {
};
