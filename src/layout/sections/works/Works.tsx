import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle";
import {TabMenu} from "./tabMenu/TabMenu";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Work} from "./work/Work";
import socialImg from "./../../../assets/images/work1.jpg"
import timerImg from "./../../../assets/images/work2.jpg"
import {Container} from "../../../components/Container";

const worksItems = ["All", "Landing Page", "React", "SPA"]

export const Works = () => {
    return (
        <StyledWorks>
            <Container>
                <SectionTitle>Portfolio</SectionTitle>
                <TabMenu menuItems={worksItems}/>
                <FlexWrapper justify={"space-between"} align={"flex-start"}>
                    <Work title={"Social Network"}
                          src={socialImg}
                          text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc facilisis ligula nec sem egestas commodo. Pellentesque semper, erat ac aliquam maximus, velit justo convallis quam, vitae luctus mi risus eu nulla."}/>

                    <Work title={"Timer"}
                          src={timerImg}
                          text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc facilisis ligula nec sem egestas commodo. Pellentesque semper, erat ac aliquam maximus, velit justo convallis quam, vitae luctus mi risus eu nulla."}/>
                </FlexWrapper>
            </Container>
        </StyledWorks>
    );
};

const StyledWorks = styled.section`
`