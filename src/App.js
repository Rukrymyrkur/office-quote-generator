import React from "react";
import Quotes from "./components/Quotes";

function App() {
  return (
    <div>
      <div className="box">
        <div className="quotes-title">The Office Quote Generator</div>
        <Quotes />
        <div className="description">
          <p>Neringa Surmilavičiūtė @ 2020</p>
          <a
            href="https://github.com/Rukrymyrkur/office-quote-generator"
            target="_blank"
          >
            Source code
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;
