import React from 'react';
import styled from 'styled-components';
import photo from '../../../assets/images/avatar.jpg';
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Container} from "../../../components/Container";

export const Main = () => {
    return (
        <StyledMain>
            <Container>
                <FlexWrapper align={"center"} justify={"space-between"}>
                    <div>
                        <Name>Iurii Rebryk</Name>
                        <MainTitle>Web Developer</MainTitle>
                        <span>I'm creative developer based in Wrocław, and I'm
                            <br/> very passionate and dedicated to my work.</span>
                    </div>
                    <PhotoWrapper>
                        <Photo src={photo} alt=""/>
                    </PhotoWrapper>
                </FlexWrapper>
            </Container>
        </StyledMain>
    );
};

const StyledMain = styled.section`
    min-height: 100vh;
    background-color: #fff5e7;
    display: flex;
`

const PhotoWrapper = styled.div`
    position: relative;
    z-index: 0;
    
    &::before {
        content: "";
        width: 460px;
        height: 510px;
        border: 5px solid cornflowerblue;
        
        position: absolute;
        top: -24px;
        left: 24px;
        z-index: -1;
    }
`

const Photo = styled.img`
    width: 453px;
    height: 460px;
    object-fit: cover;
`
const MainTitle = styled.h1`
    font-weight: 400;
    font-size: 27px;
    margin: 10px 0;
`

const Name = styled.h2`
    font-weight: 700;
    font-size: 50px;
    letter-spacing: 0.05em;
    
    position: relative;
    z-index: 0;
    
    &::before {
        content: "";
        display: inline-block;
        width: 100%;
        height: 20px;
        background-color: cornflowerblue;
        position: absolute;
        bottom: 0;
        z-index: -1;
    }
`
