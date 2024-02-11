"use client"
import React, { useEffect, useState } from 'react'
import jainLogo from "../../JainismLogo.svg";
import Image from 'next/image';
import { Toaster, toast } from 'react-hot-toast';
import { CgLogOut } from "react-icons/cg";
import { auth } from '@/firebase';
import { onAuthStateChanged } from 'firebase/auth';
import { useRouter } from 'next/navigation';

const Chat = () => {
    const redirect = useRouter();
    const IsUserLoggedIn = () => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                // User is signed in, see docs for a list of available properties
                // https://firebase.google.com/docs/reference/js/auth.user
                // ...
            } else {
                // User is signed out
                redirect.push("/");
                // ...
            }
        });
    }
    const [removeAlert, setremoveAlert] = useState(false);
    const textAreaClick = () => {
        if (!removeAlert) {
            toast.error("Please Accept Terms & Condition and Privacy Policy");
        }
    }

    useEffect(()=>{
        IsUserLoggedIn();
    },[auth.currentUser])

    return (
        <div>
            <Toaster />
            <div role="alert" className={`alert m-4 w-[94vw] lg:w-[98vw] ${removeAlert ? "hidden" : ""}`}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="stroke-info shrink-0 w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                <span>Please Accept Terms & Condition Before Use</span>
                <div>
                    {/* <button className="btn btn-sm" onClick={() => setremoveAlert(true)}>Deny</button> */}
                    <button className="btn btn-sm btn-primary" onClick={() => setremoveAlert(true)}>Accept</button>
                </div>
            </div>
            <div className='p-4'>
                <CgLogOut size={32} color='grey' onClick={() => auth.signOut()} className="cursor-pointer" />
            </div>
            <div className='flex flex-col m-4'>
                <div className="chat chat-start">
                    <div className="chat-image avatar">
                        <div className="w-10 rounded-full">
                            <img alt="Tailwind CSS chat bubble component" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                        </div>
                    </div>
                    <div className="chat-header">
                        Obi-Wan Kenobi
                        <time className="text-xs opacity-50 pl-1">12:45</time>
                    </div>
                    <div className="chat-bubble">You were the Chosen One!</div>
                    <div className="chat-footer opacity-50">
                        Answered
                    </div>
                </div>
                <div className="chat chat-end">
                    <div className="chat-image avatar">
                        <div className="w-10 rounded-full">
                            <Image src={jainLogo} alt='logo' width={10} />
                        </div>
                    </div>
                    <div className="chat-header">
                        Anakin
                        <time className="text-xs opacity-50 pl-1">12:46</time>
                    </div>
                    <div className="chat-bubble">I hate you!</div>
                </div>
            </div>
            <div onClick={textAreaClick} className='w-full'>
                {/* <input type="text" placeholder="Type here" className="m-4 input input-bordered input-primary w-[98vw]" /> */}
                <textarea disabled={!removeAlert} className="absolute bottom-2 textarea textarea-primary m-3 w-[95vw] lg:w-[98vw] outline-none focus:outline-none remove border-2 border-teal-500" placeholder="Provide your doubts and questions"></textarea>
            </div>
        </div>
    )
}

export default Chat
