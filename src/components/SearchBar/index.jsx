import { useState } from "react";
import PropTypes from "prop-types";
import {InputGroup , Form, Button} from "react-bootstrap";

function SearchBar({setlist, list}) {
    const [task, setTask] = useState('');

    const handlerSubimit = () => {
      let listTask = list;
      listTask.push({
        id: Math.floor(Math.random() * 100),
        title: task
      })
      setlist([...listTask]);
    }

    return (
      <InputGroup className="mb-3">
        <Form.Control
          placeholder="Digite a Tarefa"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <Button variant="outline-secondary" 
        id="button-addon2" 
        className="bg-primary text-white"
        onClick={handlerSubimit}>
          Criar
        </Button>
      </InputGroup>
    );
}

SearchBar.propTypes = {
  setlist: PropTypes.func.isRequired,
  list: PropTypes.array.isRequired
};

export default SearchBar
