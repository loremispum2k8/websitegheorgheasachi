import { useRef, useEffect, useState} from 'react'

import {NavLink} from 'react-router-dom'


function Community({id,elementRef,elementStyles}){
    return(
        <div ref={elementRef} id={id} className={`communityContainer ${elementStyles}`}>
            <h1 className='communityHeader'>Comunitate</h1>
            <div className='communityContent'>
                <div className='communityImage'><img src="https://i.imgur.com/M8iNJtk.jpeg" alt="" /></div>
                <div className='communityText'>
                    <div className='communityStatsContainer'>
                        <h2 className='communityNumbers'>30.000+</h2>
                        <h4 className='communityStat'>absolvenți</h4>
                    </div>
                    <div className='communityStatsContainer'>
                        <h2 className='communityNumbers'>65+</h2>
                        <h4 className='communityStat'>cadre didactice</h4>
                    </div>
                    <div className='communityStatsContainer'>
                        <h2 className='communityNumbers'>600+</h2>
                        <h4 className='communityStat'>olimpici raionali</h4>
                    </div>
                    <div className='communityStatsContainer'>
                        <h2 className='communityNumbers'>25+</h2>
                        <h4 className='communityStat'>olimpici republicani</h4>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Community