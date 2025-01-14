import { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";

// class AddComment extends Component {
const AddComment = (props) => {
  const [comment, setComment] = useState("");
  const [rate, setRate] = useState(1);
  const [elementid, setElementid] = useState(props.asin);
  // state = {
  //   comment: {
  //     comment: '',
  //     rate: 1,
  //     elementId: this.props.asin,
  //   },
  // }
  useEffect(() => {
    setComment(...comment);
    setElementid(props.asin);
  });
  // componentDidUpdate(prevProps) {
  //   if (prevProps.asin !== this.props.asin) {
  //     this.setState({
  //       comment: {
  //         ...this.state.comment,
  //         elementId: this.props.asin,
  //       },
  //     })
  //   }
  // }

  const sendComment = async (e) => {
    e.preventDefault();
    try {
      let response = await fetch(
        "https://striveschool-api.herokuapp.com/api/comments",
        {
          method: "POST",
          body: JSON.stringify(comment),
          headers: {
            "Content-type": "application/json",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2Nzg2NmMyYjBmZTRlMjAwMTU2Njg3ZWYiLCJpYXQiOjE3MzY4NjI3NjMsImV4cCI6MTczODA3MjM2M30.0nrf3mv6TsYruexDPsMlR6q9tq2wro4Jc2DHLiTM2YU",
          },
        }
      );
      if (response.ok) {
        alert("Recensione inviata!");
        setComment("");
        setElementid(props.asin);
        setRate(1);
        // this.setState({
        //   comment: {
        //     comment: "",
        //     rate: 1,
        //     elementId: this.props.asin,
        //   },
        // });
      } else {
        throw new Error("Qualcosa è andato storto");
      }
    } catch (error) {
      alert(error);
    }
  };

  return (
    <div className="my-3">
      <Form onSubmit={sendComment}>
        <Form.Group className="mb-2">
          <Form.Label>Recensione</Form.Label>
          <Form.Control
            type="text"
            placeholder="Inserisci qui il testo"
            value={comment}
            onChange={
              (e) => setComment(e.target.value)
              // this.setState({
              //   comment: {
              //     ...this.state.comment,
              //     comment: e.target.value,
              //   },
              // })
            }
          />
        </Form.Group>
        <Form.Group className="mb-2">
          <Form.Label>Valutazione</Form.Label>
          <Form.Control
            as="select"
            value={comment}
            onChange={(e) => setRate(e.target.value)}
          >
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </Form.Control>
        </Form.Group>
        <Button variant="primary" type="submit">
          Invia
        </Button>
      </Form>
    </div>
  );
};

export default AddComment;
