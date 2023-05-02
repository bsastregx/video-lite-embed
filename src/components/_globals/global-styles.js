import {css} from 'lit';
export default css`
  /*!
 * Bootstrap Reboot v5.0.2 (https://getbootstrap.com/)
 * Copyright 2011-2021 The Bootstrap Authors
 * Copyright 2011-2021 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * Forked from Normalize.css, licensed MIT (https://github.com/necolas/normalize.css/blob/master/LICENSE.md)
 */
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  @media (prefers-reduced-motion: no-preference) {
    :root {
      scroll-behavior: smooth;
    }
  }
  hr {
    margin: 1rem 0;
    color: inherit;
    background-color: currentColor;
    border: 0;
    opacity: 0.25;
  }

  hr:not([size]) {
    height: 1px;
  }

  abbr[title],
  abbr[data-bs-original-title] {
    -webkit-text-decoration: underline dotted;
    text-decoration: underline dotted;
    cursor: help;
    -webkit-text-decoration-skip-ink: none;
    text-decoration-skip-ink: none;
  }

  address {
    margin-bottom: var(--gwds__space--s);
    font-style: normal;
    line-height: inherit;
  }

  blockquote {
    margin: 0 0 var(--gwds__space--s);
  }

  b,
  strong {
    font-weight: bolder;
  }

  small {
    font-size: calc(var(--gwds__space--s) * 0.75);
  }

  mark {
    padding: var(--gwds__space--xxs);
    background-color: var(--gwds__color--white);
  }

  sub,
  sup {
    position: relative;
    font-size: calc(var(--gwds__space--s) * 0.75);
    line-height: 0;
    vertical-align: baseline;
  }

  sub {
    bottom: calc(var(--gwds__space--xxs) * -1);
  }

  sup {
    top: calc(var(--gwds__space--xs) * -1);
  }

  pre,
  code,
  kbd,
  samp {
    font-family: SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono',
      'Courier New', monospace;
    font-size: var(--gwds__font-size--m);
    direction: ltr;
    unicode-bidi: bidi-override;
  }

  pre {
    display: block;
    margin-top: 0;
    margin-bottom: var(--gwds__space--s);
    overflow: auto;
    font-size: calc(var(--gwds__font-size--m) * 0.875);
  }

  pre code {
    font-size: inherit;
    color: inherit;
    word-break: normal;
  }

  code {
    font-size: calc(var(--gwds__font-size--m) * 0.875);
    color: var(--gwds__color--fuchsia-700);
    word-wrap: break-word;
  }

  a > code {
    color: inherit;
  }

  kbd {
    padding: var(--gwds__space--xxs) var(--gwds__space--xs);
    font-size: calc(var(--gwds__font-size--m) * 0.875);
    color: var(--gwds__color--white);
    background-color: var(--gwds__color--black);
    border-radius: var(--gwds__radius--xxs);
  }

  kbd kbd {
    padding: 0;
    font-size: var(--gwds__font-size--m);
    font-weight: var(--gwds__font-weight--bold);
  }

  figure {
    margin: 0 0 var(--gwds__space--s);
  }

  img,
  svg {
    vertical-align: middle;
  }

  table {
    caption-side: bottom;
    border-collapse: collapse;
  }

  caption {
    padding-top: var(--gwds__space--xs);
    padding-bottom: var(--gwds__space--xs);
    color: var(--gwds__color--dark-700);
    text-align: left;
  }

  th {
    text-align: inherit;
    text-align: -webkit-match-parent;
  }

  thead,
  tbody,
  tfoot,
  tr,
  td,
  th {
    border-color: inherit;
    border-style: solid;
    border-width: 0;
  }

  label {
    display: inline-block;
  }

  button {
    border-radius: 0;
  }

  button:focus:not(:focus-visible) {
    outline: 0;
  }

  input,
  button,
  select,
  optgroup,
  textarea {
    margin: 0;
    font-family: inherit;
    font-size: inherit;
    line-height: inherit;
  }

  button,
  select {
    text-transform: none;
  }

  [role='button'] {
    cursor: pointer;
  }

  select {
    word-wrap: normal;
  }

  select:disabled {
    opacity: 1;
  }

  [list]::-webkit-calendar-picker-indicator {
    display: none;
  }

  button,
  [type='button'],
  [type='reset'],
  [type='submit'] {
    -webkit-appearance: button;
  }

  button:not(:disabled),
  [type='button']:not(:disabled),
  [type='reset']:not(:disabled),
  [type='submit']:not(:disabled) {
    cursor: pointer;
  }

  ::-moz-focus-inner {
    padding: 0;
    border-style: none;
  }

  textarea {
    resize: vertical;
  }

  fieldset {
    min-width: 0;
    padding: 0;
    margin: 0;
    border: 0;
  }

  legend {
    float: left;
    width: 100%;
    padding: 0;
    margin-bottom: var(--gwds__space--xs);
    font-size: calc(var(--gwds__font-size--l) * 0.85);
    line-height: inherit;
  }

  @media (min-width: 1200px) {
    legend {
      font-size: var(--gwds__font-size--l);
    }
  }
  legend + * {
    clear: left;
  }

  ::-webkit-datetime-edit-fields-wrapper,
  ::-webkit-datetime-edit-text,
  ::-webkit-datetime-edit-minute,
  ::-webkit-datetime-edit-hour-field,
  ::-webkit-datetime-edit-day-field,
  ::-webkit-datetime-edit-month-field,
  ::-webkit-datetime-edit-year-field {
    padding: 0;
  }

  ::-webkit-inner-spin-button {
    height: auto;
  }

  [type='search'] {
    outline-offset: -2px;
    -webkit-appearance: textfield;
  }

  /* rtl:raw:
 [type="tel"],
 [type="url"],
 [type="email"],
 [type="number"] {
   direction: ltr;
 }
 */
  ::-webkit-search-decoration {
    -webkit-appearance: none;
  }

  ::-webkit-color-swatch-wrapper {
    padding: 0;
  }

  ::file-selector-button {
    font: inherit;
  }

  ::-webkit-file-upload-button {
    font: inherit;
    -webkit-appearance: button;
  }

  output {
    display: inline-block;
  }

  iframe {
    border: 0;
  }

  summary {
    display: list-item;
    cursor: pointer;
  }

  progress {
    vertical-align: baseline;
  }

  [hidden] {
    display: none !important;
  }

  /*# sourceMappingURL=bootstrap-reboot.css.map */
  /*!
 * Bootstrap Grid v5.0.2 (https://getbootstrap.com/)
 * Copyright 2011-2021 The Bootstrap Authors
 * Copyright 2011-2021 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 */
  .container,
  .container-fluid,
  .container-xxl,
  .container-xl,
  .container-lg,
  .container-md,
  .container-sm {
    width: 100%;
    padding-right: var(--bs-gutter-x, 0.75rem);
    padding-left: var(--bs-gutter-x, 0.75rem);
    margin-right: auto;
    margin-left: auto;
  }

  @media (min-width: 576px) {
    .container-sm,
    .container {
      max-width: 540px;
    }
  }
  @media (min-width: 768px) {
    .container-md,
    .container-sm,
    .container {
      max-width: 720px;
    }
  }
  @media (min-width: 992px) {
    .container-lg,
    .container-md,
    .container-sm,
    .container {
      max-width: 960px;
    }
  }
  @media (min-width: 1200px) {
    .container-xl,
    .container-lg,
    .container-md,
    .container-sm,
    .container {
      max-width: 1140px;
    }
  }
  @media (min-width: 1400px) {
    .container-xxl,
    .container-xl,
    .container-lg,
    .container-md,
    .container-sm,
    .container {
      max-width: 1320px;
    }
  }
  .row {
    --bs-gutter-x: 1.5rem;
    --bs-gutter-y: 0;
    display: flex;
    flex-wrap: wrap;
    margin-top: calc(var(--bs-gutter-y) * -1);
    margin-right: calc(var(--bs-gutter-x) * -0.5);
    margin-left: calc(var(--bs-gutter-x) * -0.5);
  }

  .row > * {
    box-sizing: border-box;
    flex-shrink: 0;
    width: 100%;
    max-width: 100%;
    padding-right: calc(var(--bs-gutter-x) * 0.5);
    padding-left: calc(var(--bs-gutter-x) * 0.5);
    margin-top: var(--bs-gutter-y);
  }

  .g-0,
  .gy-0 {
    --bs-gutter-y: 0;
  }

  .g-0,
  .gx-0 {
    --bs-gutter-x: 0;
  }

  .col {
    flex: 1 0 0%;
  }

  @media (min-width: 576px) {
    .col-sm {
      flex: 1 0 0%;
    }
  }
  @media (min-width: 768px) {
    .col-md {
      flex: 1 0 0%;
    }
  }
  @media (min-width: 992px) {
    .col-lg {
      flex: 1 0 0%;
    }
  }
  @media (min-width: 1200px) {
    .col-xl {
      flex: 1 0 0%;
    }
  }
  @media (min-width: 1400px) {
    .col-xxl {
      flex: 1 0 0%;
    }
  }
  .col-auto {
    flex: 0 0 auto;
    width: auto;
  }

  .col-1 {
    flex: 0 0 auto;
    width: 8.33333333%;
  }

  .col-2 {
    flex: 0 0 auto;
    width: 16.66666667%;
  }

  .col-3 {
    flex: 0 0 auto;
    width: 25%;
  }

  .col-4 {
    flex: 0 0 auto;
    width: 33.33333333%;
  }

  .col-5 {
    flex: 0 0 auto;
    width: 41.66666667%;
  }

  .col-6 {
    flex: 0 0 auto;
    width: 50%;
  }

  .col-7 {
    flex: 0 0 auto;
    width: 58.33333333%;
  }

  .col-8 {
    flex: 0 0 auto;
    width: 66.66666667%;
  }

  .col-9 {
    flex: 0 0 auto;
    width: 75%;
  }

  .col-10 {
    flex: 0 0 auto;
    width: 83.33333333%;
  }

  .col-11 {
    flex: 0 0 auto;
    width: 91.66666667%;
  }

  .col-12 {
    flex: 0 0 auto;
    width: 100%;
  }

  .offset-1 {
    margin-left: 8.33333333%;
  }

  .offset-2 {
    margin-left: 16.66666667%;
  }

  .offset-3 {
    margin-left: 25%;
  }

  .offset-4 {
    margin-left: 33.33333333%;
  }

  .offset-5 {
    margin-left: 41.66666667%;
  }

  .offset-6 {
    margin-left: 50%;
  }

  .offset-7 {
    margin-left: 58.33333333%;
  }

  .offset-8 {
    margin-left: 66.66666667%;
  }

  .offset-9 {
    margin-left: 75%;
  }

  .offset-10 {
    margin-left: 83.33333333%;
  }

  .offset-11 {
    margin-left: 91.66666667%;
  }

  @media (min-width: 576px) {
    .col-sm-auto {
      flex: 0 0 auto;
      width: auto;
    }
    .col-sm-1 {
      flex: 0 0 auto;
      width: 8.33333333%;
    }
    .col-sm-2 {
      flex: 0 0 auto;
      width: 16.66666667%;
    }
    .col-sm-3 {
      flex: 0 0 auto;
      width: 25%;
    }
    .col-sm-4 {
      flex: 0 0 auto;
      width: 33.33333333%;
    }
    .col-sm-5 {
      flex: 0 0 auto;
      width: 41.66666667%;
    }
    .col-sm-6 {
      flex: 0 0 auto;
      width: 50%;
    }
    .col-sm-7 {
      flex: 0 0 auto;
      width: 58.33333333%;
    }
    .col-sm-8 {
      flex: 0 0 auto;
      width: 66.66666667%;
    }
    .col-sm-9 {
      flex: 0 0 auto;
      width: 75%;
    }
    .col-sm-10 {
      flex: 0 0 auto;
      width: 83.33333333%;
    }
    .col-sm-11 {
      flex: 0 0 auto;
      width: 91.66666667%;
    }
    .col-sm-12 {
      flex: 0 0 auto;
      width: 100%;
    }
    .offset-sm-0 {
      margin-left: 0;
    }
    .offset-sm-1 {
      margin-left: 8.33333333%;
    }
    .offset-sm-2 {
      margin-left: 16.66666667%;
    }
    .offset-sm-3 {
      margin-left: 25%;
    }
    .offset-sm-4 {
      margin-left: 33.33333333%;
    }
    .offset-sm-5 {
      margin-left: 41.66666667%;
    }
    .offset-sm-6 {
      margin-left: 50%;
    }
    .offset-sm-7 {
      margin-left: 58.33333333%;
    }
    .offset-sm-8 {
      margin-left: 66.66666667%;
    }
    .offset-sm-9 {
      margin-left: 75%;
    }
    .offset-sm-10 {
      margin-left: 83.33333333%;
    }
    .offset-sm-11 {
      margin-left: 91.66666667%;
    }
  }
  @media (min-width: 768px) {
    .col-md-auto {
      flex: 0 0 auto;
      width: auto;
    }
    .col-md-1 {
      flex: 0 0 auto;
      width: 8.33333333%;
    }
    .col-md-2 {
      flex: 0 0 auto;
      width: 16.66666667%;
    }
    .col-md-3 {
      flex: 0 0 auto;
      width: 25%;
    }
    .col-md-4 {
      flex: 0 0 auto;
      width: 33.33333333%;
    }
    .col-md-5 {
      flex: 0 0 auto;
      width: 41.66666667%;
    }
    .col-md-6 {
      flex: 0 0 auto;
      width: 50%;
    }
    .col-md-7 {
      flex: 0 0 auto;
      width: 58.33333333%;
    }
    .col-md-8 {
      flex: 0 0 auto;
      width: 66.66666667%;
    }
    .col-md-9 {
      flex: 0 0 auto;
      width: 75%;
    }
    .col-md-10 {
      flex: 0 0 auto;
      width: 83.33333333%;
    }
    .col-md-11 {
      flex: 0 0 auto;
      width: 91.66666667%;
    }
    .col-md-12 {
      flex: 0 0 auto;
      width: 100%;
    }
    .offset-md-0 {
      margin-left: 0;
    }
    .offset-md-1 {
      margin-left: 8.33333333%;
    }
    .offset-md-2 {
      margin-left: 16.66666667%;
    }
    .offset-md-3 {
      margin-left: 25%;
    }
    .offset-md-4 {
      margin-left: 33.33333333%;
    }
    .offset-md-5 {
      margin-left: 41.66666667%;
    }
    .offset-md-6 {
      margin-left: 50%;
    }
    .offset-md-7 {
      margin-left: 58.33333333%;
    }
    .offset-md-8 {
      margin-left: 66.66666667%;
    }
    .offset-md-9 {
      margin-left: 75%;
    }
    .offset-md-10 {
      margin-left: 83.33333333%;
    }
    .offset-md-11 {
      margin-left: 91.66666667%;
    }
  }
  @media (min-width: 992px) {
    .col-lg-auto {
      flex: 0 0 auto;
      width: auto;
    }
    .col-lg-1 {
      flex: 0 0 auto;
      width: 8.33333333%;
    }
    .col-lg-2 {
      flex: 0 0 auto;
      width: 16.66666667%;
    }
    .col-lg-3 {
      flex: 0 0 auto;
      width: 25%;
    }
    .col-lg-4 {
      flex: 0 0 auto;
      width: 33.33333333%;
    }
    .col-lg-5 {
      flex: 0 0 auto;
      width: 41.66666667%;
    }
    .col-lg-6 {
      flex: 0 0 auto;
      width: 50%;
    }
    .col-lg-7 {
      flex: 0 0 auto;
      width: 58.33333333%;
    }
    .col-lg-8 {
      flex: 0 0 auto;
      width: 66.66666667%;
    }
    .col-lg-9 {
      flex: 0 0 auto;
      width: 75%;
    }
    .col-lg-10 {
      flex: 0 0 auto;
      width: 83.33333333%;
    }
    .col-lg-11 {
      flex: 0 0 auto;
      width: 91.66666667%;
    }
    .col-lg-12 {
      flex: 0 0 auto;
      width: 100%;
    }
    .offset-lg-0 {
      margin-left: 0;
    }
    .offset-lg-1 {
      margin-left: 8.33333333%;
    }
    .offset-lg-2 {
      margin-left: 16.66666667%;
    }
    .offset-lg-3 {
      margin-left: 25%;
    }
    .offset-lg-4 {
      margin-left: 33.33333333%;
    }
    .offset-lg-5 {
      margin-left: 41.66666667%;
    }
    .offset-lg-6 {
      margin-left: 50%;
    }
    .offset-lg-7 {
      margin-left: 58.33333333%;
    }
    .offset-lg-8 {
      margin-left: 66.66666667%;
    }
    .offset-lg-9 {
      margin-left: 75%;
    }
    .offset-lg-10 {
      margin-left: 83.33333333%;
    }
    .offset-lg-11 {
      margin-left: 91.66666667%;
    }
  }
  @media (min-width: 1200px) {
    .col-xl-auto {
      flex: 0 0 auto;
      width: auto;
    }
    .col-xl-1 {
      flex: 0 0 auto;
      width: 8.33333333%;
    }
    .col-xl-2 {
      flex: 0 0 auto;
      width: 16.66666667%;
    }
    .col-xl-3 {
      flex: 0 0 auto;
      width: 25%;
    }
    .col-xl-4 {
      flex: 0 0 auto;
      width: 33.33333333%;
    }
    .col-xl-5 {
      flex: 0 0 auto;
      width: 41.66666667%;
    }
    .col-xl-6 {
      flex: 0 0 auto;
      width: 50%;
    }
    .col-xl-7 {
      flex: 0 0 auto;
      width: 58.33333333%;
    }
    .col-xl-8 {
      flex: 0 0 auto;
      width: 66.66666667%;
    }
    .col-xl-9 {
      flex: 0 0 auto;
      width: 75%;
    }
    .col-xl-10 {
      flex: 0 0 auto;
      width: 83.33333333%;
    }
    .col-xl-11 {
      flex: 0 0 auto;
      width: 91.66666667%;
    }
    .col-xl-12 {
      flex: 0 0 auto;
      width: 100%;
    }
    .offset-xl-0 {
      margin-left: 0;
    }
    .offset-xl-1 {
      margin-left: 8.33333333%;
    }
    .offset-xl-2 {
      margin-left: 16.66666667%;
    }
    .offset-xl-3 {
      margin-left: 25%;
    }
    .offset-xl-4 {
      margin-left: 33.33333333%;
    }
    .offset-xl-5 {
      margin-left: 41.66666667%;
    }
    .offset-xl-6 {
      margin-left: 50%;
    }
    .offset-xl-7 {
      margin-left: 58.33333333%;
    }
    .offset-xl-8 {
      margin-left: 66.66666667%;
    }
    .offset-xl-9 {
      margin-left: 75%;
    }
    .offset-xl-10 {
      margin-left: 83.33333333%;
    }
    .offset-xl-11 {
      margin-left: 91.66666667%;
    }
  }
  @media (min-width: 1400px) {
    .col-xxl-auto {
      flex: 0 0 auto;
      width: auto;
    }
    .col-xxl-1 {
      flex: 0 0 auto;
      width: 8.33333333%;
    }
    .col-xxl-2 {
      flex: 0 0 auto;
      width: 16.66666667%;
    }
    .col-xxl-3 {
      flex: 0 0 auto;
      width: 25%;
    }
    .col-xxl-4 {
      flex: 0 0 auto;
      width: 33.33333333%;
    }
    .col-xxl-5 {
      flex: 0 0 auto;
      width: 41.66666667%;
    }
    .col-xxl-6 {
      flex: 0 0 auto;
      width: 50%;
    }
    .col-xxl-7 {
      flex: 0 0 auto;
      width: 58.33333333%;
    }
    .col-xxl-8 {
      flex: 0 0 auto;
      width: 66.66666667%;
    }
    .col-xxl-9 {
      flex: 0 0 auto;
      width: 75%;
    }
    .col-xxl-10 {
      flex: 0 0 auto;
      width: 83.33333333%;
    }
    .col-xxl-11 {
      flex: 0 0 auto;
      width: 91.66666667%;
    }
    .col-xxl-12 {
      flex: 0 0 auto;
      width: 100%;
    }
    .offset-xxl-0 {
      margin-left: 0;
    }
    .offset-xxl-1 {
      margin-left: 8.33333333%;
    }
    .offset-xxl-2 {
      margin-left: 16.66666667%;
    }
    .offset-xxl-3 {
      margin-left: 25%;
    }
    .offset-xxl-4 {
      margin-left: 33.33333333%;
    }
    .offset-xxl-5 {
      margin-left: 41.66666667%;
    }
    .offset-xxl-6 {
      margin-left: 50%;
    }
    .offset-xxl-7 {
      margin-left: 58.33333333%;
    }
    .offset-xxl-8 {
      margin-left: 66.66666667%;
    }
    .offset-xxl-9 {
      margin-left: 75%;
    }
    .offset-xxl-10 {
      margin-left: 83.33333333%;
    }
    .offset-xxl-11 {
      margin-left: 91.66666667%;
    }
  }
  /*Graphik*/
  @font-face {
    font-family: Graphik;
    src: url('../assets/fonts/graphik/Graphik-Light.woff');
    font-weight: 300;
    font-display: swap;
  }
  @font-face {
    font-family: Graphik;
    src: url('../assets/fonts/graphik/Graphik-Regular.woff');
    font-weight: 400;
    font-display: swap;
  }
  @font-face {
    font-family: Graphik;
    src: url('../assets/fonts/graphik/Graphik-Medium.woff');
    font-weight: 500;
    font-display: swap;
  }
  @font-face {
    font-family: Graphik;
    src: url('../assets/fonts/graphik/Graphik-Semibold.woff');
    font-weight: 600;
    font-display: swap;
  }
  @font-face {
    font-family: Graphik;
    src: url('../assets/fonts/graphik/Graphik-Bold.woff');
    font-weight: 700;
    font-display: swap;
  }
  /*rubik*/
  @font-face {
    font-family: Rubik;
    src: url('../assets/fonts/rubik/Rubik-Light.woff');
    font-weight: 300;
    font-display: swap;
  }
  @font-face {
    font-family: Rubik;
    src: url('../assets/fonts/rubik/Rubik-Regular.woff');
    font-weight: 400;
    font-display: swap;
  }
  @font-face {
    font-family: Rubik;
    src: url('../assets/fonts/rubik/Rubik-Medium.woff');
    font-weight: 500;
    font-display: swap;
  }
  @font-face {
    font-family: Rubik;
    src: url('../assets/fonts/rubik/Rubik-Bold.woff');
    font-weight: 700;
    font-display: swap;
  }
  ::selection {
    color: var(--gwds__color--black);
    background: var(--gwds__color--violet-50);
  }

  img {
    max-width: 100%;
  }

  p {
    margin-top: 0;
    margin-bottom: var(--gwds__space--s);
  }

  .section {
    padding-top: var(--gwds__section-padding);
    padding-bottom: var(--gwds__section-padding);
    /* RESPONSIVE */
  }
  @media (min-width: 992px) {
    .section {
      padding-top: var(--gwds__section-padding--lg);
      padding-bottom: var(--gwds__section-padding--lg);
    }
  }
  .container--shorter {
    max-width: 940px;
  }

  ol,
  ul {
    padding-left: var(--gwds__space--m);
  }

  ol {
    padding-left: 18px;
  }

  ol,
  ul,
  dl {
    margin-top: 0;
    margin-bottom: var(--gwds__space--s);
  }

  ol ol,
  ul ul,
  ol ul,
  ul ol {
    margin-bottom: 0;
  }

  dt {
    font-weight: var(--gwds__font-weight--bold);
  }

  dd {
    margin-bottom: var(--gwds__space--xs);
    margin-left: 0;
  }

  ul {
    padding-left: var(--gwds__space--s);
    list-style-type: none;
  }
  ul li {
    margin-bottom: var(--gw-spacing-xxs);
  }
  ul:not(.unstyled) li {
    position: relative;
  }
  ul:not(.unstyled) li:before {
    content: '';
    position: absolute;
    width: 4px;
    height: 4px;
    display: inline-block;
    top: 11px;
    left: -16px;
    background-color: black;
  }

  .unstyled {
    padding: 0;
    margin: 0;
    margin-bottom: var(--gwds__space--s);
  }

  a {
    color: inherit;
    text-decoration: underline;
  }
  a:hover {
    text-decoration: underline;
    cursor: pointer;
  }

  a:not([href]):not([class]),
  a:not([href]):not([class]):hover {
    color: inherit;
    text-decoration: none;
  }

  *:focus-visible {
    --borderWidth: 3px;
    outline-width: var(--borderWidth);
    outline-style: solid;
    outline-color: var(--gwds__color--fuchsia-500);
  }

  h1,
  .h1,
  h2,
  .h2,
  h3,
  .h3,
  h4,
  .h4,
  h5,
  .h5,
  h6,
  .h6 {
    font-family: var(--gwds__font-family--headings);
    font-weight: var(--gwds__font-weight--semibold);
    margin-top: 0;
    margin-bottom: var(--gwds__space--s);
    line-height: var(--gwds__line-height--tight);
  }
  h1--light,
  .h1--light,
  h2--light,
  .h2--light,
  h3--light,
  .h3--light,
  h4--light,
  .h4--light,
  h5--light,
  .h5--light,
  h6--light,
  .h6--light {
    font-weight: var(--gwds__font-weight--light);
  }

  h1,
  .h1 {
    font-size: var(--gwds__font-size--l);
  }

  h2,
  .h2 {
    font-size: var(--gwds__font-size--l);
  }

  h3,
  .h3 {
    font-size: var(--gwds__font-size--l);
  }

  h4,
  .h4 {
    font-size: var(--gwds__font-size--l);
  }

  h5,
  .h5 {
    font-size: var(--gwds__font-size--m);
    line-height: var(--gwds__line-height--regular);
  }

  h6,
  .h6 {
    font-size: var(--gwds__font-size--s);
  }

  /* RESPONSIVE */
  @media (min-width: 768px) {
    h1,
    .h1 {
      font-size: var(--gwds__font-size--xxxl);
    }
    h2,
    .h2 {
      font-size: var(--gwds__font-size--xxl);
    }
    h3,
    .h3 {
      font-size: var(--gwds__font-size--xl);
    }
  }
  blockquote,
  q,
  small {
    line-height: var(--gwds__line-height--regular);
  }

  :root {
    --standard-border-color: var(--gwds__color--dark-300);
  }

  .gwds-icon-container {
    margin-bottom: var(--gwds__space--s);
    transform: scale(0.75);
    transform-origin: bottom left;
  }
  .gwds-icon-container img {
    height: 100%;
    width: auto;
  }

  @media (min-width: 768px) {
    .gwds-icon-container {
      transform: scale(1);
    }
  }
  .gwds-header > *:first-child {
    margin-top: 0;
  }

  .gwds-header > *:last-child {
    margin-bottom: 0;
  }

  .gwds-pre-title {
    margin-bottom: var(--gwds__pre-title-margin-bottom);
  }

  .gwds-main-title {
    margin-bottom: var(--gwds__main-title-margin-bottom);
  }

  .gwds-buttons-container {
    margin-top: var(--gwds__buttons-container-margin-top);
    margin-bottom: calc(var(--gwds__buttons-spacing) * -1) !important;
  }

  .gwds-buttons-container gwds-button {
    margin-right: var(--gwds__buttons-spacing);
    margin-bottom: var(--gwds__buttons-spacing);
  }

  .gwds-buttons-container gwds-button:last-child {
    margin-right: 0;
    margin-bottom: 0;
  }

  .gwds-description-container {
    margin-top: var(--gwds__description-margin-top);
    margin-bottom: var(--gwds__description-margin-bottom);
  }

  .gwds-description-container *:last-child,
  .gwds-description-container ::slotted(:last-of-type) {
    margin-bottom: 0 !important;
  }

  .opacity-0 {
    opacity: 0 !important;
  }

  .opacity-1 {
    opacity: 1 !important;
  }

  .tal {
    text-align: left !important;
  }

  .tac {
    text-align: center !important;
  }

  .tar {
    text-align: right !important;
  }

  .d-inline-block {
    display: inline-block !important;
  }

  .d-block {
    display: block !important;
  }

  .d-flex {
    display: flex !important;
  }

  .d-inline-flex {
    display: inline-flex !important;
  }

  .d-none {
    display: none !important;
  }

  .pt-0 {
    padding-top: 0;
  }

  .pb-0 {
    padding-bottom: 0;
  }

  .mt-0 {
    margin-top: 0;
  }

  .mb-0 {
    margin-bottom: 0;
  }

  /* RESPONSIVE */
  /*sm*/
  @media (min-width: 576px) {
    .tal-sm {
      text-align: left !important;
    }
    .tac-sm {
      text-align: center !important;
    }
    .tar-sm {
      text-align: right !important;
    }
  }
  /*md*/
  @media (min-width: 768px) {
    .tal-md {
      text-align: left !important;
    }
    .tac-md {
      text-align: center !important;
    }
    .tar-md {
      text-align: right !important;
    }
  }
  /*lg*/
  @media (min-width: 992px) {
    .tal-lg {
      text-align: left !important;
    }
    .tac-lg {
      text-align: center !important;
    }
    .tar-lg {
      text-align: right !important;
    }
  }
  /*xl*/
  @media (min-width: 1200px) {
    .tal-xl {
      text-align: left !important;
    }
    .tac-xl {
      text-align: center !important;
    }
    .tar-xl {
      text-align: right !important;
    }
  }
  /*xxl*/
  @media (min-width: 1400px) {
    .tal-xxl {
      text-align: left !important;
    }
    .tac-xxl {
      text-align: center !important;
    }
    .tar-xxl {
      text-align: right !important;
    }
  }

  /*# sourceMappingURL=styles-components.css.map */
`;
