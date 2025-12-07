import { useRef, useEffect, useState, use} from 'react'

import {NavLink} from 'react-router-dom'


function Footer(){
    return(
        <div className='footerContainer'>
            <div className='gridFooterLinks'>
                <div className='footerGroup'>
                    <div className='footerLinks'>
                        <NavLink to='/' className='mainLink'>Acasă</NavLink>
                        <div className='secondaryLinks'>
                            <NavLink className='secondaryLink'>Comunitate</NavLink>
                            <NavLink className='secondaryLink'>Mesajul directorului</NavLink>
                            <NavLink className='secondaryLink'>Niveluri de educație</NavLink>
                            <NavLink className='secondaryLink'>Cluburi și activități</NavLink>
                            <NavLink className='secondaryLink'>Istoria liceului</NavLink>
                            <NavLink className='secondaryLink'>Galerie</NavLink>
                            <NavLink className='secondaryLink'>Testimoniale</NavLink>
                        </div>
                    </div>
                    <div className='footerLine homeFooter'></div>
                </div>
                <div className='footerGroup'>
                    <div className='footerLinks'>
                        <NavLink to='/' className='mainLink'>Noutăți</NavLink>
                        <div className='secondaryLinks'>
                            <NavLink className='secondaryLink'>Noutăți noi</NavLink>
                            <NavLink className='secondaryLink'>Toate noutățile</NavLink>
                        </div>
                    </div>
                    <div className='footerLine newsFooter'></div>
                </div>
                <div className='footerGroup'>
                    <div className='footerLinks'>
                        <NavLink to='/' className='mainLink'>Administrație</NavLink>
                        <div className='secondaryLinks'>
                            <NavLink className='secondaryLink'>Personalul liceului</NavLink>
                            <NavLink className='secondaryLink'>Colaborări</NavLink>
                            <NavLink className='secondaryLink'>Achiziții publice</NavLink>
                            <NavLink className='secondaryLink'>Cheltuieli</NavLink>
                        </div>
                    </div>
                    <div className='footerLine administrationFooter'></div>
                </div>
                <div className='footerGroup'>
                    <div className='footerLinks'>
                        <NavLink to='/' className='mainLink'>Contacte</NavLink>
                        <div className='secondaryLinks'>
                            <NavLink className='secondaryLink'>Mapă</NavLink>
                        </div>
                    </div>
                </div>
            </div>
            <div className='footerBottom'>
                <p className='copyright'>Copyright &copy; 2025 <br />  I.P.L.T Gheorghe Asachi mun. Ungheni <br /><span>- Dezvoltat de <a target='_blank' className='linkedin' href="https://www.linkedin.com/in/vasile-burungiu-a1b1ab308/">Vasile Burungiu</a></span></p>
                <div className='footerLogo'>
                    <img className='footerSchoolLogo' src="https://i.imgur.com/FLBI2qF.png" alt="" />
                    <img className='footerNameLogo' src="https://i.imgur.com/ddtPqi5.png" alt="" />
                </div>
                <div className='footerSocialMedias'>
                    <a target='_blank' href="https://www.instagram.com/ce.gheorghe.asachi.un?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="><img className='socials' src="https://i.imgur.com/hMmaTUB.png" alt="" /></a>
                    <a target='_blank' href=""><img className='socials' src="https://i.imgur.com/Z1TpJyu.png" alt="" /></a>
                    <a target='_blank' href=""><img className='socials' src="https://i.imgur.com/AYnAWyw.png" alt="https://www.facebook.com/p/Liceul-Teoretic-GhAsachi-100057494078263/" /></a>
                </div>
            </div>
        </div>
    )
}

export default Footer