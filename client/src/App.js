// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Redirect,
// } from "react-router-dom";
// import "./css/App.css";
// import TextEditor from "./TextEditor";
// import { v4 as uuidV4 } from "uuid";
import Header from "./components/Header";
import QuillEditor from "./components/QuillEditor";
function App() {
  // <Router>
  //   <Switch>
  //     <Route path="/" exact>
  //       <Redirect to={`/documents/${uuidV4()}`} />
  //     </Route>
  //     <Route path="/documents/:id">
  //       <TextEditor />
  //     </Route>
  //   </Switch>
  // </Router>;
  return <Header></Header>;
  // return <QuillEditor />;
}

export default App;
