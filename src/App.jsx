import "./App.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { auth } from "./config/firebase";
import { onAuthStateChanged } from "firebase/auth";
import PR from "./Components/protectedRoute"
import Welcomepage from "./page/welcomepage";
import Login from "./page/login";
import { Register } from "./page/Register";
import NavBar from "./page/NavBar";
import { HomePage } from "./page/HomePage";
import { useEffect } from "react";
import { useState } from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

function App() {
  const [user, setUser] = useState(null);
  const [isFetching, setIsFetching] = useState(true)
  useEffect(() => {
    const unSub = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        setIsFetching(false)
        return;
      }
      setUser(null);
      setIsFetching(false)
    });
    return () => unSub();
  }, []);

  if(isFetching){
    return (
      <div className="circle flex justify-center items-center gap-2 h-dvh">
        <AiOutlineLoading3Quarters className="animate-spin"/>
        <h1>Loading...</h1>
      </div>
    )
  }
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<NavBar />}>
            <Route index element={<Welcomepage user={user} />} />
            <Route path="Login" element={<Login user={user} />} />
            <Route path="Register" element={<Register user={user}  />} />
            <Route
              path="Home"
              element={
                <PR user={user}>
                  <HomePage />
                </PR>
              }
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
