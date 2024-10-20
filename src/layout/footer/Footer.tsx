import React from 'react';
import styled from "styled-components";
import {Icon} from "../../components/icon/Icon";
import {FlexWrapper} from "../../components/FlexWrapper";

export const Footer = () => {
    return (
        <StyledFooter>
            <FlexWrapper direction={"column"} align={"center"}>
                <Name>Iurii Rebryk</Name>
                <SocialList>
                    <SocialItem>
                        <SocialLink>
                            <Icon height={"21px"} width={"21px"} viewBox={"0 0 21 21"} iconId={"#"}/>
                        </SocialLink>
                    </SocialItem>
                    <SocialItem>
                        <SocialLink>
                            <Icon height={"21px"} width={"21px"} viewBox={"0 0 21 21"} iconId={"#"}/>
                        </SocialLink>
                    </SocialItem>
                    <SocialItem>
                        <SocialLink>
                            <Icon height={"21px"} width={"21px"} viewBox={"0 0 21 21"} iconId={"#"}/>
                        </SocialLink>
                    </SocialItem>
                </SocialList>
                <Copyright>@ Iurii Rebryk. All rights reserved</Copyright>
            </FlexWrapper>
        </StyledFooter>
    );
};

const StyledFooter = styled.footer`
    background-color: #ffd8a5;
    min-height: 20vh;
`

const Name = styled.span`
    
`
const SocialList = styled.ul`
    display: flex;
`

const SocialItem = styled.li`
    
`

const SocialLink = styled.a`
    
`

const Copyright = styled.small`
    
`