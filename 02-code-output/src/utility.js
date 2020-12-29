export function getEl(id) {
  return document.getElementById(id)
}

export function createEl(tag, content) {
  if (content) {
    const domEl = document.createElement(tag)
    domEl.innerText = content

    return domEl
  }

  return document.createElement(tag)
}
