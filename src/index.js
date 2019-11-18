import "react-app-polyfill/ie11"
import React from "react"
import ReactDOM from "react-dom"
import { createBrowserHistory } from "history"

import { unregister } from "./serviceWorker"
import App from "./App"

// const history = createBrowserHistory()

window.renderMicro = (containerId, history) => {
  ReactDOM.render(
    <App history={history} />,
    document.getElementById(containerId)
  )
  unregister()
}

window.unmountMicro = containerId => {
  ReactDOM.unmountComponentAtNode(document.getElementById(containerId))
}

window.renderMicro("micro", createBrowserHistory())
