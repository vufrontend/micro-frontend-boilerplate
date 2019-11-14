import "react-app-polyfill/ie11"
import React from "react"
import ReactDOM from "react-dom"
import App from "./App"
import { unregister } from "./serviceWorker"

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

window.renderMicro("micro")
