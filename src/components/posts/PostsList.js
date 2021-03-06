import React from 'react';
import { PostsListRow } from './PostsListRow.js';

export const PostsList = ({posts, onDelete}) => {
  return (
    <table className="table table-hover">
      <thead>
      <tr>
        <th>Id</th>
        <th>Название</th>
        <th>Клиент</th>
        <th></th>
      </tr>
      </thead>
      <tbody>
      {posts.map(post => PostsListRow({post, onDelete}))}
      </tbody>
    </table>
  )
};
