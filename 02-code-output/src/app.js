import { createEl, getEl } from './utility.js'

const iframeEl = getEl('iframe')
const errorsEl = getEl('errors')

const editorEl = getEl('editor')
const sourceEl = getEl('source')

function getCode() {
  return editorEl.value
}

function setIframeContent(code) {
  const source = `
    <html>
    <head>
      <style>
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap');

        body {
          font-family: 'Inter', sans-serif;
          overflow: hidden;
        }

        .app {
          padding: 0 2rem;
          color: snow;
        }

        .app a {
          color: wheat;
        }
      </style>
    </head>
    <body>
      <div id="app"></div>

      <script src="https://cdn.skypack.dev/@babel/standalone" type="module"></script>
      <script type="text/babel" data-type="module">
        ${code}
      </script>
    </body>
    </html>
  `

  iframeEl.srcdoc = source
}

function updateUI() {
  const code = getCode()

  setIframeContent(code)
}

function handleKeyUp() {
  updateUI()
}

editorEl.addEventListener('keyup', handleKeyUp)

updateUI()
