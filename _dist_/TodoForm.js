import { Component, h, render } from '../web_modules/preact.js';
export default class TodoForm extends Component {
  state = {
    value: ''
  };
  onSubmit = e => {
    alert("Submitted a todo");
    e.preventDefault();
  };
  onInput = async event => {
    fetch("https://creator.zoho.com/api/v2/bebriggs/texas-home-pros/report/stateless_report_bug_form/3900755000004706003", {
      method: "GET",
      mode: "no-cors",
      headers: new Headers({
        "Authorization": "Zoho-oauthtoken 1000.PAXUDA7YNC9F752839LZ31Q0NAEXNH.145c3de280212d187d3e81ea3dd7caf6f7a6e4268c"
      })
    }).then(res => res.json()).then(result => {
      this.setState({
        isLoaded: true,
        items: result.items
      });
    }, // Note: it's important to handle errors here
    // instead of a catch() block so that we don't swallow
    // exceptions from actual bugs in components.
    error => {
      this.setState({
        isLoaded: true,
        error
      });
    });
    const {
      value
    } = event.target;
    this.setState({
      value
    });
  };

  render(_, {
    value
  }) {
    return h("form", {
      onSubmit: this.onSubmit
    }, h("label", {
      for: "safety_pin"
    }, "Safety Pin"), h("input", {
      type: "password",
      id: "safety_pin",
      name: "safety_pin",
      required: true,
      value: value,
      onInput: this.onInput
    }), h("p", null, "You typed this value: ", value), h("button", {
      type: "submit"
    }, "Submit"));
  }

}