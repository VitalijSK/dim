import React from 'react';

export const EventsListRow = ({event, onSet}) => {
  return (
    <tr key={event.id}>
      <td>{event.id}</td>
      <td>{event.title}</td>
        <td><ol>{event.steps.map(step => (<li>{step}</li>))}</ol></td>
      <td>{event.price} $</td>
      <td>
        <div className="btn-toolbar pull-right">
          <a onClick={onSet.bind(this, event)} className="btn btn-danger">Выбрать</a>
        </div>
      </td>
    </tr>
  )
};
