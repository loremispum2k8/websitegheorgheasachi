import { useRef, useEffect, useState} from 'react'

import {NavLink} from 'react-router-dom'


function Community(){
    return(
        <div className='communityContainer'>
            <h1 className='communityHeader'>Community</h1>
            <div className='communityContent'>
                <img className='communityImage' src="https://i.imgur.com/myGqADo.jpeg" alt="" />
                <div className='communityText'>
                    <div className='communityStatsContainer'>
                        <h2 className='communityNumbers'>30.000+</h2>
                        <h4 className='communityStat'>absolvenți</h4>
                    </div>
                    <div className='communityStatsContainer'>
                        <h2 className='communityNumbers'>49</h2>
                        <h4 className='communityStat'>cadre didactice</h4>
                    </div>
                    <div className='communityStatsContainer'>
                        <h2 className='communityNumbers'>20</h2>
                        <h4 className='communityStat'>olimpici raionali</h4>
                    </div>
                    <div className='communityStatsContainer'>
                        <h2 className='communityNumbers'>5</h2>
                        <h4 className='communityStat'>olimpici republicani</h4>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Community