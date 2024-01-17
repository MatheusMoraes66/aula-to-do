import { useEffect, useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";

function ModalContainer({show , handleClose, item}) {
    const [task, setTask] = useState('');
    useEffect(() => {
        if(item !== undefined){
            setTask(item.title);
        }
    }, [item])
    return (
        <>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Editando Tarefa</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <Form.Control
                    value={task}
                    onChange={(e) => setTask(e.target.value)}
                />
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Cancelar
                    </Button>
                    <Button variant="primary" onClick={() => console.log(task)}>
                        Salvar
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default ModalContainer;