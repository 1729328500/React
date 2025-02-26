import React from "react";
import { Row, Col, Layout, Carousel } from "antd";
import BookInput from "./BookInput";
import BookList from "./BookList";
import BookDetail from "./BooDetial";
import "./style.css";

const { Content } = Layout;

const BookApp = () => {
  const [books, setBooks] = React.useState([]);
  const [selectedBook, setSelectedBook] = React.useState(null);

  const addBook = (book) => {
    setBooks([...books, { ...book, id: Date.now() }]);
  };

  const deleteBook = (id) => {
    setBooks(books.filter((book) => book.id !== id));
  };

  const editBook = (id, updatedBook) => {
    setBooks(books.map((book) => (book.id === id ? updatedBook : book)));
  };

  return (
    <Layout
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <h1 style={{ textAlign: "center", width: "100%", color: "#333" }}>
        图书管理系统
      </h1>
      <Carousel
        autoplay
        style={{ width: "100%", maxWidth: "800px", margin: "20px auto" }}
      >
        <div>
          <img
            src="https://whyhd.oss-cn-nanjing.aliyuncs.com/%E7%89%B9%E8%95%BE%E8%A5%BF%E4%BA%9A.png"
            alt="Slide 1"
            style={{ width: "100%", height: "auto" }}
          />
        </div>
        <div>
          <img
            src="https://whyhd.oss-cn-nanjing.aliyuncs.com/%E4%BC%81%E9%B9%85.jpg"
            alt="Slide 2"
            style={{ width: "100%", height: "auto" }}
          />
        </div>
        <div>
          <img
            src="https://whyhd.oss-cn-nanjing.aliyuncs.com/%E7%89%B9%E8%95%BE%E8%A5%BF%E4%BA%9A.png"
            alt="Slide 3"
            style={{ width: "100%", height: "auto" }}
          />
        </div>
      </Carousel>
      <Content style={{ padding: "0 50px", width: "100%", maxWidth: "1200px" }}>
        <Row gutter={[16, 16]}>
          <Col xs={24} md={12}>
            <BookInput addBook={addBook} />
            <BookList
              books={books}
              setSelectedBook={setSelectedBook}
              deleteBook={deleteBook}
              editBook={editBook}
            />
          </Col>
          <Col xs={24} md={12}>
            {selectedBook && <BookDetail book={selectedBook} />}
          </Col>
        </Row>
      </Content>
    </Layout>
  );
};

export default BookApp;
