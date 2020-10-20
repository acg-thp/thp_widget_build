import { Component, h, render } from '../web_modules/preact.js';

// @ts-ignore
async function common_string_zoho_creator_initialize(common) {}

async function common_zoho_creator_initialize(common) {}

async function zoho_creator_initialize() {
  return new Promise((resolve, reject) => {
    resolve(ZOHO.CREATOR.init());
  });
}

export default class THP_verify_user_pin_form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: []
    };
  }

  async componentDidMount() {
    await zoho_creator_initialize();
  }

  async on_submit() {}

  async on_input() {
    return await new Promise(async (resolve, reject) => {
      let query_parameters = ZOHO.CREATOR.UTIL.getQueryParams();
      console.log(query_parameters);
      console.log("on_input");
      resolve();
    });
  }

  render(_, {
    value
  }) {
    return h("form", {
      onSubmit: this.on_submit
    }, h("label", {
      for: "safety_pin"
    }, "Safety Pin"), h("input", {
      type: "password",
      id: "safety_pin",
      name: "safety_pin",
      required: true,
      value: value,
      onInput: this.on_input
    }), h("button", {
      type: "submit"
    }, "Submit"));
  }

}