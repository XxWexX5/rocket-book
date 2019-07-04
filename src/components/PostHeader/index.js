import React from 'react';

import { StylePostHeader } from './style/StylePostHeader';

const PostHeader = (props) => {
  const {
    name, time, url, alt,
  } = props;

  return (
    <StylePostHeader>
      <img src={url} alt={alt} />

      <div>
        <p className="title">{name}</p>
        <p className="time">{time}</p>
      </div>
    </StylePostHeader>
  );
};

export default PostHeader;
