import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle";
import {Menu} from "../../../components/menu/Menu";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Work} from "./work/Work";
import socialImg from "./../../../assets/images/work1.jpg"
import timerImg from "./../../../assets/images/work2.jpg"

const worksItems = ["All", "Landing Page", "React", "SPA"]

export const Works = () => {
    return (
        <StyledWorks>
            <SectionTitle>Portfolio</SectionTitle>
            <Menu menuItems={worksItems}/>
            <FlexWrapper justify={"space-around"}>
                <Work title={"Social Network"}
                      src={socialImg}
                      text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc facilisis ligula nec sem egestas commodo. Pellentesque semper, erat ac aliquam maximus, velit justo convallis quam, vitae luctus mi risus eu nulla."}/>

                <Work title={"Timer"}
                      src={timerImg}
                      text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc facilisis ligula nec sem egestas commodo. Pellentesque semper, erat ac aliquam maximus, velit justo convallis quam, vitae luctus mi risus eu nulla."}/>
            </FlexWrapper>
        </StyledWorks>
    );
};

const StyledWorks = styled.section`
    background-color: #deefff;
`