import React, { Component } from 'react';
import "./ZenQuote.css";
import withDate from './withDate';

class ZenQuote extends Component {
    render() {
        return (
            <div>
                {this.props.isloaded ? (<div><h1>Always rememmber ...</h1>
                    <p>{this.props.quote}</p></div>) : (<div className="loader"></div>)
                }
            </div>
        )
    }
}
export default withDate(ZenQuote);