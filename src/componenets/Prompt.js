import React from 'react';
import Button from 'react-bootstrap/Button';
import styled from "styled-components";
import Customizer from "./Customizer";

const Prompt = (props) => {
    /*
    const steadingTypes = ["village", "outpost", "city"];

    const steadingOptions = steadingTypes.map( type => 
        <option key={type} value="{type}">{type}</option>
    );
    */

    return (
        <SelectorDiv>
            <Customizer types={props.types}/>
            <Button variant="primary" onClick={ props.generateButtonOnClick }>Regenerate</Button>
        </SelectorDiv>
    );
}

const SelectorDiv = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-around;
`;

export default Prompt;