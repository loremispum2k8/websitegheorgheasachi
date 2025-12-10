import { useRef, useEffect, useState} from 'react'

import {NavLink} from 'react-router-dom'



function NewsTop(){
    return(
        <div className='newsTopContainer'>
            <h1 className='newsTopTitle'>Noutăți</h1>
            <div className='newsTopContent'>
                <div className='mainNewsBigGrid'>
                <div className='new news1'>
                    <div className='newsImage'><img src="https://i.imgur.com/V23bNq2.png" alt="" /></div>
                    <div className='news1Content'>
                        <h1 className='news1Title'>Competiție internațională pentru pasionații de engleză</h1>
                        <p className='news1Description'>Concursul a reunit 138 elevi care au rezolvat teste creative, promovând studiul limbii engleze.</p>
                        <div className='newsInlineInfo'>
                            <p className='newsDate'>Nov 20 2025</p>
                            <div className='newsOrangeDot'></div>
                            <p className='readingTime'>Se citește în 2 minute</p>
                        </div>
                    </div>
                </div>
                <div className='new news2 news23'>
                    <div className='newsImage'><img src="https://i.imgur.com/eO2BmkG.png" alt="" /></div>
                    <div className='smallNewsContent'>
                        <h1 className='news23Title'>Călătoria pâinii văzută prin ochi de copii</h1>
                        <div className='news23Info'>
                            <p className='newsDate'>Nov 18 2025</p>
                            <div className='news23line'></div>
                            <p className='readingTime'>Se citește în 3 minute</p>
                        </div>
                    </div>
                </div>
                <div className='new news3 news23'>
                    <div className='newsImage'><img src="https://i.imgur.com/ZUHgi8B.png" alt="" /></div>
                    <div className="smallNewsContent">
                        <h1 className='news23Title'>Celebrând diversitatea în ziua internațională a autismului</h1>
                        <div className='news23Info'>
                            <p className='newsDate'>Nov 16 2025</p>
                            <div className='news23line'></div>
                            <p className='readingTime'>Se citește în 1 minut</p>
                        </div>
                    </div>
                </div>
                </div>
                <div className='mediumNewsContainer'>
                        <div className='new news4 news45'>
                        <div className='newsImage'><img src="https://i.imgur.com/TdsCbAS.png" alt="" /></div>
                        <div className="mediumNewsContent">
                            <h1 className='news45Title'>Elevii clasei a X-a B învăță primul ajutor</h1>
                            <p className='news45Description'>Concursul a reunit 138 elevi care au rezolvat teste creative, promovând studiul limbii engleze.</p>
                            <div className='newsInlineInfo'>
                                <p className='newsDate'>Nov 20 2025</p>
                                <div className='newsOrangeDot'></div>
                                <p className='readingTime'>Se citește în 2 minute</p>
                            </div>
                        </div>
                    </div>
                    <div className='new news5 news45'>
                        <div className='newsImage'><img src="https://i.imgur.com/9M0Nk06.png" alt="" /></div>
                        <div className="mediumNewsContent">
                            <h1 className='news45Title'>Întâlnirea cu absolvenții 2025 „Gala Asachi: Reflectoare, Cameră, Reuniune!”</h1>
                            <p className='news45Description'>Gala Asachi reunește anual absolvenții, într-o ceremonie emoționantă ce celebrează recunoștința, realizările și legătura cu școala lor.</p>
                            <div className='newsInlineInfo'>
                                <p className='newsDate'>Nov 20 2025</p>
                                <div className='newsOrangeDot'></div>
                                <p className='readingTime'>Se citește în 2 minute</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NewsTop