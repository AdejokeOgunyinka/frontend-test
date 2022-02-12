import React from "react";
import { CommentCardContainer } from "./style";

const CommentCard = ({ image, comment, name }) => {
  return (
    <CommentCardContainer>
      <p className="comment__header">{comment}</p>
      <div className="comment__inner">
        <img src={image} alt="commenter" className="comment__inner__image" />
        <p className="comment__inner__name">{name}</p>
      </div>
    </CommentCardContainer>
  );
};

export default CommentCard;
