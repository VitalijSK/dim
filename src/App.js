import React from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { IndexLinkContainer, LinkContainer } from 'react-router-bootstrap';
import { Route, IndexRoute, Router, hashHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import { Provider } from 'react-redux';
import store from './store.js';
import { Auth } from './services/Auth.js';
import {
  Login,
  Dashboard,
  PostsIndex,
  PostsEdit,
  QuestionsIndex,
  QuestionsEdit,
  EventsIndex
} from './containers';

require('./app.scss');

const history = syncHistoryWithStore(hashHistory, store);

let App = ({children}) => {
  return (
    <div>
      <Navbar>
        <Nav>
          <IndexLinkContainer to="/">
            <NavItem>Dashboard</NavItem>
          </IndexLinkContainer>
          <LinkContainer to="/posts">
            <NavItem>Posts</NavItem>
          </LinkContainer>
          <LinkContainer to="/questions">
            <NavItem>Questions</NavItem>
          </LinkContainer>
          <LinkContainer to="/events">
            <NavItem>Events</NavItem>
          </LinkContainer>
        </Nav>
        {Auth.authenticated() && <Nav className="pull-right">
          <NavItem onClick={Auth.logout.bind(this)}>Logout</NavItem>
        </Nav>}
        {!Auth.authenticated() && <Nav className="pull-right">
          <LinkContainer to="/login">
            <NavItem>Login</NavItem>
          </LinkContainer>
        </Nav>}
      </Navbar>
      <div className={'main'}>
        {children}
      </div>
    </div>
  );
}

export default () => {
  return (
    <Provider store={store}>
      <Router history={history}>
        <Route path="/login" component={Login} />
        <Route path="/" component={App}>
          <IndexRoute component={Dashboard} />
          <Route path="/events" component={EventsIndex} />
          <Route path="/posts" component={PostsIndex} />
          <Route path="/posts/new" component={PostsEdit} />
          <Route path="/posts/:postId" component={PostsEdit} />
          <Route path="/questions" component={QuestionsIndex} />
          <Route path="/questions/new" component={QuestionsEdit} />
          <Route path="/questions/:questionId" component={QuestionsEdit} />
        </Route>
      </Router>
    </Provider>
  )
}
