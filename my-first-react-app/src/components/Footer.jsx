import { useRef, useEffect, useState, use} from 'react'
import { HashLink as NavLink } from 'react-router-hash-link';


function Footer({parentLink}){
    function resetScroll(){
        window.scrollTo({
            top:0,
            behavior:"smooth"
        })
    }

    return(
        <div className='footerContainer'>
            <div className='gridFooterLinks'>
                <div className='footerLinks'>
                        <NavLink to='/' onClick={resetScroll} className='mainLink'>Acasă</NavLink>
                        <div className='secondaryLinks'>
                            <NavLink to='/#community' className='secondaryLink'>Comunitate</NavLink>
                            <NavLink to='/#principle' className='secondaryLink'>Mesajul directorului</NavLink>
                            <NavLink to='/#education' className='secondaryLink'>Niveluri de educație</NavLink>
                            <NavLink to='/#clubs' className='secondaryLink'>Cluburi și activități</NavLink>
                            <NavLink to='/#history' className='secondaryLink'>Istoria liceului</NavLink>
                            <NavLink to='/#gallery' className='secondaryLink'>Galerie</NavLink>
                            <NavLink to='/#testimonies' className='secondaryLink'>Testimoniale</NavLink>
                        </div>
                </div>
                <div className='footerLinks'>
                        <NavLink to='/noutăți' onClick={resetScroll} className='mainLink'>Noutăți</NavLink>
                        <div className='secondaryLinks'>
                            <NavLink to='/toate-noutățile' className='secondaryLink'>Toate noutățile</NavLink>
                        </div>
                </div>
                <div className='footerLinks'>
                        <NavLink to='/administrație' onClick={resetScroll} className='mainLink'>Administrație</NavLink>
                        <div className='secondaryLinks'>
                            {/* <NavLink className='secondaryLink'>Personalul liceului</NavLink> */}
                            <NavLink to="/administrație#comisions" className='secondaryLink'>Comisii</NavLink>
                            <NavLink to="/administrație#colaborations" className='secondaryLink'>Colaborări</NavLink>
                            <NavLink to="/administrație#aqcuisitons"className='secondaryLink'>Achiziții publice</NavLink>
                            <NavLink to="/administrație#spendings" className='secondaryLink'>Cheltuieli</NavLink>
                        </div>
                </div>
                <div className='footerLinks'>
                        <NavLink to='/contacte' onClick={resetScroll} className='mainLink'>Contacte</NavLink>
                        <div className='secondaryLinks'>
                            <NavLink to="/contacte#map" className='secondaryLink'>Mapă</NavLink>
                        </div>
                </div>
            </div>
            <div className='footerBottom'>
                <p className='copyright'>Copyright &copy; 2025 <br />  I.P.L.T Gheorghe Asachi mun. Ungheni <br /><i>Site în dezvoltare. Conținutul este actualizat periodic <br /></i></p>
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