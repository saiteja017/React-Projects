import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { UserProvider } from "./context/UserContext";
import Layout from "./components/layout/Layout";
import Home from "./components/Home";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import ChatWindow from "./components/chat/ChatWindow";
import logo from "./logo.png"
const App = () => {
  return (
    <Router>
       <div className="mb-8">
        <img src={logo} alt="UpwardIQ Logo" className="h-[80px] w-[70%] " style={{margin:'auto'}} />
      </div>
      <UserProvider>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/chat" element={<ChatWindow />} />
          </Routes>
        </Layout>
      </UserProvider>
    </Router>
  );
};

export default App;
