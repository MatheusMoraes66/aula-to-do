import { useState } from 'react';
import { Card, ListGroup } from 'react-bootstrap'; 
import BoxListItem from '../BoxListItem';
import ModalContainer from '../ModalConteiner';
function BoxList({list}) {
  const [show, setShow] = useState(false);
  const [selectItemTask, setSelectItemTask] = useState({});

  const handleClose = () => setShow(false);
    return (
      <Card style={{ width: "100" }}>
        <ListGroup variant="flush">
          {
            list.map((item, index)=>{
              return (
                <BoxListItem key={index} title={item.title} setSelect={setSelectItemTask} />)
            })
          }
        </ListGroup>
        <ModalContainer show={show} handleClose={handleClose} item={selectItemTask}/>
      </Card>
    );
}

export default BoxList
