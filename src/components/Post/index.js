import React from 'react';

import PostHeader from '../PostHeader';

import { StylePost } from './style/StylePost';

const Post = data => (
  <StylePost>
    <PostHeader
      name={data.data.name}
      time={data.data.time}
      url={data.data.url}
      alt={data.data.alt}
    />
    <div className="content">{data.data.content}</div>
  </StylePost>
);

export default Post;
