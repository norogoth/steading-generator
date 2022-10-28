import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import styled from "styled-components";

const Prompt = () => {
    const steadingTypes = ["village", "outpost", "city"];

    const steadingOptions = steadingTypes.map( type => 
        <option key={type} value="{type}">{type}</option>
    );

    return (
        <SelectorDiv>
            <select id="steading-type">
                {steadingOptions}
            </select>
            <Button variant="primary">Regenerate</Button>
        </SelectorDiv>
    );
}

const SelectorDiv = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-around;
`;

export default Prompt;