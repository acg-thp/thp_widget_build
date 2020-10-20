import { h, render } from '../web_modules/preact.js';
import '../web_modules/preact/devtools.js';
import App from './App.js';
import './index.css.proxy.js';
const root = document.getElementById('root');

if (root) {
  render(h(App, null), root);
}