import React from 'react';
import Button from 'react-bootstrap/Button';
import styled from 'styled-components';
import Table from 'react-bootstrap/Table';
//import example from '../data/example.csv';

const Results = props => {
    const data = props.data;
    console.log({ data });
    const ResultRows = () => (Object.keys(data).map( key => {
        return (
            <tr key={key}>
                <td>{key}</td>
                <td>{data[key]}</td>
                <td><Button onClick={() => props.generateOneType(key)}>Regenerate</Button></td>
            </tr>
        );
    }));
    
    const ResultTable = () => {
        return (
            <Table variant="dark">
                <thead>
                    <ResultRows/>
                </thead>
            </Table>
            );
        };

    return (
        <div className="table-div">
            <ResultTable/>
        </div>
    );
}

const KeyValuePairDiv = styled.div`
    display: flex;
`
const RegenerateButton = styled.button`

`

export default Results;