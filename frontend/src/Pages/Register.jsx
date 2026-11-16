import React from "react"
import { Link } from "react-router"
import { FaLightbulb } from "react-icons/fa6";
import { SlNotebook } from "react-icons/sl";
import { FaSearch } from "react-icons/fa";
import { Eye, EyeOff } from "lucide-react";

export default function Register(){
    return(<>
        <div className="min-h-screen flex justify-content align-center">
            {/* Left side */}
            <div className="bg-blue-400 min-w-[50%] flex flex-col pl-10 pt-7">

                <h1 className="text-white text-4xl font-bold">NoteAI</h1>

                <div className="pt-18 ">
                    <p className="text-white text-6xl font-bold">Turn your thoughts into clarity</p>
                    <p className="text-white text-xl mt-7">Write faster, organize smarter, and let AI help you think.</p>
                </div>

                <div className="mt-14 flex flex-col gap-4 ">
                    <div className="flex items-center">
                        <span className=""><FaLightbulb/></span>
                        <p className="pl-2">Caputre ideas instantly</p>
                    </div>
                    <div className="flex items-center">
                        <span className=""><SlNotebook/></span>
                        <p className="pl-2">Summarize in seconds</p>
                    </div>
                    <div className="flex items-center">
                        <span className=""><FaSearch/></span>
                        <p className="pl-2">Find anything with smart search</p>
                    </div>
            </div>


            </div>
            {/* Right site */}
            <div className="min-w-[50%] flex flex-col justify-center items-center">

                <form className="h-auto relative ">
                    <h1 className="text-2xl font-bold text-center">Create Your Account</h1>
                    <h4 className="text-gray-400 text-[14px] text-center">Start organizing your thinking today</h4>

                     <div className="flex flex-col mt-4">
                        <label htmlFor="name" className="text-black">Full Name:</label>
                        <input type="text" id="name" name="name" className="w-full border border-gray-300 rounded-lg px-3 py-1 text-sm" placeholder="Jhon Cena" />
                    </div>

                    <div className="flex flex-col mt-2">
                        <label htmlFor="email" className="text-black">Email:</label>
                        <input type="text" id="email" name="email" className="w-full border border-gray-300 rounded-lg px-3 py-1 text-sm" placeholder="you@example.com" />
                    </div>

                    <div className="relative flex flex-col mt-2">
                        <label htmlFor="email" className="text-black">Password:</label>
                        <input type="text" id="email" name="email" className="w-full border border-gray-300 rounded-lg px-3 py-1 text-sm" placeholder="Enter your password" />
                        <Eye className="absolute mt-7 right-2 text-gray-500" size={18}/>
                    </div>

                    <div className="min-w-full flex justify-between mt-4">
                        <p className="flex text-sm gap-1">
                            <input type="checkbox" className="text-sm"/>
                            Remember me
                        </p>

                        <p className="text-blue-800 text-sm">
                            Forget password?
                        </p>
                    </div>

                    <button type="submit" className="w-full font-bold bg-blue-400 mt-3 py-1 rounded-lg">Create account</button>

                    <div className="mt-3 flex items-center gap-3 text-sm text-gray-400">
                        <div className="h-px flex-1 bg-gray-300" />
                            <span>or Signup With</span>
                        <div className="h-px flex-1 bg-gray-300" />
                    </div>
                                                                                                    
                    <button className="w-full text-center border border-gray-400 rounded-lg mt-4 py-1">Continue with google</button>
                    <button className="w-full text-center border border-gray-400 rounded-lg mt-4 py-1">Continue with Microsoft</button>

                    <p className="text-[12px] mt-1">By creating an account, you agree to our Terms and Privacy Policy.</p>
                    <p className="text-[12px] text-center mt-3 relative">
                        Already have an account? 
                        <Link className="text-blue-800" to="/"> Sign in</Link>
                    </p>

                </form>

                <p className="text-[12px] text-gray-500 mt-2">@2025 NoteAI</p>

            </div>
        </div>
    </>)
}
