import { Container, Row, Col } from "react-bootstrap";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import { Link, useNavigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
// Put any other imports below so that CSS from your
// components takes precedence over default styles.
import Home from "./components/Home";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Dashboard from "./pages/Dashboard";
import Analytics from "./pages/Analytics";
import Users from "./pages/Users";
import ProtectedRoute from "./components/ProtectedRoute";
import { UserAuthContextProvider } from "./context/UserAuthContext";
import DataList from "./pages/DataList";

function App() {
  return (
    <Container style={{ width: "400px" }}>
     

      <Row>
        <Col> 
          <UserAuthContextProvider>
            <Routes>
              <Route
                path="/home"
                element={
                  <ProtectedRoute>
                    <Dashboard />
                  </ProtectedRoute>
                }
              />
              <Route path="/" element={<Login />} />
          {/* <Route path="/" element={<Dashboard/>} /> */}

              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />

          <Route path="/dashboard" element={<Dashboard/>} />
              <Route path="/datalist" element={<DataList />} />
          <Route path="/users" element={<Users />} />
          <Route path="/analytics" element={<Analytics />} />
            </Routes>
          </UserAuthContextProvider>
        </Col>
      </Row>
    </Container>           
  );
}

export default App;
