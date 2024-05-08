import { Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./components/Layout";
import AboutUs from "./routes/AboutUs/AboutUs";

function App() {
  return (
    <Layout>
      <Routes>
        <Route index path="about-us" element={<AboutUs />} />

        {/* All main pages */}
        {/* <Route path="/" element={<Home />} /> */}

        {/* About */}
        {/* <Route path="/setting" element={<Setting />} /> */}

        {/* Error pages */}
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </Layout>
  );
}

export default App;
