import React from 'react';
import { useParams } from 'react-router-dom';
import { MyHeader, Loading, Post } from '../components';
import { PostType } from '../types';
import { useFetchPostDetail } from '../hooks';

interface Props {}
const PostDetails: React.FC<Props> = (props: Props) => {
  const { id } = useParams();
  // I wanted to use react hook to fetch data here,
  // just to show that we can manage state without redux and saga.
  const [postDetail, isError] = useFetchPostDetail(id);

  return (
    <>
      <MyHeader />
      {isError ? (
        <div data-testid="error">Post not Found!</div>
      ) : postDetail ? (
        <Post {...(postDetail as PostType)} />
      ) : (
        <Loading />
      )}
    </>
  );
};

export { PostDetails };
