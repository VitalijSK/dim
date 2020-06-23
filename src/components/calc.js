import React from "react";
import {Button, ControlLabel, FormGroup, FormControl, ProgressBar, Thumbnail} from 'react-bootstrap';
import {questionsActions, questionsSelectors} from "../store/questions";
import {connect} from "react-redux";
import {calcRegActions} from "../store/calc-reg";

const CalcStart = ({handleNext}) => {
    return (
        <div className="start-calc">
            <img src="../assets/img/fon-calc.jpg"/>
            <div className="start-page__body">
                <div className="start-page__line"></div>
                <h1 className="start-page__header">Узнайте стоимость вашей свадьбы</h1><h2
                className="start-page__subheader">Ответьте на несколько простых вопросов</h2>
                <Button onClick={handleNext} className="start-page__button button is-primary is-blicked has-light-shadow">
                    Начать
                </Button>
            </div>
        </div>
    );
};

const FinishResult = ({sendAuth}) => {
    return (
        <form onSubmit={sendAuth}>
            <FormGroup controlId="formBasicEmail">
                <ControlLabel>E-mail</ControlLabel>
                <FormControl type="email" placeholder="Введите e-mail" required />
            </FormGroup>

            <FormGroup controlId="formBasicPassword">
                <ControlLabel>Пароль</ControlLabel>
                <FormControl type="password" placeholder="Пароль"required />
            </FormGroup>
            <Button variant="primary" type="submit">
                Зарегистироваться
            </Button>
        </form>
    );
};

const CalcStep = ({title, cards, now, all, checkValue, handleBack, handleNext}) => {
    return (
        <div className="start-step">
            <ProgressBar now={Math.ceil(now/all * 100)} label={`${now} из ${all}`} />
            <h2>{title}</h2>
            <div className="cards">
                {cards.map((item, key) => (
                    <Thumbnail key={`${now}:${key}`} data-step={now} data-id={key} src={item.src} onClick={() => {
                        checkValue(now, key)
                    }} alt="242x200">
                        <p>{item.title}</p>
                    </Thumbnail>
                ))}
            </div>
            <div className="btn-control">
                {
                    now !== 1 && <Button onClick={handleBack}
                            className="start-page__button button is-primary is-blicked has-light-shadow">
                        Назад
                    </Button>
                }
                <Button onClick={handleNext} className="start-page__button button is-primary is-blicked has-light-shadow">
                    { now !== all && 'Далее' || 'Завершить'}
                </Button>
            </div>
        </div>
    );
};

@connect(
    (state) => {
        return {
            questions: questionsSelectors.getQuestions(state),
        }
    },
    { fetchQuestions: questionsActions.fetchQuestions },
)

class WrapperCalc extends React.Component {
    constructor (props) {
        super(props);

        this.state = {
            current: -1,
            values: []
        }
    }

    handleBack = () => {
        this.setState({current: this.state.current - 1});
    }
    handleNext = () => {
        this.setState({current: this.state.current + 1});
    }
    componentDidMount() {
        this.props.fetchQuestions();
    }
    sendAuth = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.formBasicEmail.value;
        const password = form.formBasicPassword.value;
        this.props.sendValue(email, password, this.state.values);
    }
    checkValue = (now, key) => {
        document.querySelectorAll(`.thumbnail[data-step="${now}"]`).forEach(item => {
            item.classList.remove('active');
        });
        const values = this.state.values
        values[now - 1] = key;
        this.setState({
            values: values
        });

        document.querySelector(`.thumbnail[data-step="${now}"].thumbnail[data-id="${key}"]`).classList.add('active')
    }

    render () {
        const {
            questions,
        } = this.props;

        if (this.state.current === -1) {
            return <CalcStart
                    handleNext={this.handleNext}
                />
        }
        if (this.state.current === questions.length) {
            return <FinishResult
                sendAuth={this.sendAuth}
            />
        }
        const card = questions[this.state.current];

        return <CalcStep
            title={card.title}
            now={this.state.current + 1}
            all={questions.length}
            handleBack={this.handleBack}
            handleNext={this.handleNext}
            checkValue={this.checkValue}
            cards={card.cards}
        />
    }
}

export default WrapperCalc;
