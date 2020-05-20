import React from 'react';
import { calcRegActions, calcRegSelectors } from '../store/calc-reg';
import { connect } from 'react-redux';
import {postsActions} from "../store/posts";
import {SearchInput} from "../components/shared/SearchInput.js";
import {EventsList} from "../components/events/EventsList.js";

@connect(
  (state, props) => {
    return {
      events: calcRegSelectors.getValues(state),
    }
  }
)
export class EventsIndex extends React.Component {
  static contextTypes = {
    router: React.PropTypes.object,
    store: React.PropTypes.object,
  };

  constructor(props, context) {
    super(props, context);
  }

  componentDidMount() {
    this.fetchEvents();
  }

  fetchEvents() {
    this.context.store.dispatch(calcRegActions.fetchEvents());
  }
  onSet (event) {
    console.log('event', event)
  }

  render() {
    const {
      events,
    } = this.props;

    return (
        <div>
          {events.length > 0 &&
          <EventsList events={events} onSet={this.onSet}/>}
        </div>
    );
  }
}
