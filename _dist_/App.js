import { h, render } from '../web_modules/preact.js';
import { useState, useEffect } from '../web_modules/preact/hooks.js'; //import logo from './logo.jpg';

import './App.css.proxy.js';
import THP_zoho_form_to_widget_form from './THP_zoho_form_to_widget_form.js';

function App() {
  // Create the count state.
  const [count, setCount] = useState(0); // Create the counter (+1 every second).

  useEffect(() => {
    const timer = setTimeout(() => setCount(count + 1), 1000);
    return () => clearTimeout(timer);
  }, [count, setCount]); // Return the App component.

  return h("div", {
    className: "App"
  }, h("header", {
    className: "App-header"
  }, h("img", {
    src: "https://creator.zohopublic.com/file/bebriggs/texas-home-pros/All_Public_Information/3900755000004704003/logo_image/image-download/QAQA9YW2tYRgs9ZMOhV2YMnWUsUkWCtEkRBwtnauzQnJxnUw5H2vSWWvf1WqxTjG0EJvBq0OJUnf8fPJAHkbPxbrbgj3C0dV7f53?filepath=/1603001570933_710",
    className: "App-logo",
    alt: "logo"
  })), h(THP_zoho_form_to_widget_form, null));
}

export default App;