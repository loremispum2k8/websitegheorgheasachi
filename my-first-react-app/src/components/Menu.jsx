import { useRef } from 'react'

import {NavLink} from 'react-router-dom'

function Menu(){

    const blackMenu = useRef()
    const menuIcon = useRef()
    const closingIcon = useRef()
    const invertText = useRef()
    const expandableMenu = useRef()

   function expandMenu(){
        expandableMenu.current.classList.add('expandMenu')
        blackMenu.current.classList.add('blackMenu')
        invertText.current.classList.add('invertText')
        closingIcon.current.classList.add('enabledClosingIcon')
        menuIcon.current.classList.add('disableMenuIcon')
        document.body.style.overflow = "hidden"
   }

   function hideMenu(){
        expandableMenu.current.classList.remove('expandMenu')
        blackMenu.current.classList.remove('blackMenu')
        invertText.current.classList.remove('invertText')
        closingIcon.current.classList.remove('enabledClosingIcon')
        menuIcon.current.classList.remove('disableMenuIcon')
        document.body.style.overflow = "scroll"
   }
    

    return(
        <div className='menuContainer'>
            <div ref={blackMenu} className="menu">
            <img ref={invertText} className="menuSchoolName" src="/src/assets/images/menuSchoolName.png" alt=""/>

            <div className="menuItems">
                <div className='linkContainer'>
                    <NavLink to='/' className='menuLinks activeMenuLink'>Acasă</NavLink>
                    <div className='activeLinkIndicator'></div>
                </div>
                <div className='linkContainer'>
                    <NavLink to='/error' className='menuLinks'>Noutăți</NavLink>
                    <div className=''></div>
                </div>
                <div className='linkContainer'>
                    <NavLink to='/' className='menuLinks'>Administrație</NavLink>
                    <div className=''></div>
                </div>
                <div className='linkContainer'>
                    <NavLink to='/' className='menuLinks'>Contacte</NavLink>
                    <div className=''></div>
                </div>
            </div>

            <img ref={menuIcon} onClick={expandMenu} className='expandableMenuIcon' src="/src/assets/icons/menu.png" alt="" />
            <img ref={closingIcon} onClick={hideMenu} className='closeExpandableMenuIcon' src="/src/assets/icons/close.png" alt="" />
            </div>

            {/*For mobile only*/}
            <div ref={expandableMenu} className='expandableMenu'>
                <div className="expandableNavLinks">
                    <NavLink className='expandableMenuLinks'>Acasă</NavLink>
                    <NavLink className='expandableMenuLinks'>Noutăți</NavLink>
                    <NavLink className='expandableMenuLinks'>Administrație</NavLink>
                    <NavLink className='expandableMenuLinks'>Contacte</NavLink>
                </div>
                <img className='menuFirstHalf' src="/src/assets/images/logoNoBg.png" alt="" />
                <img className='menuSecondHalf' src="/src/assets/images/logoNoBg.png" alt="" />
            </div>{/*For mobile only*/}
        </div>
    )
}
export default Menu