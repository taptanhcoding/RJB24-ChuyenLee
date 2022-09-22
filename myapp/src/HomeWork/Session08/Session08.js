import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home/Home";
import Layout from "./Layout/Layout";
import List from "./List/List";
import DetailCustomer from "./DetailCustomer/DetailCustomer";
import CreateData from "./CreateData/CreateData";

function Session08() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/:endpoint" element={<List />} />
          <Route path="/:endpoint/:id" element={<DetailCustomer />} />
          <Route path="/:endpoint/create" element={<CreateData />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default Session08;
