import {LitElement, html, classString as c$} from '@polymer/lit-element/lit-element.js';
import {afterNextRender} from '@material/mwc-base/utils.js';
import {MDCWCRipple} from '@material/mwc-ripple/mwc-ripple.js';


const mdcClass = {
  item: 'mdc-list-item',
  selected: 'mdc-list-item--selected',
  activated: 'mdc-list-item--activated',
  text: 'mdc-list-item__text',
  secondary: 'mdc-list-item__secondary-text',
  icon: 'material-icons material-icons mdc-list-item__graphic'
};

export default class CoretreListItemLink extends LitElement {
  static get properties() {
    return {
      text: String,
      secondary: String,
      link: String,
      icon: String,
      selected: Boolean,
      activated: Boolean,
    };
  }

  constructor() {
    super();
    this.text = '';
    this.secondary = undefined;
    this.link = undefined;
    this.selected = false;
    this.activated = false;
  }

  _createRoot() {
    return this;
  }

  async ready() {
    super.ready();
    await afterNextRender();
    this._ripple = new MDCWCRipple(this._root.querySelector('.' + mdcClass.item));
  }

  _render({selected,activated,link, ...item}) {
    const hostClasses = c$({
      [mdcClass.item]: true,
      [mdcClass.selected]: selected,
      [mdcClass.activated]: activated,
    });
    return link
      ? html`<a href="${link}" class$="${hostClasses}">${this._renderContent(item)}</a>`
      : html`<div class$="${hostClasses}">${this._renderContent(item)}</div>`;
  }

  _renderContent({text, secondary, icon}) {
    return html`
    ${icon ? html`<i class$="${mdcClass.icon}" aria-hidden="true">${icon}</i>`:''}
    <span class$="${mdcClass.text}">${text}
      ${secondary ? html`<span class$="${mdcClass.secondary}">${secondary}</span>` : ''}
    </span>`;
  }
}

customElements.define('coretrek-mwc-list-item', CoretreListItemLink);
