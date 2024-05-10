import { Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./components/Layout";
import AboutUs from "./routes/AboutUs/AboutUs";
import AuthTemplate from "./routes/Auth/AuthTemplate";
import Login from "./routes/Auth/Login";

function App() {
  return (
    <Layout>
      <Routes>
        <Route index path="/" element={<AboutUs />} />

        {/* All main pages */}
        {/* <Route path="/" element={<Home />} /> */}

        {/* About */}
        {/* <Route path="/setting" element={<Setting />} /> */}

        {/* Auth */}
        <Route path="/auth" element={<AuthTemplate />}>
          <Route path="login" element={<Login />} />
        </Route>

        {/* Error pages */}
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </Layout>
  );
}

export default App;
