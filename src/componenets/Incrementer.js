import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import InputGroup from 'react-bootstrap/InputGroup';
import { Form } from 'react-bootstrap';

const Incrementer = (props) => {
  return (
        <ButtonToolbar className="mb-3" aria-label="Toolbar with Button groups">
            <ButtonGroup className="me-2" aria-label="First group">
                <Button variant="secondary">-</Button>{' '}
                <Button variant="secondary">+</Button>{' '}
            </ButtonGroup>
            <InputGroup>
                <InputGroup.Text id="btnGroupAddon">Count</InputGroup.Text>
                <Form.Control
                    type="text"
                    value={props.type.count}
                    placeholder={props.type.name}
                    aria-label={props.type.name}
                    aria-describedby="btnGroupAddon"
                />
            </InputGroup>
    </ButtonToolbar>
    );
}

export default Incrementer;