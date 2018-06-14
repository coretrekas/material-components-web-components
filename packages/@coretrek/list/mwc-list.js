import {LitElement, html, classString as c$} from '@polymer/lit-element/lit-element.js';
import {style} from './mwc-list-css.js';
import '@material/mwc-icon/mwc-icon-font.js';
import './mwc-list-item.js';

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
    const items = this.querySelector('script[type="application/json"]');
    this.items = JSON.parse(items.innerHTML);
  }

  _render() {
    return html`
      ${this._renderStyle()}
      <div class="mdc-list mdc-list--two-line">${this._renderItems()}</div>
    `;
  }
  _renderItems() {
    const template = this.querySelector('template');
    return this.items.map((item) => (template && template.content) || this._renderItem(item));
  }
  _renderItem({link, text, secondary, selected, activated, icon, divided}) {
    return html`
    ${divided ? html`<div class="mdc-list-divider" role="separator"></div>`:''}
    <coretrek-mwc-list-item 
      link="${link}" 
      text="${text}" 
      secondary="${secondary}" 
      selected="${selected}" 
      activated="${activated}"
      icon="${icon}"
    />`;
  }

  _renderStyle() {
    return style;
  }
}

customElements.define('coretrek-mwc-list', CoretrekList);
