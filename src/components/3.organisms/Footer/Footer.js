import React from 'react';
import StyledFooter from "../Footer/Footer.styles";
import {MultiLineText, Text} from "../../1.atoms/Text/Text";


export const Footer = () => {
    return (<StyledFooter>
        <div>
            <MultiLineText weight={500} text={`본 프로젝트가 제공하는 금융 정보는 각 콘텐츠 제공업체 상세설명로부터 받는 투자 참고사항이며, 오류가 발생하거나 지연될 수 있습니다.
본 프로젝트와 콘텐츠 제공업체는 제공된 정보에 의한 투자 결과에 법적인 책임을 지지 않습니다. 게시된 정보는 무단으로 배포할 수 없습니다.`} />
        </div>
        <div style = {{ whiteSpace: "pre" }}>
            <Text weight={500} text={`Copyright @ Media Team Projects        All Rights Reserved.`} />
        </div>
    </StyledFooter>);
};

Footer.propTypes = {};

Footer.defaultProps = {};