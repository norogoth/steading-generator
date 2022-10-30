import React from 'react';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
//import example from '../data/example.csv';

const Results = props => {
    const data = props.data;
    console.log({ data });
    const ResultRows = () => (data.map( obj => {
        return (
            <tr key={obj.type}>
                <td>{obj.type}</td>
                <td>{obj.description}</td>
                <td><Button onClick={() => props.generateOneType(obj.type)}>Regenerate</Button></td>
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

export default Results;