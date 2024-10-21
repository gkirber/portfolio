import styled from "styled-components";

export const SectionTitle = styled.h2`
    text-align: center;
    font-family: 'Popins', sans-serif;
    font-weight: 600;
    font-size: 36px;
    letter-spacing: 0.5px;
    margin-bottom: 90px;
    
    position: relative;
    
    &::before {
        content: "";
        display: inline-block;
        width: 55px;
        height: 1px;
        background-color: cornflowerblue;
        
        position: absolute;
        left: 50%;
        bottom: -30px;
        transform: translateX(-50%);
    }
`