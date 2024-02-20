"use client"
import React, { useEffect, useState } from 'react'
import jainLogo from "../../JainismLogo.svg";
import Image from 'next/image';
import { Toaster, toast } from 'react-hot-toast';
import { CgLogOut } from "react-icons/cg";
import { auth } from '@/firebase';
import { db } from '@/firebase';
import { onAuthStateChanged } from 'firebase/auth';
import { useRouter } from 'next/navigation';
import { LuSendHorizonal } from "react-icons/lu";
import axios from 'axios';
import { GptResponse } from '@/types';
import Markdown from 'react-markdown';
import { Typewriter } from 'react-simple-typewriter';
import { doc, getDoc, setDoc, updateDoc } from "firebase/firestore";

const Chat = () => {
    const redirect = useRouter();
    const isTermsAccepted = () => {
        const washingtonRef = doc(db, "users", auth.currentUser!.uid);
        getDoc(washingtonRef).then((docSna) => {
            if (docSna.exists() && docSna.data().checked) {
                setremoveAlert(true);
                return;
            }
        }).catch((error) => {
            console.log("Error getting document:", error);
        })
    }

    const IsUserLoggedIn = () => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                // User is signed in, see docs for a list of available properties
                // https://firebase.google.com/docs/reference/js/auth.user
                isTermsAccepted();
                // ...
            } else {
                // User is signed out
                redirect.push("/");
                // ...
            }
        });
    }

    const [removeAlert, setremoveAlert] = useState(false);

    const updateTheCondition = async () => {
        const washingtonRef = doc(db, "users", auth.currentUser!.uid);
        getDoc(washingtonRef).then((docSna) => {
            if (docSna.exists()) {
                return;
            }
        }).catch((error) => {
            console.log("Error getting document:", error);
        })

        await updateDoc(washingtonRef, {
            checked: true
        });
        setremoveAlert(true);
    }

    const [question, setquestion] = useState<Array<String>>([]);
    const [textareaInput, settextareainput] = useState("");
    const [genResponse, setgenResponse] = useState<Array<GptResponse>>([]);
    const onSend = async () => {
        const que = textareaInput;
        setquestion([...question, textareaInput]);
        settextareainput("");
        const res = await axios.post("/api/hello", {
            question: que
        });
        const Chatresponse = await res.data;
        setgenResponse([...genResponse, Chatresponse]);
    }
    const textAreaClick = () => {
        if (!removeAlert) {
            toast.error("Please Accept Terms & Condition and Privacy Policy");
        }
    }

    useEffect(() => {
        IsUserLoggedIn();
    }, [auth.currentUser])

    return (
        <div>
            <Toaster />
            <div role="alert" className={`alert m-4 w-[94vw] lg:w-[97vw] ${removeAlert ? "hidden" : ""}`}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="stroke-info shrink-0 w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                <span>Please Accept Terms & Condition Before Use</span>
                <div>
                    {/* <button className="btn btn-sm" onClick={() => setremoveAlert(true)}>Deny</button> */}
                    <button className="btn btn-sm btn-primary" onClick={updateTheCondition}>Accept</button>
                </div>
            </div>
            <div className='p-4'>
                <CgLogOut size={32} color='grey' onClick={() => auth.signOut()} className="cursor-pointer" />
            </div>
            <div className='max-h-max min-h-[78vh]'>
                {question.map((ele, idx) => (

                    <div key={idx + 1} className='flex flex-col m-4'>
                        <div className={`chat chat-start ${question.length === 0 ? "hidden" : ""}`}>
                            <div className="chat-image avatar">
                                <div className="w-10 rounded-full">
                                    <img alt="Tailwind CSS chat bubble component" src={auth?.currentUser?.photoURL || "https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"} />
                                </div>
                            </div>
                            <div className="chat-header">
                                {auth?.currentUser?.displayName}
                                <time className="text-xs opacity-50 pl-1">{new Date().toLocaleTimeString()}</time>
                            </div>
                            <div className="chat-bubble">{question[idx]}</div>
                            <div className="chat-footer opacity-50">
                                {genResponse[idx]?.message ? "Answered" : "Answering"}
                            </div>
                        </div>
                        <div className={`chat chat-end`}>
                            <div className="chat-image avatar">
                                <div className="w-10 rounded-full">
                                    <Image src={jainLogo} alt='logo' width={10} />
                                </div>
                            </div>
                            <div className="chat-header">
                                JinvaniGPT
                                <time className="text-xs opacity-50 pl-1">{genResponse[idx]?.timestamp}</time>
                            </div>
                            <div className="chat-bubble">
                                {genResponse[idx]?.message ? (

                                    <Markdown>{genResponse[idx]?.message.toString()}</Markdown>

                                ) :
                                    (
                                        <span className="loading loading-ring loading-lg"></span>
                                    )
                                }
                            </div>
                        </div>
                    </div>

                ))
                }
                {/* {
                    genResponse.map((ele, idx) => (

                        <div key={idx + 1} className='flex flex-col m-4'>
                            <div className={`chat chat-start ${question.length === 0 ? "hidden" : ""}`}>
                                <div className="chat-image avatar">
                                    <div className="w-10 rounded-full">
                                        <img alt="Tailwind CSS chat bubble component" src={auth?.currentUser?.photoURL || "https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"} />
                                    </div>
                                </div>
                                <div className="chat-header">
                                    {auth?.currentUser?.displayName}
                                    <time className="text-xs opacity-50 pl-1">{new Date().toLocaleTimeString()}</time>
                                </div>
                                <div className="chat-bubble">{question[idx]}</div>
                                <div className="chat-footer opacity-50">
                                    {ele?.message ? "Answered" : "Answering"}
                                </div>
                            </div>
                            <div className={`chat chat-end ${genResponse.length === 0 ? "hidden" : ""}`}>
                                <div className="chat-image avatar">
                                    <div className="w-10 rounded-full">
                                        <Image src={jainLogo} alt='logo' width={10} />
                                    </div>
                                </div>
                                <div className="chat-header">
                                    JinvaniGPT
                                    <time className="text-xs opacity-50 pl-1">{ele?.timestamp}</time>
                                </div>
                                <div className="chat-bubble"><Markdown>{(ele?.message).toString()}</Markdown></div>
                            </div>
                        </div>
                    ))
                } */}
            </div>
            <div onClick={textAreaClick} className='w-full flex'>
                {/* <input type="text" placeholder="Type here" className="m-4 input input-bordered input-primary w-[98vw]" /> */}

                <textarea disabled={!removeAlert} onKeyDown={(e) => e.keyCode === 13 && e.ctrlKey ? onSend() : null} value={textareaInput} onChange={(e) => settextareainput(e.target.value)} className="textarea textarea-primary m-3 w-[95vw] lg:w-[97vw] outline-none focus:outline-none remove border-2 border-teal-500" placeholder="Provide your doubts and questions">
                </textarea>
                <div className='absolute pt-8 lg:right-7 right-7 md:right-9'>
                    <LuSendHorizonal color='#14B8A6' className='cursor-pointer' onClick={onSend} size={30} />
                </div>
            </div>
        </div>
    )
}

export default Chat
