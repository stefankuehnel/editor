import { useState } from "react";
import { Editor } from "./components/editor";
import { Link } from "./components/link";

function App() {
  const [year] = useState(new Date().getFullYear());

  return (
    <>
      <img src="/logo.svg" alt="Markdown Logo" width="50" height="50" />
      <h1>Markdown Editor</h1>
      <p>
        Markdown is a plain text formatting syntax to speed up your writing. Let
        us try Markdown by using the editor below.
      </p>
      <Editor content="Type here..." />
      <p>
        Copyright &copy; {year}
        <Link
          href="https://stefankuehnel.com"
          text="Stefan Kühnel"
          spaceBefore
        />
        , All rights reserved.
      </p>
    </>
  );
}

export default App;
