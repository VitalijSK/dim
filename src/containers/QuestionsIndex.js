import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'
import { Link } from 'react-router';
import { QuestionsList } from '../components/questions/QuestionsList.js';
import { SearchInput } from '../components/shared/SearchInput.js';
import { questionsActions, questionsSelectors } from '../store/questions';

@connect(
  (state) => {
    return {
      params: questionsSelectors.getParams(state),
      questions: questionsSelectors.getQuestions(state),
    };
  }
)
export class QuestionsIndex extends React.Component {
  static contextTypes = {
    router: React.PropTypes.object,
    store: React.PropTypes.object,
  };

  constructor(props, context) {
    super(props, context);

    this.deleteQuestion = this.deleteQuestion.bind(this);
    this.handleSearch = this.handleSearch.bind(this, 'title_like');
  }

  componentDidMount() {
    this.fetchQuestions({});
  }

  fetchQuestions(params) {
    this.context.store.dispatch(questionsActions.fetchQuestions(params));
  }

  deleteQuestion(question) {
    this.context.store.dispatch(questionsActions.deleteQuestion(question));
  }

  handleSearch(field, value) {
    this.fetchQuestions({q: value})
  }

  render() {
    const {
      params,
      questions,
    } = this.props;

    return (
      <div>
        <div className="row">
          <div className="col-md-12 text-center">
            <Link to="/questions/new" className="btn btn-primary"> Новый вопрос</Link>
          </div>
        </div>
        {questions.length > 0 &&
        <QuestionsList questions={questions} onDelete={this.deleteQuestion}/>}
      </div>
    );
  }
}
