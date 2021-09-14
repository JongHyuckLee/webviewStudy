import React from "react";
import "./App.css";
import { isIos } from "./utils/userAgent";


window["__SWIFT_CALL__"] = {
    ...window["__SWIFT_CALL__"],
    setTextColor:function (color) {
       document.body.style.color = color
    }
}

function App() {

  const send = () => {
    if (isIos()) {
      window.webkit.messageHandlers.toast.postMessage("Hello WebKit");
    }
  };

  React.useState(() => {
      window["__SWIFT_CALL__"] = {
          ...window["__SWIFT_CALL__"],
          setJwt:function (jwt) {
              localStorage.setItem("jwtToken", jwt);
              return jwt;
          }
      }
  });


  return (
    <div style={{ backgroundColor: "blue", height: '300px',marginTop: '20px' }} className="App">
      <div>TEST2</div>

      <button style={{ color: "white" }} onClick={send}>
        메시지 발송
      </button>
    </div>
  );
}

export default App;
