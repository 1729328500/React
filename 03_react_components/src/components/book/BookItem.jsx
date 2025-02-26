import React from "react";
import { Card, Button, Space } from "antd";
import { EditOutlined, DeleteOutlined, EyeOutlined } from "@ant-design/icons";

const BookItem = ({ book, setSelectedBook, deleteBook, editBook }) => {
  const handleEdit = () => {
    const updatedBook = {
      ...book,
      title: prompt("请输入新的标题", book.title) || book.title,
      author: prompt("请输入新的作者", book.author) || book.author,
      year: prompt("请输入新的出版年份", book.year) || book.year,
    };
    editBook(book.id, updatedBook);
  };

  return (
    <Card
      hoverable
      style={{ marginBottom: 16 }}
      actions={[
        <EyeOutlined key="detail" onClick={() => setSelectedBook(book)} />,
        <EditOutlined key="edit" onClick={handleEdit} />,
        <DeleteOutlined key="delete" onClick={() => deleteBook(book.id)} />,
      ]}
    >
      <Card.Meta
        title={book.title}
        description={`作者: ${book.author} | 出版年份: ${book.year}`}
      />
    </Card>
  );
};

export default BookItem;
