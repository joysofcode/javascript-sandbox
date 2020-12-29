import * as monaco from 'https://cdn.skypack.dev/monaco-editor'

window.MonacoEnvironment = {
  getWorkerUrl: () => {
    return `
      data:text/javascript;charset=utf-8,
      ${encodeURIComponent(`
        self.MonacoEnvironment = {
          baseUrl: 'https://cdnjs.cloudflare.com/ajax/libs/monaco-editor/0.21.2/min'
        };
        importScripts('https://cdnjs.cloudflare.com/ajax/libs/monaco-editor/0.21.2/min/vs/base/worker/workerMain.min.js');
      `)}
    `
  },
}

const editorOptions = {
  value: '',
  language: 'javascript',
  theme: 'vs-dark',
  automaticLayout: true,
  minimap: {
    enabled: false,
  },
  fontFamily: 'IBM Plex Mono, monospace',
  fontSize: '20px',
  tabSize: 2,
}

export const editor = monaco.editor.create(
  document.getElementById('editor'),
  editorOptions
)
