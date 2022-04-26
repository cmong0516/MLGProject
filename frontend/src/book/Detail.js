import React, { useContext, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import {
  Card,
  ListGroup,
  ListGroupItem,
  Row,
  Col,
  Badge,
} from "react-bootstrap";
import "../App.css";
import { BookContext } from "../App.js";
import Review from "./Review.js";
import RentButton from "./RentButton.js";
import styled from "styled-components";

let BookView = styled.div`
  display: grid;
  justify-items: center;
  margin-bottom: 10vh;
  margin-top: 2vh;

  h4 {
    margin-bottom: 0;
  }
`;

let DetailWrapper = styled.div`
  text-align: left;
  span {
    color: grey;
  }
`;

function Detail() {
  let book = useContext(BookContext);

  return (
    <div>
      {book ? (
        <DetailView books={book} />
      ) : (
        alert(
          "새로고침으로 인해 state가 유지되지 않아 도서데이터 수신에 실패했습니다."
        )
      )}
    </div>
  );
}

// 화면단 구성
function DetailView(props) {
  let { isbn } = useParams();
  let book = props.books && props.books.find((x) => x.isbn == isbn);
  let userId = localStorage.getItem("userId");
  let [stateCheck, setStateCheck] = useState(false);

  return (
    <BookView>
      <Row>
        <Col sm={1}></Col>
        <Col sm={4} className="bookImg">
          <Card className="detailCard">
            {book.rank && (
              <Card.Header>
                <h4>
                  <Badge bg="light" text="dark">
                    베스트셀러 {book.rank}위 🏆
                  </Badge>
                </h4>
              </Card.Header>
            )}
            <Card.Img variant="top" src={book.coverLargeUrl} />
            {userId != "admin0" ? (
              <RentButton
                book={book}
                stateCheck={stateCheck}
                setStateCheck={setStateCheck}
                className="detailrent"
              />
            ) : null}
          </Card>
          <br />
        </Col>

        <Col sm={6} className="bookInfo">
          <DetailWrapper>
            <h3>{book.title}</h3>
            <br />
            <p>
              <span>카테고리</span> {book.categoryName}({book.categoryId})
              <br />
              <span>isbn</span> {book.isbn}
            </p>
            <br />
            <Card>
              <ListGroup className="list-group-flush">
                <ListGroupItem>저자: {book.author}</ListGroupItem>
                <ListGroupItem>
                  번역가:
                  {book.translator ? book.translator : " -"}
                </ListGroupItem>
                <ListGroupItem>
                  출간일: {book.pubDate.substr(0, 4)}년{" "}
                  {book.pubDate.substr(4, 2)}월 {book.pubDate.substr(6, 2)}일
                </ListGroupItem>
                <ListGroupItem>출판사: {book.publisher}</ListGroupItem>
                {book.customerReviewRank == 0 ? null : (
                  <Card.Footer className="text-muted">
                    {" "}
                    평점 : {book.customerReviewRank}
                  </Card.Footer>
                )}
              </ListGroup>
              <Card.Body>
                <Card.Text>{book.description}</Card.Text>
              </Card.Body>
            </Card>
          </DetailWrapper>
        </Col>
      </Row>
      <Row>
        <Col sm={12}>
          <Review book={book} />
        </Col>
      </Row>
    </BookView>
  );
}

export default Detail;
