import { useRef, useEffect, useState} from 'react'

import {NavLink} from 'react-router-dom'


function Menu({pageNumber}){
    const [menuIsExpanded, setMenuIsExpanded] = useState(false)

    const menuContainer = useRef()
    const blackMenu = useRef()
    const menuIcon = useRef()
    const closingIcon = useRef()
    const invertText = useRef()
    const expandableMenu = useRef()
    const expandableNavLinks = useRef()
    const firstLink = useRef()
    const secondLink = useRef()
    const thirdLink = useRef()
    const forthLink = useRef()

    let currentScroll = 0;

    useEffect(()=>{
        function updateScrollValue(){
            if(window.scrollY > currentScroll){
                menuContainer.current.classList.add('hideMenu')
                menuContainer.current.classList.remove('showMenu')
            }else{
                menuContainer.current.style.display = 'flex'
                menuContainer.current.classList.remove('hideMenu')
                menuContainer.current.classList.add('showMenu')
            }

            if(window.scrollY === 0){
                menuContainer.current.classList.add('hideMenu')
                menuContainer.current.classList.remove('showMenu')
            }

            currentScroll = window.scrollY;
        }
        window.addEventListener('scroll',updateScrollValue)

        return()=>{
            window.removeEventListener('scroll',updateScrollValue)
        }
    },[])


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

        setTimeout(()=>{
            firstLink.current.classList.add('showLink')
        },100)
        setTimeout(()=>{
            secondLink.current.classList.add('showLink')
        },200)
        setTimeout(()=>{
            thirdLink.current.classList.add('showLink')
        },300)
        setTimeout(()=>{
            forthLink.current.classList.add('showLink')
        },400)
        
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

        firstLink.current.classList.remove('showLink')
        secondLink.current.classList.remove('showLink')
        thirdLink.current.classList.remove('showLink')
        forthLink.current.classList.remove('showLink')


        document.body.style.overflow = "scroll"
        setMenuIsExpanded(false)
   }

   useEffect(()=>{
        function handleResize(){
            if(menuIsExpanded && window.innerWidth > 950){
                hideMenu()
            }else if(window.innerWidth > 950){
                menuIcon.current.style.display = 'none'
            }else if(window.innerWidth <= 950){
                menuIcon.current.style.display = 'flex'
            }
        }
        window.addEventListener('resize',handleResize)

        return ()=>{
            window.removeEventListener('resize',handleResize)
        }
    },[menuIsExpanded])
    

    return(
        <div ref={menuContainer} className='menuContainer'>
            <div ref={blackMenu} className="menu">
            <picture ref={invertText}>
                <NavLink to='/'><source media="(max-width: 500px)" src="https://i.imgur.com/zZs5qiC.png"/></NavLink>
                <NavLink to='/'><img className="menuSchoolName" src="https://i.imgur.com/dYSECNc.png" alt=""/></NavLink>
            </picture>

            <div className="menuItems">
                <div className='linkContainer'>
                    <NavLink to='/' className = {pageNumber === 1 ? 'menuLinks activeMenuLink' : 'menuLinks'}>Acasă</NavLink>
                    <div className = {pageNumber === 1 ? 'activeLinkIndicator' : ''}></div>
                </div>
                <div className='linkContainer'>
                    <NavLink to='/noutăți' className = {pageNumber === 2 ? 'menuLinks activeMenuLink' : 'menuLinks'}>Noutăți</NavLink>
                    <div className = {pageNumber === 2 ? 'activeLinkIndicator' : ''}></div>
                </div>
                <div className='linkContainer'>
                    <NavLink to='/administrație' className = {pageNumber === 3 ? 'menuLinks activeMenuLink' : 'menuLinks'}>Administrație</NavLink>
                    <div className = {pageNumber === 3 ? 'activeLinkIndicator' : ''}></div>
                </div>
                <div className='linkContainer'>
                    <NavLink to='/contacte' className = {pageNumber === 4 ? 'menuLinks activeMenuLink' : 'menuLinks'}>Contacte</NavLink>
                    <div className = {pageNumber === 4 ? 'activeLinkIndicator' : ''}></div>
                </div>
            </div>

            <img ref={menuIcon}  onClick={expandMenu} className='expandableMenuIcon' src="https://i.imgur.com/LLd95V0.png" alt="" />
            <img ref={closingIcon} onClick={hideMenu} className='closeExpandableMenuIcon' src="https://i.imgur.com/pFR3QlR.png" alt="" />
            </div>

            {/*For mobile only*/}
            <div ref={expandableMenu} className='expandableMenu'>
                <div ref={expandableNavLinks} className="expandableNavLinks">
                    <NavLink to='/' ref={firstLink} className='expandableMenuLinks'><p>Acasă</p></NavLink>
                    <NavLink to='/news' ref={secondLink} className='expandableMenuLinks'><p>Noutăți</p></NavLink>
                    <NavLink to='/administration' ref={thirdLink} className='expandableMenuLinks'><p>Administrație</p></NavLink>
                    <NavLink to='/contacts' ref={forthLink} className='expandableMenuLinks'><p>Contacte</p></NavLink>
                </div>
                <img className='menuFirstHalf' src="https://i.imgur.com/T3itaGv.png" alt="" />
                <img className='menuSecondHalf' src="https://i.imgur.com/T3itaGv.png" alt="" />
            </div>{/*For mobile only*/}
        </div>
    )
}
export default Menu