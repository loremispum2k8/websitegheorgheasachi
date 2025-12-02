import { useRef, useEffect, useState } from 'react'

import {NavLink} from 'react-router-dom'

function Menu(){
    const [menuIsExpanded, setMenuIsExpanded] = useState(false)

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
        setMenuIsExpanded(true)
   }

   function hideMenu(){
        expandableMenu.current.classList.remove('expandMenu')
        blackMenu.current.classList.remove('blackMenu')
        invertText.current.classList.remove('invertText')
        closingIcon.current.classList.remove('enabledClosingIcon')
        menuIcon.current.classList.remove('disableMenuIcon')
        document.body.style.overflow = "scroll"
        setMenuIsExpanded(false)
   }

   useEffect(()=>{
        function handleResize(){
            if(menuIsExpanded && window.innerWidth > 950){
                hideMenu()
            }
        }
        window.addEventListener('resize',handleResize)

        return ()=>{
            window.removeEventListener('resize',handleResize)
        }
    },[menuIsExpanded])
    

    return(
        <div className='menuContainer'>
            <div ref={blackMenu} className="menu">
            <NavLink to='/'><img ref={invertText} className="menuSchoolName" src="https://i.imgur.com/Qfn4qxY.png" alt=""/></NavLink>

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

            <img ref={menuIcon} onClick={expandMenu} className='expandableMenuIcon' src="https://i.imgur.com/LLd95V0.png" alt="" />
            <img ref={closingIcon} onClick={hideMenu} className='closeExpandableMenuIcon' src="https://i.imgur.com/pFR3QlR.png" alt="" />
            </div>

            {/*For mobile only*/}
            <div ref={expandableMenu} className='expandableMenu'>
                <div className="expandableNavLinks">
                    <NavLink className='expandableMenuLinks'>Acasă</NavLink>
                    <NavLink className='expandableMenuLinks'>Noutăți</NavLink>
                    <NavLink className='expandableMenuLinks'>Administrație</NavLink>
                    <NavLink className='expandableMenuLinks'>Contacte</NavLink>
                </div>
                <img className='menuFirstHalf' src="https://i.imgur.com/aLOMjMQ.png" alt="" />
                <img className='menuSecondHalf' src="https://i.imgur.com/aLOMjMQ.png" alt="" />
            </div>{/*For mobile only*/}
        </div>
    )
}
export default Menu