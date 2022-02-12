import React from "react";
import { CommentSectionContainer } from "./style";
import LadeImage from "../../../assets/lade.svg";
import JesseImage from "../../../assets/jesse.svg";
import RayeImage from "../../../assets/raye.svg";
import CommentCard from "../../molecules/CommentCard";

const CommentSection = () => {
  const comments = [
    {
      comment:
        "I don’t want to invest in separate stocks because I’m not a financial expert and I would rather trust my money in the hands of people like Rise who are skilled and knowledgeable.",
      image: LadeImage,
      name: "Lade",
    },
    {
      comment:
        "I don’t want to invest in separate stocks because I’m not a financial expert and I would rather trust my money in the hands of people like Rise who are skilled and knowledgeable.",
      image: JesseImage,
      name: "Jesse",
    },
    {
      comment:
        "I chose Rise because of its leadership, wealth of knowledge and the people who support them. I invest with Rise in order to protect my savings and investment from being depleted by devaluation and inflation that’s at an all-time high in Nigeria.",
      image: RayeImage,
      name: "Raye",
    },
  ];

  return (
    <CommentSectionContainer>
      <h1 className="comment-section__header">From The People Who Use Rise</h1>
      <span className="comment-section__description">
        <p className="comment-section__description__text">
          Our mission at Risevest is to empower more people just like you to
          achieve your personal financial goals.
        </p>
      </span>
      <div className="comment-section__inner">
        {comments?.map((comment, index) => (
          <CommentCard
            image={comment.image}
            name={comment.name}
            comment={comment.comment}
            key={index}
          />
        ))}
      </div>
    </CommentSectionContainer>
  );
};

export default CommentSection;
