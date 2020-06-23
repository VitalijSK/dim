import React from 'react';
import { Link } from 'react-router';

export const QuestionsListRow = ({question, onDelete}) => {
  return (
    <tr key={question.id}>
      <td>{question.id}</td>
      <td>{question.title}</td>
      <td className="cardsAdmin">{question.cards.map((card) =>
          <div>
              {card.title}
              <img src={card.src} alt={card.title}/>
          </div>
      )}</td>
      <td>
        <div className="btn-toolbar pull-right">
          <Link to={`/questions/${question.id}`} className="btn btn-primary">Edit</Link>
          <a onClick={onDelete.bind(this, question)} className="btn btn-danger">Delete</a>
        </div>
      </td>
    </tr>
  )
};
