import React, { useContext } from 'react'
import './Main.css'
import {assets} from '../../assets/assets'
import { Context } from '../../context/Context'

const Main = () => {

    const {onSent, recentPrompt, showResult, loading, resultData, setInput, input} = useContext(Context)

    return(
        <div className='main'>
            <div className="nav">
                <p>SaachitGemini</p>
                <img src={assets.user_icon} alt=""/>
            </div>
            <div className="mainContainer">

                {!showResult
                ?<>

                <div className="greet">
                    <p><span>Hello, Saachit.</span></p>
                    <p>How can I help you today?</p>
                </div>
                <div className="cards">
                    <div className="card">
                        <p>Suggest beautiful places to visit in Washington</p>
                        <img src={assets.bulb_icon} alt=""/>
                    </div>
                    <div className="card">
                        <p>Breifly summarize this concept: Drag Reduction System</p>
                        <img src={assets.message_icon} alt=""/>
                    </div>
                    <div className="card">
                        <p>Brainstorm activities for a road trip</p>
                        <img src={assets.compass_icon} alt=""/>
                    </div>
                    <div className="card">
                        <p>Improve the readability of the following code</p>
                        <img src={assets.code_icon} alt=""/>
                    </div>
                </div>
                </>
                :<div className="result">
                    <div className="resultTitle">
                        <img src={assets.user_icon} alt="" />
                        <p>{recentPrompt}</p>
                    </div>
                    <div className="resultData">
                        <img src={assets.gemini_icon} alt="" />
                        {loading
                        ?<div className="loader">
                            <hr />
                            <hr />
                            <hr />
                        </div> 
                        :<p dangerouslySetInnerHTML={{__html:resultData}}></p>
                        }
                    </div>
                </div>
                }

                <div className="mainBottom">
                    <div className="searchBox">
                        <input onChange={(e)=>setInput(e.target.value)} value={input} type="text" placeholder="Enter a prompt here" />
                        <div>
                            <img src={assets.gallery_icon} alt="" />
                        </div>
                        <div>
                            <img src={assets.mic_icon} alt="" />
                        </div>
                        <div>
                            {input?<img onClick={()=>onSent()} src={assets.send_icon} alt="" />:null}
                        </div>
                    </div>
                    <p className="bottomInfo">
                        This is made by Saachit Durga. Due to this it will likeley be inaccurate, stupid, and odd. Do not blame me for this, blame youtube.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Main