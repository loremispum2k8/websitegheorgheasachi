import { NavLink } from "react-router"

function ErrorPage(){
    return(
        <div>
            <h1>Eroare</h1>
            <h3>Nu se poate gasi pagina dorita</h3>
            <h3>Va rog sa va reintoarceti: <NavLink to='/'>Acasa</NavLink> </h3>
        </div>
    )
}

export default ErrorPageNavLink