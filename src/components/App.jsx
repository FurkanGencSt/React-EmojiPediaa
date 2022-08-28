import React from "react";
import emojipedia from "../emojipedia.js";
import Card from "../components/Card.jsx";

function Entry(emojiTerm) {
  return (
    <Card
      key={emojiTerm.id}
      name={emojiTerm.name}
      emoji={emojiTerm.emoji}
      description={emojiTerm.meaning}
    />
  );
}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>
      <dl className="dictionary">{emojipedia.map(Entry)}</dl>
      
    </div>
  );
}

export default App;
