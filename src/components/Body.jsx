import { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import AllTheBooks from './AllTheBooks'
import Comments from './CommentArea'
import { Row, Col } from 'react-bootstrap';


class BodyDelSito extends Component {
state = { selected: undefined}

changeState = (stateSelected) => {
    this.SetState({
        selected: stateSelected
    })
}
    render(){
return (
    <>
     <Row>
        <Col xs={6}>
        <AllTheBooks  
        selected={this.state.selected}
        changeState={this.changeState}
        />
        </Col>
        <Col xs={6}>
        <Comments selected={this.state.selected}/>
        </Col>
     </Row>
    </>
)
    }
}

export default BodyDelSito