import React, { Component } from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  Breadcrumb,
  BreadcrumbItem,
  Button,
  Label,
  Modal,
  ModalHeader,
  ModalBody,
  Row,
  Col,
} from "reactstrap";
import { Control, LocalForm, Errors } from "react-redux-form";
import { Link } from "react-router-dom";

const required = (val) => val && val.length;
const maxLength = (len) => (val) => !val || val.length <= len;
const minLength = (len) => (val) => val && val.length >= len;
class CommentForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalOpen: false,
    };
    this.toggleModal = this.toggleModal.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(values) {
    console.log("Current State is: " + JSON.stringify(values));
    alert("Current State is: " + JSON.stringify(values));
    //event.preventDefault();
  }
  toggleModal() {
    this.setState({ isModalOpen: !this.state.isModalOpen });
  }
  render() {
    return (
      <div>
        <Button onClick={this.toggleModal}>
          <span className="fa fa-pencil-square-o fa-lg" aria-hidden="true">
            Submit Comment
          </span>
        </Button>
        <div className="row row-content">
          <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
            <ModalHeader toggle={this.toggleModal}>Submit Comment</ModalHeader>
            <ModalBody>
              <div className="col-12 col-md-12">
                <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
                  <Row className="form-group">
                    <Label htmlFor="rating" md={12}>
                      Rating
                    </Label>
                    <Col md={12}>
                      <Control.select
                        className="form-control"
                        model=".rating"
                        id="rating"
                        name="rating"
                        placeholder="Rating"
                        validators={{
                          required,
                        }}
                      >
                        <Errors
                          className="text-danger"
                          model=".rating"
                          show="touched"
                          messages={{
                            required: "Required ",
                          }}
                        />
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                      </Control.select>
                    </Col>
                  </Row>
                  <Row className="form-group">
                    <Label htmlFor="author" md={12}>
                      Your Name
                    </Label>
                    <Col md={12}>
                      <Control.text
                        className="form-control"
                        model=".author"
                        id="author"
                        name="author"
                        placeholder="Your Name"
                        validators={{
                          required,
                          minLength: minLength(3),
                          maxLength: maxLength(15),
                        }}
                      />
                      <Errors
                        className="text-danger"
                        model=".author"
                        show="touched"
                        messages={{
                          required: "Required ",
                          minLength: "Must be greater than 2 characters ",
                          maxLength: "Must be 15 characters or less ",
                        }}
                      />
                    </Col>
                  </Row>
                  <Row className="form-group">
                    <Label htmlFor="feedback" md={12}>
                      Comment
                    </Label>
                  </Row>
                  <Row className="form-group">
                    <Col md={12}>
                      <Control.textarea
                        className="form-control"
                        model=".comment"
                        id="comment"
                        name="comment"
                        rows="6"
                        placeholder="Enter your comment here"
                        validators={{
                          required,
                        }}
                      />
                      <Errors
                        className="text-danger"
                        model=".comment"
                        show="touched"
                        messages={{
                          required: "Required ",
                        }}
                      />
                    </Col>
                  </Row>
                  <Button type="submit" value="submit" className="bg-primary">
                    Submit
                  </Button>
                </LocalForm>
              </div>
            </ModalBody>
          </Modal>
        </div>
      </div>
    );
  }
}

function RenderDish({ dish }) {
  if (dish != null) {
    return (
      <Card>
        <CardImg width="100%" src={dish.image} alt={dish.name} />
        <CardBody>
          <CardTitle>{dish.name}</CardTitle>
          <CardText>{dish.description}</CardText>
        </CardBody>
      </Card>
    );
  } else {
    return <div></div>;
  }
}

function RenderComments({ comments }) {
  if (comments != null) {
    const allComments = comments.map((cmt) => {
      return (
        <li key={cmt.id}>
          {cmt.comment}
          <br />
          <br />
          -- {cmt.author},{" "}
          {new Intl.DateTimeFormat("en-US", {
            year: "numeric",
            month: "short",
            day: "2-digit",
          }).format(new Date(Date.parse(cmt.date)))}
          <br />
          <br />
        </li>
      );
    });

    return (
      <div>
        <h4>Comments</h4>
        <ul className="list-unstyled">{allComments}</ul>
        <CommentForm />
      </div>
    );
  } else {
    return <div></div>;
  }
}

const DishDetail = (props) => {
  if (props.dish != null) {
    return (
      <div className="container">
        <div className="row">
          <Breadcrumb>
            <BreadcrumbItem>
              <Link to="/menu">Menu</Link>
            </BreadcrumbItem>
            <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
          </Breadcrumb>
          <div className="col-12">
            <h3>{props.dish.name}</h3>
            <hr />
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-md-5 m-1">
            <RenderDish dish={props.dish} />
          </div>
          <div className="col-12 col-md-5 m-1">
            <RenderComments comments={props.comments} />
          </div>
        </div>
      </div>
    );
  } else {
    return <div></div>;
  }
};

export default DishDetail;
