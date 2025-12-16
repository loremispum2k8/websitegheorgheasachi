import { useState, useEffect, useRef } from 'react'
import "./contacts.css"
import {useInView} from 'react-intersection-observer'
import Menu from './components/Menu'
import Footer from './components/Footer'

function Contacts(){
    const app = useRef()
    useEffect(()=>{
        app.current.classList.add('appearDocument')
    },[])

    const { ref: contactsRef, inView: contactsIsVisible} = useInView({triggerOnce:true});

    return(
        <div ref={app} className='contactsContainer'>
            <Menu pageNumber={4}/>
            <div className={` ${contactsIsVisible ? 'communityContentContent showSection': 'communityContentContent'}`} ref={contactsRef}>
                <div className='communityContentText'>
                    <h1 className='contactsTitle'>Contactează liceul</h1>
                    <p className='contactsMessage'>Vă mulțumim că ați vizitat site-ul nostru web.</p>
                    <div className='contactsIconsContainer'>
                        <div className='contactsInline'>
                            <img src="https://i.imgur.com/3TeYFy2.png" alt="" />
                            <p>Telefon: <span>0236-2-08-48 sau 0236-2-08-49</span></p>
                        </div>
                        <div className='contactsInline'>
                            <img src="https://i.imgur.com/UTugLfJ.png" alt="" />
                            <p>Email: <span>gheorgheasachi@mail.ru</span></p>
                        </div>
                        <div className='contactsInline'>
                            <img src="https://i.imgur.com/6ctpnvH.png" alt="" />
                            <p>Locație: <span>Strada Gh.Cristiuc 47, mun. Ungheni</span></p>
                        </div>
                    </div>
                </div>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d667.5199429943752!2d27.79254993950204!3d47.22239512361715!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40cb003508452007%3A0x87a38074db9c5d79!2sLiceul%20Teoretic%20%22Gheorghe%20Asachi%22!5e1!3m2!1sro!2s!4v1765921771987!5m2!1sro!2s" allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
            <Footer/>
        </div>
    )
}

export default Contacts