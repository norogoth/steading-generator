import React, { Component, useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import styled from 'styled-components';
import Table from 'react-bootstrap/Table';
//import example from '../data/example.csv';



const Results = () => {

    const [data, setText] = useState({});

    const resultRows = (Object.keys(data).map( key => {
        return (
            <tr key={key}>
                <td>{key}</td>
                <td>{data[key]}</td>
                <td><Button>Regenerate</Button></td>
            </tr>
        );
    }));

    const results = (
        <Table variant="dark">
            <thead>
                {resultRows}
            </thead>
        </Table>
    );
    
    const loadAll = () => {
        let types = ['surroundings', 'guilds','landmarks','npc_dialogue','npc_interactions','prosperity',];
        types.forEach( type => {
            loadType(type);
        });
    }

    const loadType = (type) => {
        fetch('./' + type + '.csv')
        .then(response => response.text() )
        .then( responseText => {
            //detect if one column and, if not, get headers and make object?
            const textArray = responseText.split(/\r?\n/); //split on linebreak
            const randIndex = Math.floor(Math.random() * textArray.length);
            const randChoice =  textArray[randIndex];
            let newData = data;
            newData[type] = randChoice;
            setText(newData);
            console.log({newData});
            console.log({results});
        })
    };

    useEffect(() => {
        loadAll();
    }, []);

    return (
        <div classname="table-div">
            {results}
        </div>
    );
}


const KeyValuePairDiv = styled.div`
    display: flex;
`
const RegenerateButton = styled.button`

`


export default Results;