//@ts-nocheck
import {LitElement, html, css} from 'lit';
import {customElement, property, state} from 'lit/decorators.js';
import {classMap} from 'lit/directives/class-map.js';
import textContrast from '../../utils/text-contrast';
import globalStyles from '../_globals/global-styles';
import LiteYTEmbed from './lite-yt-embed';

@customElement('gwds-video-lite')
export class GwdsVideoLite extends LitElement {
  static override styles = [
    globalStyles,
    css`
      :host(.gwds-template) {
        display: block;
      }
      /* RESPONSIVE */
      /*sm*/
      @media (min-width: 576px) {
      }
      /*md*/
      @media (min-width: 768px) {
      }
      /*lg*/
      @media (min-width: 992px) {
      }
      /*xl*/
      @media (min-width: 1200px) {
      }
      /*xxl*/
      @media (min-width: 1400px) {
      }
      lite-youtube {
        background-color: #000;
        position: relative;
        display: block;
        contain: content;
        background-position: center center;
        background-size: cover;
        cursor: pointer;
        max-width: 720px;
      }

      /* gradient */
      lite-youtube::before {
        content: '';
        display: block;
        position: absolute;
        top: 0;
        background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAADGCAYAAAAT+OqFAAAAdklEQVQoz42QQQ7AIAgEF/T/D+kbq/RWAlnQyyazA4aoAB4FsBSA/bFjuF1EOL7VbrIrBuusmrt4ZZORfb6ehbWdnRHEIiITaEUKa5EJqUakRSaEYBJSCY2dEstQY7AuxahwXFrvZmWl2rh4JZ07z9dLtesfNj5q0FU3A5ObbwAAAABJRU5ErkJggg==);
        background-position: top;
        background-repeat: repeat-x;
        height: 60px;
        padding-bottom: 50px;
        width: 100%;
        transition: all 0.2s cubic-bezier(0, 0, 0.2, 1);
      }

      /* responsive iframe with a 16:9 aspect ratio
    thanks https://css-tricks.com/responsive-iframes/
*/
      lite-youtube::after {
        content: '';
        display: block;
        padding-bottom: calc(100% / (16 / 9));
      }
      lite-youtube > iframe {
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        border: 0;
      }

      /* play button */
      lite-youtube > .lty-playbtn {
        width: 68px;
        height: 48px;
        position: absolute;
        cursor: pointer;
        transform: translate3d(-50%, -50%, 0);
        top: 50%;
        left: 50%;
        z-index: 1;
        background-color: transparent;
        /* YT's actual play button svg */
        background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 68 48"><path fill="%23f00" fill-opacity="0.8" d="M66.52,7.74c-0.78-2.93-2.49-5.41-5.42-6.19C55.79,.13,34,0,34,0S12.21,.13,6.9,1.55 C3.97,2.33,2.27,4.81,1.48,7.74C0.06,13.05,0,24,0,24s0.06,10.95,1.48,16.26c0.78,2.93,2.49,5.41,5.42,6.19 C12.21,47.87,34,48,34,48s21.79-0.13,27.1-1.55c2.93-0.78,4.64-3.26,5.42-6.19C67.94,34.95,68,24,68,24S67.94,13.05,66.52,7.74z"></path><path d="M 45,24 27,14 27,34" fill="%23fff"></path></svg>');
        filter: grayscale(100%);
        transition: filter 0.1s cubic-bezier(0, 0, 0.2, 1);
        border: none;
      }

      lite-youtube:hover > .lty-playbtn,
      lite-youtube .lty-playbtn:focus {
        filter: none;
      }

      /* Post-click styles */
      lite-youtube.lyt-activated {
        cursor: unset;
      }
      lite-youtube.lyt-activated::before,
      lite-youtube.lyt-activated > .lty-playbtn {
        opacity: 0;
        pointer-events: none;
      }

      .lyt-visually-hidden {
        clip: rect(0 0 0 0);
        clip-path: inset(50%);
        height: 1px;
        overflow: hidden;
        position: absolute;
        white-space: nowrap;
        width: 1px;
      }
    `,
  ];

  @property({type: String}) bgColor = 'white';
  @property({type: Boolean}) pt0 = false; //padding-top:0
  @property({type: Boolean}) pb0 = false; //padding-bottom:0

  @state() textColor = 'black';

  override connectedCallback() {
    super.connectedCallback();

    this.classList.add('gwds-template');

    /*define text color based on contrast with the background*/
    if (this.bgColor !== 'white') {
      this.textColor = textContrast(this.bgColor);
    }

    this.style.backgroundColor = `var(--gwds__color--${this.bgColor})`;
    this.style.color = `var(--gwds__color--${this.textColor})`;
  }

  override render() {
    const content = html`<lite-youtube videoid="ogfYd705cRs"></lite-youtube>`;
    return content;
  }
}
// Register custom element
customElements.define('lite-youtube', LiteYTEmbed);
