import React, { useState } from 'react';
import NavbarStyleTwo from '../components/_App/NavbarStyleTwo';
import PageBanner from '../components/Common/PageBanner';
import Footer from '../components/_App/Footer';
import Link from 'next/link';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { setDoc, doc } from 'firebase/firestore';

import { auth, db, storage } from '../lib/firebase.js';
import { useRouter } from 'next/router.js';
import NavbarStyleFive from '../components/_App/NavbarStyleFive.js';
import Image from 'next/image.js';

const ProfileAuthentication = () => {

    const router = useRouter();
    const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');



    const registerUserAndStoreData = async (e) => {
        e.preventDefault(); // Prevent the default form submission behavior
        try {
          // Register user in Firebase Authentication
          const userCredential = await createUserWithEmailAndPassword(auth , email, password);
          const user = userCredential.user;
      
          // Store additional user information in Firestore
          const userDocRef = doc(db, 'users', user.uid); // Assuming 'users' is your Firestore collection
          const userData = {
            name: name,
            email: user.email,
            // Add any other user data you want to store
          };
      
          await setDoc(userDocRef, userData);
      
          console.log('User registered and data stored successfully:', user);
          return user;
        } catch (error) {
          console.error('Error registering user:', error.message);
          throw error;
        }
      };

    return (
        <div className="main-wrapper">
			{/* <NavbarStyleTwo /> */}
            {/* <NavbarStyleFive /> */}
			{/* <PageBanner 
                pageTitle="Welcome to Nabeela" 
            />   */}
              <div className="container ">
        <div className="d-flex justify-content-center  "> 
        <Image src="/images/logo.png" alt="logo" width={250} height={250}  />
        </div>

      </div>

            <div className="profile-authentication-area ptb-20">
                <div className="container">
                    <div className="row justify-content-center">                        
                        <div className="col-lg-6 col-md-12">
                            <div className="register-form">
                                <h2>Register</h2>

                                <form onSubmit={registerUserAndStoreData} >
                                    <div className="form-group">
                                        <label>Username</label>
                                        <input type="text"  value={name} onChange={(e) => setName(e.target.value)} className="form-control" placeholder="Username or email" />
                                    </div>

                                    <div className="form-group">
                                        <label>Email</label>
                                        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="form-control" placeholder="Username or email" />
                                    </div>

                                    <div className="form-group">
                                        <label>Password</label>
                                        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="form-control" placeholder="Password" />
                                    </div>

                                    <p className="description">The password should be at least eight characters long. To make it stronger, use upper and lower case letters, numbers, and symbols like ! " ? $ % ^ & )</p>
                                    <div className="row align-items-center">
                                        <div className="col-lg-6 col-md-6 col-sm-6 remember-me-wrap">
                                            {/* <p>
                                                <input type="checkbox" id="test2" />
                                                <label htmlFor="test2">Remember me</label>
                                            </p> */}
                                            <Link href={"/"} className="lost-your-password" >
                                            I already have an account
                                            </Link>
                                            {/* <a href="#" className="lost-your-password">Lost your password?</a> */}
                                        </div>

                                        {/* <div className="col-lg-6 col-md-6 col-sm-6 lost-your-password-wrap">
                                            <a href="#" className="lost-your-password">Lost your password?</a>
                                        </div> */}
                                       
                                    </div>

                                    <button   type="submit">Register</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

			{/* <Footer /> */}
		</div>
    )
}

export default ProfileAuthentication;