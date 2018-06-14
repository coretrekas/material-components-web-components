import {ComponentElement, html} from '@material/mwc-base/component-element.js';
import {classString as c$} from '@polymer/lit-element/lit-element.js';
import {MDCWebComponentMixin} from '@material/mwc-base/mdc-web-component.js';
import {MDCTemporaryDrawer} from '@material/drawer';
import {style} from './mwc-drawer-css.js';
import {afterNextRender} from '@material/mwc-base/utils.js';

class MDCWCDrawer extends MDCWebComponentMixin(MDCTemporaryDrawer) {}

export class CoretrekDrawer extends ComponentElement {
  static get ComponentClass() {
    return MDCWCDrawer;
  }

  static get componentSelector() {
    return '.mdc-drawer';
  }

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
    <div class="mdc-drawer mdc-drawer--temporary">
        <nav class="mdc-drawer__drawer">
            <header class="mdc-drawer__header">
              <div class="mdc-drawer__header-content">
                <slot name="header">${this.header}</slot>
              </div>
            </header>
            <div id="content" class="mdc-drawer__content">
                <slot></slot>
            </div>
        </nav>
    </div>`;
  }
  _renderStyle() {
    return style;
  }
}


customElements.define('coretrek-mwc-drawer', CoretrekDrawer);
