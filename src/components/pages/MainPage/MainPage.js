import React from 'react';
import {Header} from "../../organisms/Header/Header"
import {items_login} from "./MainPage-data.json"
import {Footer} from "../../organisms/Footer/Footer";
import StyledMainPage from "./MainPage.styles";

export const MainPage = () => {
    return (<>
        <StyledMainPage/>
        <Header items1={[]} items2={items_login}/>
        <div className={"article"}>
        </div>
        <Footer />
    </>);
};

MainPage.propTypes = {};

MainPage.defaultProps = {};