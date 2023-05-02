# Dependencias

## Instaladas

Usa este archivo para agregar el nombre de las dependencias que instalaste y la razón. No es necesario que sea una descripción detallada. Una explicación breve es suficiente para ayudar a futuros desarrolladores/colaboradores del proyecto a entender por qué se agregó la dependencia. Además, proporciona tu nombre, ya que esto ayudará a otros desarrolladores a contactarte si tienen alguna pregunta.

**nombre de la dependencia:** concurrently
**url de la dependencia:** https://www.npmjs.com/package/concurrently
**instalada para:** ejecutar dos scripts simultaneamente, especificamente `start`.
**instalada por:** Bruno Sastre (bsastregx)

---

**nombre de la dependencia:** @web/dev-server-esbuild
**url de la dependencia:** https://www.npmjs.com/package/@web/dev-server-esbuild
**instalada para:** transformar los .ts en .js (on the fly) para los tests que se corren con web-test-runner. La dependencia se importó en `web-test-runner.config.js` y se agregó como plugin. fuente: https://modern-web.dev/docs/dev-server/plugins/esbuild/. Sin esta dependencia, no se pueden correr los tests con typescript : `TypeError: Failed to fetch dynamically imported module`.
**instalada por:** Bruno Sastre (bsastregx)

---

**nombre de la dependencia:** @rollup/plugin-commonjs
**url de la dependencia:** https://www.npmjs.com/package/@rollup/plugin-commonjs
**instalada para:** convertir modulos CommonJs a ES6, para que puedan ser incluidos en un bundle de Rollup. De lo contrario, el bundle no funciona: `[!] Error: 'moment' is not exported by node_modules/moment/moment.js, imported by _rollup-test/comp-a.js`
**instalada por:** Bruno Sastre (bsastregx)

---

**nombre de la dependencia:** @rollup/plugin-terser
**url de la dependencia:** https://www.npmjs.com/package/@rollup/plugin-terser
**instalada para:** sustiuir la vieja version [rollup-plugin-terser](https://www.npmjs.com/package/rollup-plugin-terser) que esta deprecada.
**instalada por:** Bruno Sastre (bsastregx)

---

**nombre de la dependencia:** @splidejs/splide
**url de la dependencia:** https://www.npmjs.com/package/@splidejs/splide
**instalada para:** usar en el componente `gwds-slider`
**instalada por:** Bruno Sastre (bsastregx)

---

**nombre de la dependencia:** sass
**url de la dependencia:** https://www.npmjs.com/package/sass
**instalada para:** poder compilar los archivos .scss ubicados en `./src/styles`.
**instalada por:** Bruno Sastre (bsastregx)

---

**nombre de la dependencia:** marked
**url de la dependencia:** https://www.npmjs.com/package/marked
**instalada para:** poder parsear markdown. Los componentes de esta librería tienen que poder parsear markdown para la descripción.
**instalada por:** Bruno Sastre (bsastregx)

---

**nombre de la dependencia:** @types/marked
**url de la dependencia:** https://www.npmjs.com/package/@types/marked
**instalada para:** types definition para `marked`
**instalada por:** Bruno Sastre (bsastregx)

---

**nombre de la dependencia:**
**url de la dependencia:**
**instalada para:**
**instalada por:**

---

**nombre de la dependencia:**
**url de la dependencia:**
**instalada para:**
**instalada por:**

---

## Desinstaladas

Las dependencias que vinieron ya instaladas con el [typescript starter de Lit](https://github.com/lit/lit-element-starter-ts), y que se desinstalaron por alguna razon:

**nombre de la dependencia:** rollup-plugin-terser
**desinstalada porque:** Estaba deprecada, y se instaló en su lugar la nueva versión `@rollup/plugin-terser`.
**desinstalada por:** Bruno Sastre (bsastregx)
