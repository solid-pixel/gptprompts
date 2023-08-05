/**
 * @name css.js
 * @version 0.1.0
 * @url https://github.com/solid-pixel/gptprompts/blob/main/css.js
 */

// inject CSS in the page

let css = `
    body {
        background-color: #eee;
        color: #333;
        font-family: Arial, sans-serif;
    }
`

function injectStyle(css) {
    const style = document.createElement('style');
    style.innerHTML = css;
    document.head.appendChild(style);
}