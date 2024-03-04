// import React, { useState } from 'react'
// import { Link } from 'react-router-dom'
// import { UserAuth } from '../context/AuthContext'


// const Signup = () => {
// const [email, setEmail] = useState('')
// const [password, setPassword] = useState('')
// const {user, signUp} = UserAuth()

// const handleSubmit = async (e) =>{
//     e.preventDefault();
//     try{
//         await signUp(email, password)
//     } catch(error){
// console.log(error)
//     }
// }


//   return (
//     <>
   
//     <div className='w-full h-screen'>
//     <img 
//     className=' absolute w-full h-full object-cover'
//     src="https://www.notebookcheck.net/fileadmin/Notebooks/News/_nc3/netflixteaser.png" alt="/" />
//     <div className='bg-black/60 fixed top-0 left-0 w-full h-screen'></div>
//     <div className='fixed w-full px-4 py-24 z-50'>
//     <div className='max-w-[450px] h-[500px] mx-auto bg-black/75 text-white'>
//     <div className='max-w-[320px] mx-auto py-16 '>
// <h1 className='text-3xl font-bold text-center  '>SIGN UP</h1>
// <form onSubmit={handleSubmit}
//  className='w-full flex flex-col py-4' >
//     <input
//     onChange={(e)=>setEmail(e.target.value)}
//     className='p-3 my-2 bg-gray-700 rounded'
//      type="email"
//       placeholder='Email'
//        autoCapitalize='email'/>
//     <input 
//     onChange={(e)=>setPassword(e.target.value)}
//     className='p-3 my-2 bg-gray-700 rounded'
//      type="password" 
//     placeholder='password' 
//     autoComplete='current-password' />
// <button className='bg-red-600 py-3 my-6 rounded font-bold'>Sign Up</button>
// <div className='flex justify-between items-center text-sm text-gray-600'>
//     <p><input type="checkbox" className='mr-2'/>Remember me</p>
//     <p>Need Help</p>
// </div>
// <p className='py-8 '><span className='text-gray-600 '>Already a subscriber of  netflix?</span>{''} <Link to='/login'>Sign In</Link></p>
// </form>
//     </div>
// </div>
//     </div>
//     </div>
//     </>
//   )
// }

// export default Signup









// import { createContext, useContext, useEffect, useState } from "react";
// import {auth} from '../firebase'
// import{createUserWithEmailAndPassword,signInWithEmailAndPassword,
// signOut,onAuthStateChanged} from 'firebase/auth'




// const AuthContext = createContext()

// export function AuthContextProvider({children}){
// const [user,setUser] = useState({})

// function signUp(email, password){
//     return createUserWithEmailAndPassword(auth, email, password)
// }

// function logIn(email, password){
//     return signInWithEmailAndPassword(auth, email, password)
// }

// function logOut(){
//     return signOut(auth)
// }


// useEffect(()=>{
//     const unsubscribe = onAuthStateChanged(auth, (currentUser)=>{
//         setUser(currentUser)
//     });
//     return () =>{
//         unsubscribe();
//     }
// })

// return(
// <AuthContext.Provider value={{signUp, logIn, logOut, user}}>{children}</AuthContext.Provider>
// )

// }

// export function UserAuth() {
//     return useContext(AuthContext)
// } 