import { useState } from 'react';
import { Card, ListGroup } from 'react-bootstrap'; 
import BoxListItem from '../BoxListItem';
import ModalContainer from '../ModalConteiner';
import PropTypes from "prop-types";

function BoxList({list}) {
  const [show, setShow] = useState(false);
  const [selectItemTask, setSelectItemTask] = useState({});

  const handleClose = () => setShow(false);
    return (
      <Card style={{ width: "100" }}>
        <ListGroup variant="flush">
          {
            list.length > 0 && list.map((item, index)=>{
              return (
                <BoxListItem key={index} item={item} setSelect={setSelectItemTask} />)
            })
          }
        </ListGroup>
         <ModalContainer show={show} handleClose={handleClose} item={selectItemTask}/>
      </Card>
    );
}


BoxList.propTypes = {
  list: PropTypes.array.isRequired
};

export default BoxList
