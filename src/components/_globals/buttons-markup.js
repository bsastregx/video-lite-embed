import { html } from "lit";
import "../button/gwds-button";
import { classMap } from "lit/directives/class-map.js";

export default function buttonsMarkup(ButtonsProperties, noMarginTop = false) {
  return html`
    ${(ButtonsProperties.firstButtonLabel &&
      ButtonsProperties.firstButtonUrl) ||
    (ButtonsProperties.secondButtonLabel &&
      ButtonsProperties.secondButtonUrl) ||
    (ButtonsProperties.thirdButtonLabel && ButtonsProperties.thirdButtonUrl)
      ? html` <div
          class="${classMap({
            "gwds-buttons-container": true,
            "mt-0": noMarginTop
          })}"
        >
          ${ButtonsProperties.firstButtonLabel &&
          ButtonsProperties.firstButtonUrl
            ? html`
                <gwds-button
                  label=${ButtonsProperties.firstButtonLabel}
                  type=${ButtonsProperties.firstButtonType}
                  url=${ButtonsProperties.firstButtonUrl}
                  target=${ButtonsProperties.firstButtonTarget}
                ></gwds-button>
              `
            : null}
          ${ButtonsProperties.secondButtonLabel &&
          ButtonsProperties.secondButtonUrl
            ? html`
                <gwds-button
                  label=${ButtonsProperties.secondButtonLabel}
                  type=${ButtonsProperties.secondButtonType}
                  url=${ButtonsProperties.secondButtonUrl}
                  target=${ButtonsProperties.secondButtonTarget}
                ></gwds-button>
              `
            : null}
          ${ButtonsProperties.thirdButtonLabel &&
          ButtonsProperties.thirdButtonUrl
            ? html`
                <gwds-button
                  label=${ButtonsProperties.thirdButtonLabel}
                  type=${ButtonsProperties.thirdButtonType}
                  url=${ButtonsProperties.thirdButtonUrl}
                  target=${ButtonsProperties.thirdButtonTarget}
                ></gwds-button>
              `
            : null}
        </div>`
      : null}
  `;
}
