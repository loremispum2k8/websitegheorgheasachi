import {NavLink} from 'react-router-dom'

function Menu(){
    return(
        <div className="menu">
            <img className="menuSchoolName" src="https://i.imgur.com/FORzK1q.png" alt=""/>

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
                <img className='expandableMenuIcon' src="/src/assets/icons/menu.png" alt="" />
                <img className='closeExpandableMenuIcon' src="/src/assets/icons/close.png" alt="" />
            </div>

            {/*For mobile only*/}
            <div className='expandableMenu'>
                <NavLink className='expandableMenuLinks'>Acasă</NavLink>
                <NavLink className='expandableMenuLinks'>Noutăți</NavLink>
                <NavLink className='expandableMenuLinks'>Administrație</NavLink>
                <NavLink className='expandableMenuLinks'>Contacte</NavLink>
                <img className='menuFirstHalf' src="/src/assets/images/logoNoBg.png" alt="" />
                <img className='menuSecondHalf' src="/src/assets/images/logoNoBg.png" alt="" />
            </div>{/*For mobile only*/}
        </div>
    )
}
export default Menu