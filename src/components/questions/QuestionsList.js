import React from 'react';
import { QuestionsListRow } from './QuestionsListRow.js';

export const QuestionsList = ({questions, onDelete}) => {
  return (
    <table className="table table-hover">
      <thead>
      <tr>
        <th>Id</th>
        <th>Название</th>
        <th>варианты ответа</th>
        <th></th>
      </tr>
      </thead>
      <tbody>
      {questions.map(question => QuestionsListRow({question, onDelete}))}
      </tbody>
    </table>
  )
};
