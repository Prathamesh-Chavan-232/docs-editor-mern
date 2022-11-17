import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { v4 as uuidV4 } from "uuid";
import QuillEditor from "./components/QuillEditor";
import TextEditor from "./components/TextEditor";
function App() {
  <Router>
    <Routes>
      <Route path="/" exact>
        <Link to={`/documents/${uuidV4()}`} />
      </Route>
      <Route path="/documents/:id">
        <TextEditor />
      </Route>
    </Routes>
  </Router>;
  // return <Header />;
  // return <TextEditor />;
  return <QuillEditor />;
}

export default App;
