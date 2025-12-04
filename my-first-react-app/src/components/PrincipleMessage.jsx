import { useRef, useEffect, useState} from 'react'

import {NavLink} from 'react-router-dom'

function PrincipleMessage(){
    return(
        <div className='principleContainer'>
            <div className='principleQuotedContainer'>
                <h2 className='principleMessage'>
                    În competiţia cu timpul, fiecare doreşte să se simtă victorios prin ceea ce face în activitatea de zi cu zi. Şi dacă uităm să ne consultăm cu ceasul, atunci, la sigur, vine şi recompensa – satisfacţia victoriei. 
                </h2>
                <p className='principleName'>Directorul Liceului Gheorghe Asachi <br /> Gheorghe Primac
                </p>
                <img className='quote' src="https://i.imgur.com/dHAp5CZ.png" alt="" />
            </div>
            <div className='principleImage'><img src="https://i.imgur.com/rWp7QuZ.jpeg" alt="" /></div>
        </div>
    )
}

export default PrincipleMessage