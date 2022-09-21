import React from "react";
import { TagWrapper } from "./styles";

// import { Container } from './styles';

interface TagProps {
  category: string;
}

const Tag: React.FC<TagProps> = ({ category }) => {
  return (
    <TagWrapper>
      <div>
        <span>{category}</span>
      </div>
    </TagWrapper>
  );
};

export default Tag;
