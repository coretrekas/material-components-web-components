import {LitElement, html, classString as c$} from '@polymer/lit-element/lit-element.js';
import {style} from './mwc-list-css.js';

export class CoretrekList extends LitElement {
  static get properties() {
    return {
      header: String,
    };
  }

  constructor() {
    super();
    this._asyncComponent = true;
    // properties
    this.header = '';
  }

  set open(open) {
    this.componentReady().then((c) => (c.open = open));
  }

  _render() {
    return html`
    ${this._renderStyle()}
    <div class="mdc-list">
        ${this._renderDemo()}
    </div>`;
  }
  _renderStyle() {
    return style;
  }

  _renderDemo() {
    return html`
    <li class="mdc-list-item">
    <span class="mdc-list-item__text">
      First-line text
      <span class="mdc-list-item__secondary-text">
        Second-line text
      </span>
    </span>
  </li>
  <li class="mdc-list-item">
    <span class="mdc-list-item__text">
      First-line text
      <span class="mdc-list-item__secondary-text">
        Second-line text
      </span>
    </span>
  </li>
  <a class="mdc-list-item " href="#">
    <span class="mdc-list-item__text">
      First-line text
      <span class="mdc-list-item__secondary-text">
        Second-line text
      </span>
    </span>
  </a>`;
  }
}

customElements.define('coretrek-mwc-list', CoretrekList);
