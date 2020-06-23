import React from 'react';
import Textarea from 'react-textarea-autosize';
import { questionsActions, questionsSelectors } from '../store/questions';
import { connect } from 'react-redux';
import { isEqual } from 'lodash';

@connect(
  (state, props) => {
    return {
      question: questionsSelectors.getQuestion(state, props.params.questionId),
    }
  }
)
export class QuestionsEdit extends React.Component {
  static contextTypes = {
    router: React.PropTypes.object,
    store: React.PropTypes.object
  };

  static propTypes = {
    params: React.PropTypes.object,
    question: React.PropTypes.object,
  };

  constructor(props, context) {
    super(props, context);

    this.state = {
      ...this.state,
      questionId: this.props.params.questionId,
      question: {title: '', body: ''}
    };
  }

  componentWillReceiveProps(nextProps) {
    if (!isEqual(nextProps.question, this.state.question)) {
      this.setState({...this.state, question: nextProps.question});
    }
  }

  componentDidMount() {
    if (this.state.questionId) {
      this.context.store.dispatch(questionsActions.fetchQuestion(this.props.params.questionId));
    }
  }

  handleChange(field, e) {
    const question = Object.assign({}, this.state.question, {[field]: e.target.value});
    this.setState(Object.assign({}, this.state, {question}));
  }
  handleChangeCard(index, field, e) {
    const value = e.target.value;
    const cards = [...this.state.question.cards];
    cards[index] = {...cards[index], [field]: value};

    const question = Object.assign({}, this.state.question, {cards: cards});
    this.setState(Object.assign({}, this.state, {question}));
  }

  handleNewCard(e) {
    const cards = [...this.state.question.cards];
    cards.push({
      title: '',
      src: ''
    });
    e.preventDefault()
    const question = Object.assign({}, this.state.question, {cards: cards});
    this.setState(Object.assign({}, this.state, {question}));
  }
  handleDeleteCard(index, e) {
    const cards = [...this.state.question.cards].filter((item, idx) => idx !== index);
    e.preventDefault()
    const question = Object.assign({}, this.state.question, {cards: cards});
    this.setState(Object.assign({}, this.state, {question}));
  }

  handleSubmit() {
    if (this.state.questionId) {
      this.context.store.dispatch(questionsActions.updateQuestion(this.state.question));
    } else {
      this.context.store.dispatch(questionsActions.createQuestion(this.state.question));
    }
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit.bind(this)} noValidate>
        <div className="form-group">
          <label className="label-control">Title</label>
          <input
            type="text"
            className="form-control"
            value={this.state.question.title}
            onChange={this.handleChange.bind(this, 'title')} />
          <div className="cardsAdmin">{
            this.state.question.cards && this.state.question.cards.map((card, index) =>
                <div>
                  <input
                      type="text"
                      className="form-control"
                      placeholder={'title'}
                      value={card.title}
                      onChange={this.handleChangeCard.bind(this, index, 'title')}/>
                  <input
                      type="text"
                      className="form-control"
                      placeholder={'src'}
                      value={card.src}
                      onChange={this.handleChangeCard.bind(this, index, 'src')}/>
                  <img src={card.src} alt={card.title}/>
                  <button type="button" onClick={this.handleDeleteCard.bind(this, index)} className="btn btn-primary">
                    х
                  </button>
                </div>
            )}
            <button type="button" onClick={this.handleNewCard.bind(this)} className="btn btn-primary">
                +
            </button>
          </div>
        </div>
        <button type="submit" className="btn btn-default">
          {this.state.questionId ? 'Update' : 'Create' } Question
        </button>
      </form>
    );
  }
}
