import { useRef, useEffect, useState, use } from 'react'

import {NavLink} from 'react-router-dom'

function Menu(){
    const [menuIsExpanded, setMenuIsExpanded] = useState(false)

    const blackMenu = useRef()
    const menuIcon = useRef()
    const closingIcon = useRef()
    const invertText = useRef()
    const expandableMenu = useRef()
    const expandableNavLinks = useRef()


   function expandMenu(){
        blackMenu.current.classList.remove('turnMenuWhite')
        blackMenu.current.classList.add('turnMenuBlack')

        invertText.current.classList.remove('invertImageToBlack')
        invertText.current.classList.add('invertImageToWhite')

        menuIcon.current.classList.remove('showMenuIcon')
        menuIcon.current.classList.add('hideMenuIcon')
        setTimeout(menuIcon.current.style.display = 'none',150)

        closingIcon.current.style.display = 'flex'
        closingIcon.current.classList.remove('hideClosingIcon')
        closingIcon.current.classList.add('showClosingIcon')

        expandableMenu.current.style.display = 'flex'
        expandableMenu.current.classList.remove('raiseTheMenu')
        expandableMenu.current.classList.add('dropTheMenu')

        expandableNavLinks.current.classList.add('grow')
        
        document.body.style.overflow = "hidden"
        setMenuIsExpanded(true)
   }

   function hideMenu(){

        blackMenu.current.classList.remove('turnMenuBlack')
        blackMenu.current.classList.add('turnMenuWhite')

        invertText.current.classList.remove('invertImageToWhite')
        invertText.current.classList.add('invertImageToBlack')

        menuIcon.current.style.display = 'flex'
        menuIcon.current.classList.remove('hideMenuIcon')
        menuIcon.current.classList.add('showMenuIcon')

        closingIcon.current.classList.remove('showClosingIcon')
        closingIcon.current.classList.add('hideClosingIcon')
        setTimeout(closingIcon.current.style.display = 'none',150)
        

        expandableMenu.current.classList.remove('dropTheMenu')
        expandableMenu.current.classList.add('raiseTheMenu')

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

            <img ref={menuIcon}  onClick={expandMenu} className='expandableMenuIcon' src="https://i.imgur.com/LLd95V0.png" alt="" />
            <img ref={closingIcon} onClick={hideMenu} className='closeExpandableMenuIcon' src="https://i.imgur.com/pFR3QlR.png" alt="" />
            </div>

            {/*For mobile only*/}
            <div ref={expandableMenu} className='expandableMenu'>
                <div ref={expandableNavLinks} className="expandableNavLinks">
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