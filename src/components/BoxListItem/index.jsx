import { ListGroup, Button } from "react-bootstrap";

function BoxListItem({ title, removeItem, setSelect }) {
  return (
    <ListGroup.Item>
      <div style={{ display: "flex", justifyContent: "space-between", height: "40px" }}>
        <div style={{ lineHeight: "2.5"}}>
          <p>{title}</p>
        </div>
        <div style={{width: "37%", display: "flex", justifyContent: "space-between"}}>
          <Button variant="success" onClick={()=> setSelect({
            id: 0,
            title: ''
          })}> Editar</Button>

          <Button variant="danger"> Excluir</Button>
        </div>
      </div>
    </ListGroup.Item>
  );
}

export default BoxListItem;
