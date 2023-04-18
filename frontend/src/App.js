import "./App.css";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import chkAuthHelper from "../src/components/Helpers/chkAuthHelper";
import UserDashboard from "./components/UserDashboard";
import LoginPages from "../src/components/LoginPages";
import ErrorPage from "./components/ErrorPage";
import Profile from "../src/components/Profile";
import SignupPage from "./components/Signup";
import { FullList } from "./components/fullList";
import Home from "./components/Home";
import { Provider } from "react-redux";
import store from "./redux/store";
import TNavBar from "./components/TNavBar";
import Options from "./components/options";
import TodoForm from './components/todoForm'
function App() {
  return (
    <Provider store={store}>
      <TNavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginPages />}></Route>
        <Route path="/signup" element={<SignupPage />}></Route>
        <Route
          path="/userpage"
          element={
            chkAuthHelper() ? (
              <UserDashboard />
            ) : (
              <ErrorPage errorCode="(@_@)" errorMessage="Not Allowed" />
            )
          }
        >
          <Route index element={<><TodoForm/><Options/><FullList /></>} />
          <Route path="todopage" element={<><TodoForm/><Options/><FullList /></>} />
          <Route path="profile" element={<Profile />} />
        </Route>
        <Route path="/logout" element={<Home />} />
        <Route
          path="*"
          element={<ErrorPage errorCode="404" errorMessage="Go Home now" />}
        ></Route>
      </Routes>
      <Footer />
    </Provider>
  );
}

export default App;
