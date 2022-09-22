import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Form2Dm from "./Form2Dm/Form2Dm";
import HomeLogin from "./Home";

function WebDemo() {
    const [user,setUser] = useState({email: undefined,password: undefined})

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<HomeLogin user={user}/>}>
            {/* <Route index element={} */}
            <Route path="/login" element={<Form2Dm setUser={setUser} />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default WebDemo;
