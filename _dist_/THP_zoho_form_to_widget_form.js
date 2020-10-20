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

  async parse_record_link_name_into_forms(record_link_name) {
    return new Promise((resolve, reject) => {
      ZOHO.CREATOR.API.getAllRecords({
        reportName: record_link_name,
        criteria: null,
        page: 1,
        pageSize: 1
      }).then(function (response) {
        console.log(response);
        resolve(response);
      });
    });
  }

  componentDidMount() {
    async function component_did_mount() {
      await zoho_creator_initialize();
    }

    return component_did_mount();
  }

  on_submit() {}

  on_input = e => {
    const value = e.target;
    this.parse_record_link_name_into_forms(value).then(response => {
      console.log("Response " + response);
    });
  };

  render(_, {
    value
  }) {
    return h("form", {
      onSubmit: this.on_submit
    }, h("label", {
      for: "parse_form_link_name"
    }, "Parse Form Link Name"), h("input", {
      type: "text",
      id: "parse_form_link_name",
      name: "parse_form_link_name",
      required: true,
      value: value,
      onInput: this.on_input
    }), h("button", {
      type: "submit"
    }, "Parse"));
  }

}