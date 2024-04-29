import ReactDOM from "react-dom";

function ClearModalPortal({ children }) {
  const el = document.getElementById("clear-modal");
  return ReactDOM.createPortal(children, el);
}

export default ClearModalPortal;
