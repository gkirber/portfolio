import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {SectionTitle} from "../../../components/SectionTitle";
import {Skill} from "./skill/Skill";

export const Skills = () => {
    return (
        <StyledSkills>
            <SectionTitle>Skills</SectionTitle>
            <FlexWrapper>
                <Skill iconId={"code"} title={"html"} description={"Intermediate"}/>
                <Skill iconId={"css"} title={"css"} description={"Intermediate"}/>
                <Skill iconId={"react"} title={"JavaScript"} description={"Intermediate"}/>
                <Skill iconId={"react"} title={"TypeScript"} description={"Intermediate"}/>
                <Skill iconId={"react"} title={"React"} description={"Intermediate"}/>
                <Skill iconId={"react"} title={"Git"} description={"Intermediate"}/>
                <Skill iconId={"react"} title={"Styled Components"} description={"Intermediate"}/>
            </FlexWrapper>
        </StyledSkills>
    );
};

const StyledSkills = styled.section`
    background-color: #ffe5e4;
`