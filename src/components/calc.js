import React from "react";
import {Button, ControlLabel, FormGroup, FormControl, ProgressBar, Thumbnail} from 'react-bootstrap';

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
                    { now !== questions.length && 'Далее' || 'Завершить'}
                </Button>
            </div>
        </div>
    );
};

const questionss = [];
const questions = [
    {
        title: 'Когда Вы планируете провести свадьбу?',
        cards: [
            {
                title: 'Зима',
                src: '../assets/img/step-1-1.jpg'
            },
            {
                title: 'Весна',
                src: '../assets/img/step-1-2.jpg'
            },
            {
                title: 'Лето',
                src: '../assets/img/step-1-3.jpg'
            },
            {
                title: 'Осень',
                src: '../assets/img/step-1-4.jpg'
            }
        ]
    },
    {
        title: 'Где Вы хотите провести свадьбу?',
        cards: [
            {
                title: 'Гомель',
                src: '../assets/img/step-2-1.jpg'
            },
            {
                title: 'Гомельская область',
                src: '../assets/img/step-2-2.jpg'
            },
            {
                title: 'За границей',
                src: '../assets/img/step-2-3.jpg'
            },
            {
                title: 'Не определились',
                src: '../assets/img/step-no.jpg'
            }
        ]
    },
    {
        title: 'Куда пригласим гостей?',
        cards: [
            {
                title: 'Ресторан',
                src: '../assets/img/step-3-1.jpg'
            },
            {
                title: 'Шатер',
                src: '../assets/img/step-3-2.jpg'
            },
            {
                title: 'Веренда',
                src: '../assets/img/step-3-3.jpg'
            },
            {
                title: 'Лофит',
                src: '../assets/img/step-3-4.jpg'
            },
            {
                title: 'Не определились',
                src: '../assets/img/step-no.jpg'
            }
        ]
    },
    {
        title: 'В Какой бюджет планируете уложиться?',
        cards: [
            {
                title: 'до 5 тыс $',
                src: '../assets/img/step-4-1.jpg'
            },
            {
                title: 'до 10 тыс $',
                src: '../assets/img/step-4-2.jpeg'
            },
            {
                title: 'до 15 тыс $',
                src: '../assets/img/step-4-3.jpg'
            },
            {
                title: 'до 25 тыс $',
                src: '../assets/img/step-4-4.jpg'
            },
            {
                title: 'до 35 тыс $',
                src: '../assets/img/step-4-5.jpg'
            }
        ]
    },
    {
        title: 'Сколько гостей разделят с Вами день свадьбы?',
        cards: [
            {
                title: 'до 40 гостей',
                src: '../assets/img/step-5-1.webp'
            },
            {
                title: 'от 40 до 70 гостей',
                src: '../assets/img/step-5-2.webp'
            },
            {
                title: 'от 70 до 100 гостей',
                src: '../assets/img/step-5-3.jpg'
            },
            {
                title: 'Более 100 гостей',
                src: '../assets/img/step-5-4.webp'
            }
        ]
    },
    {
        title: 'Какая регистрация?',
        cards: [
            {
                title: 'Выездная',
                src: '../assets/img/step-6-1.jpg'
            },
            {
                title: 'ЗАГС',
                src: '../assets/img/step-6-2.jpg'
            },
            {
                title: 'Площадки Гомеля',
                src: '../assets/img/step-6-3.jpg'
            }
        ]
    }
];


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
