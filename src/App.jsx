import React from "react";
import "./App.css";
import { useEffect, useState } from "react";
import supabase from "../supabase";

import MapView from "./Mapview";
import Login from "./components/Login";

function App() {
  const [session, setSession] = useState(null);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });
  }, []);

  return (
    <div className="App">
      {session ? (
        <MapView />
      ) : (
        <div id="login-container">
          <Login />
        </div>
      )}
    </div>
  );
}

export default App;
