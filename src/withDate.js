import React from 'react';
import axios from 'axios';

const withDate = WrappedComponent => {
    class NewComponent extends React.Component {
        constructor(props) {
            console.log("constuctor");
            super(props);
            this.state = {
                quote: "",
                isloaded: false
            };
        }
        componentDidMount() {
            console.log("didmount");
            axios.get("https://api.github.com/zen").then(
                (response) => {
                    setTimeout(() => {
                        this.setState({
                            quote: response.data,
                            isloaded: true
                        });
                    }, 2000);
                },
                (error) => {
                    this.setState({
                        quote: "",
                        isloaded: true
                    }, () => alert("Eroor in get data try to refresh page"));
                }
            );
        }
        componentDidUpdate() {
            console.log('inside component did update');
        }
        render() {
            return <WrappedComponent isloaded={this.state.isloaded} quote={this.state.quote} />
        }
    }
    return NewComponent

}
export default withDate