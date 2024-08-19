import React, { useState, useEffect } from "react";
import NavbarStyleTwo from "../components/_App/NavbarStyleTwo";
import PageBanner from "../components/Common/PageBanner";
import Footer from "../components/_App/Footer";
import Cookies from "js-cookie";
import { useRouter } from "next/router";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth, db, storage } from "../lib/firebase.js";
import Link from "next/link.js";
import { signInWithGoogle, signOut, onAuthStateChanged } from "../lib/auth.js";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import NavbarStyleFive from "../components/_App/NavbarStyleFive.js";
import Image from "next/image.js";

const Index = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  //   const handleSignInGoole = (event) => {
  //     event.preventDefault();
  //     let value = signInWithGoogle();
  //     console.log(value, "............")
  //     // Cookies.set("loggedin", "true");
  //     // router.push({ pathname: "/dashboard" });
  //   };

  const handleSignInGoole = async (event) => {
    event.preventDefault();
    const provider = new GoogleAuthProvider();

    try {
      let result = await signInWithPopup(auth, provider);
      console.log(result, "ddddddwww");
      if (result) {
        Cookies.set("loggedin", "true");
        router.push({ pathname: "/dashboard" });
      }
    //   return result;
    } catch (error) {
      console.error("Error signing in with Google", error);
    }
  };

  const handleSignIn = async (e) => {
    e.preventDefault(); // Prevent the default form submission behavior
    try {
      // Use the email and password entered by the user
      let result = await signInWithEmailAndPassword(auth, email, password);
      console.log("User signed in successfully", result);
      Cookies.set("loggedin", "true");
      router.push({ pathname: "/dashboard", query: result });
    } catch (error) {
      console.error("Error signing in:", error.message);
    }
  };
  return (
    <div className="main-wrapper">
      {/* <NavbarStyleTwo /> */}
      {/* <NavbarStyleFive /> */}

      {/* <PageBanner pageTitle="Welcome to Nabeela" /> */}
      <div className="container ">
        <div className="d-flex justify-content-center  "> 
        <Image src="/images/logo.png" alt="logo" width={250} height={250}  />
        </div>

      </div>

      <div className="profile-authentication-area ptb-20 ">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6 col-md-12 ">
              <div className="login-form">
                <h2>Login</h2>

                <form onSubmit={handleSignIn}>
                  <div className="form-group">
                    <label>email</label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="form-control"
                      placeholder="Username or email"
                    />
                  </div>

                  <div className="form-group">
                    <label>Password</label>
                    <input
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="form-control"
                      placeholder="Password"
                    />
                  </div>

                  <div className="row align-items-center">
                    <div className="col-lg-6 col-md-6 col-sm-6 remember-me-wrap">
                      <Link href={"/register"} className="lost-your-password">
                        Register
                      </Link>
                    </div>

                    <div className="col-lg-6 col-md-6 col-sm-6 lost-your-password-wrap">
                      <a href="#" className="lost-your-password">
                        Lost your password?
                      </a>
                    </div>
                  </div>

                  <button type="submit">Log In</button>
                  <button type="submit">
                <a href="#" onClick={handleSignInGoole}>
                  Sign In with Google <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAEkUlEQVR4nO2Zb0wbZRzHn3taesUtRpOJYbo/DoQM5c/GMgryzxkYxbGBiQsbNBCEFGaIY8zCCuaUMSiQAQMGQWAgcSY2GeuNuzpc8NqNvRoCItE3841Dthj3ToNzbX+mVRBI197Zo2VJv8n3XZ+nn89dn6dPrwj5448/HgcoJIWqgGIoxywU4HuQTfwJSsIKBxBAKgJIQzbIJhZBhX+BE/g6VAUU2ccgXwc0UgWU4tvwNmGBJASCqiQsoMa3QRsQ433wOlk4qPEsvCkQ2llTEUAxnoEaFOIdeA3RCumEzWPwtT2IrHCK0K0f+HkUCMX4B9HBk9b0PTwNFJKJC9+NngcVfrDu8En/toJoFw9+EMnhOPGr1+DLCE40eIeAGn/vPXgsMvyHRIfgrbEMT0IlroUmaQpQaAtQKAjOSN6C05hy7Db21zgbW4pN4sI3kyGQQVh5g5+W9PJZfEChZ+ADydAqkVKR4R1vVIHv8IIvwPNwDr0oeP4aFAJ5+P76wJvl22CcfAQaCUCyC/gSPAV6JEEbLWAmdWAmwdHeAIB0wvmV35DweiQBs2x+WcDeURmACv8Hn0lYoAK9hDZiwCSPXwW/VI4E0En/ObuclPSjjRowybROBZY6FPAAyhGJNmrATF5xKWCSdQiZL1gzC2I0XDthO9rUd9e9gImccynAkRm+EAjWzMIbddcW+Qg8dCMQ6iuB3TW3rHwEHrkWQJt9JbCjehKeaoHtVd+C5x+hm7IwXwns1t60Pd2L+JNRHovYTI642UY7fSVwRDc8z0NAduZJ8A+5Z6Geif/jvF4RiEROy3D+puiPvrG4Eii/0DjqXoALVDiDnx0PBhWthENXs6HDGHtJbIGTnfX97u6Arq/iuHsBQBjMsntL4DYzCfRYOGQbDjvg7c2jlZaL11/bJhZ8W496Z2SNyeoK/vVas4XiKH5P88BENtrhfzdthrNMwjL4ylaPJi9wXIrHjwcpjpIeafxswd3VL2lrm+A9KXCBL98df+GvEjrdKfxSP2YTZjyRoDhKmt/SM+d2/6+egsbuylhBkzcwihlX8CvvRP/X4VuFwvfeiNhe1lX3E5/d51hz75zQ+RE9FvZKPq208pHIp5WWzq/2DlCDKXJ38w6PRW1qZ/b15RmU1pyRHDja2uH2FEp9ekrQl+dyutmY1iweAitFGljFdJdxL6VnIw5cGdsVdJkL2zJgjEq8aNxTV8ckTNpfs3JM1kgOFPZQsLXqO6cC77c3dSNPomPjpvkKeNKiwXLYWX1nFfy7TQM/Ik+j10fINHTqfW9IFH5RCJG1Jgd8ev2Xv53o6hJ0cHxiOG7HczVM4oI3JI7pc0HVemGeGq4MEgV+hYT8LBM/K2RN/J+eYxXTRmPo+v3m7jNGNecaMq2iX3lDprWXjWlG3sgwvSe0gY2beseQ5TF4ztXDjqt++caru5C3MzQWGdvM7L9VZDj4WCh4AZ3xuJGJm/icifb+n3xrowck6WeiC1uN+0a1TOLPajptUWVQWu13yH4IzDVk2tSGtMWqa8nzLex+ts8YU2Afg/zxxx/kaf4GzSVnCicBYF0AAAAASUVORK5CYII="></img>
                </a> 
              </button>
                </form>
              </div>
              {/* <button type="submit">
                <a href="#" onClick={handleSignInGoole}>
                  Sign In with Google
                </a>
              </button> */}
            </div>
          </div>
        </div>
      </div>

      {/* <Footer /> */}
    </div>
  );
};

export default Index;
