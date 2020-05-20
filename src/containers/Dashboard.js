import React from 'react';
import HappyCouple from "../components/happy-couple.js";
import Event from "../components/event.js";
import Gallery from "../components/gallery.js";
import WeddingCalc from "../components/wedding-calc.js";
import Thankyou from "../components/thankyou.js";
import {calcRegActions} from "../store/calc-reg";
import {connect} from "react-redux";
import {postsSelectors} from "../store/posts";

@connect(
    (state) => {
        return {
            params: postsSelectors.getParams(state),
            posts: postsSelectors.getPosts(state),
        };
    },
    { regUser: calcRegActions.regUser },
)

export class Dashboard extends React.Component {
    constructor(props, context) {
        super(props, context);
    }

     sendFinished = (event) => {
         console.log('event', event)
         this.props.regUser(event);
     }


  render() {
    return (
        <div>
            <HappyCouple />
            <div className="container">
                <Event />
            </div>
            <WeddingCalc sendFinished={this.sendFinished} />
            <div className="container">
            <Gallery />
            </div>
            <Thankyou />
        </div>
    );
  }
}
