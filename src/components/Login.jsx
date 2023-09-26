import { createClient } from "@supabase/supabase-js";
import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import supabase from "../../supabase";

export default function Login() {
  return (
    <div className="login-wrap">
      <div className="Login">
        <h1> Login to Admin Dashboard</h1>
        <Auth
          supabaseClient={supabase}
          appearance={{
            theme: ThemeSupa,
            variables: {
              default: {
                colors: {
                  brand: "skyblue",
                  brandAccent: "blue",
                },
              },
            },
          }}
        />
      </div>
    </div>
  );
}
