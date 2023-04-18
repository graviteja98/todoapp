import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { allList } from "../redux/todo/todoActions";
import { useEffect } from "react";
import { Container, Row, Col } from 'react-bootstrap';
import Card from "./Tcard";
export const FullList = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(allList());
  }, []);
  const todo = useSelector((state) => state);

  
  const myArray = Object.values(todo);
  if (localStorage.getItem('sortby')==='By Date'){
  myArray[0] = myArray[0].sort((a, b) => {
    if (new Date(a.when) < new Date(b.when)) {
      return -1;
    }
    if (new Date(a.when) > new Date(b.when)) {
      return 1;
    }
    return 0;
  })}
  
  return (
    <Container>
    <Row xs={2} md={3} lg={4}>
     { myArray[0].map((s,index) =><Col key={index} > <Card  _id={s['_id']} todo={s['todo']} when={s['when']}/></Col> ) }
     </Row>
    </Container>
  );
};
