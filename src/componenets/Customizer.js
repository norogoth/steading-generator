import React, { useState } from 'react';
import styled from "styled-components";
import Collapse from 'react-bootstrap/Collapse';
import Button from 'react-bootstrap/Button';
import Incrementer from './Incrementer';

const Customizer = (props) => {
    const [open, setOpen] = useState(false);
    const TypeCheckboxes = () => (props.types.map( type => {
        return (
            <div key={type.name}>
                <Incrementer type={type}/>
                <label>{type.name}</label>
            </div>
        );
    })); 

    return (
        <CustomizerDiv>
            <Button
            onClick={() => setOpen(!open)}
            aria-controls="example-collapse-text"
            aria-expanded={open}>
                Customize
            </Button>
            <Collapse in={open}>
                <div id="example-collapse-text">
                    This feature does not work yet
                    <TypeCheckboxes/>
                </div>
            </Collapse>
        </CustomizerDiv>
    );
}

const CustomizerDiv = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`;

export default Customizer;