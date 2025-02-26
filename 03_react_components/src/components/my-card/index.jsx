// my-card/index.jsx
import React from "react";
import PropTypes from "prop-types";
import "./style.css";

const MyCard = ({ product }) => {
  const { coverImg, avatar, title, content } = product;
  return (
    <div className="card">
      <img src={coverImg} alt="封面图" className="cover-img" />
      <img src={avatar} alt="头像" className="avatar" />
      <h3 className="title">{title}</h3>
      <p className="content">{content}</p>
    </div>
  );
};

MyCard.propTypes = {
  product: PropTypes.shape({
    coverImg: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
  }).isRequired,
};

export default MyCard;
