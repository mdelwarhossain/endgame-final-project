// import React from 'react';

// const AuthProvider = () => {
//     return (
//         <div>
//             <h1></h1>
//         </div>
//     );
// };

// export default AuthProvider;
import React, { createContext } from 'react';

import app from '../firebase/firebase.config';
import { getAuth } from 'firebase/auth'

export const AuthContext = createContext;



const auth = getAuth(app)
const AuthProvider = ({ children }: { children: React.ReactNode }) => {
    const authInfo = {

    }

    return (
        // <AuthContext.Provider value={authInfo}>
        //     {children}
        // </AuthContext.Provider>
        <></>
    );
};

export default AuthProvider;
// import React, { createContext, useEffect, useState } from 'react';
// import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from 'firebase/auth';
// import app from '../firebase/firebase.config';

// export const AuthContext = createContext;

// const auth = getAuth(app)

// const AuthProvider = ({ children }) => {
//     const [user, setUser] = useState(null);
//     const [loading, setLoading] = useState(true);
//     const createUser = (email, password) => {
//         setLoading(true);
//         return createUserWithEmailAndPassword(auth, email, password);
//     }

//     const signIn = (email, password) => {
//         setLoading(true);
//         return signInWithEmailAndPassword(auth, email, password);
//     }

//     const updateUser = (userInfo) => {
//         return updateProfile(user, userInfo);
//     }

//     const logOut = () => {
//         setLoading(true);
//         return signOut(auth);
//     }

//     useEffect(() => {
//         const unsubscribe = onAuthStateChanged(auth, currentUser => {
//             console.log('user observing');
//             setUser(currentUser);
//             setLoading(false);
//         });

//         return () => unsubscribe();
//     }, [])

//     const authInfo = {
//         createUser,
//         signIn,
//         updateUser,
//         logOut,
//         user,
//         loading
//     }
//     return (
//         <AuthContext.Provider value={authInfo}>
//             {children}
//         </AuthContext.Provider>
//     );
// };

// export default AuthProvider;