import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { v4 as uuidV4 } from "uuid";
import QuillEditor from "./components/QuillEditor";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/documents/:id" element={<QuillEditor />} />
        <Route
          path="/"
          element={<Navigate replace to={`/documents/${uuidV4()}`} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
