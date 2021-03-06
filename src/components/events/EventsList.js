import React from 'react';
import { EventsListRow } from './EventsListRow.js';

export const EventsList = ({events, onSet}) => {
  return (
    <table className="table table-hover">
      <thead>
      <tr>
        <th>Id</th>
        <th>Название</th>
        <th>План</th>
        <th>Цена</th>
        <th></th>
      </tr>
      </thead>
      <tbody>
      {events.map(event => EventsListRow({event, onSet}))}
      </tbody>
    </table>
  )
};
