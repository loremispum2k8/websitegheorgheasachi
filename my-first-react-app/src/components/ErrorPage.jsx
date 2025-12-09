import { NavLink } from "react-router"

function ErrorPage(){
    return(
        <div className="errorContainer">
            <h1 className="error404">404</h1>
            <h3 className="errorContent">Ups... Pagina nu a fost găsită</h3>
            <NavLink className='errorLink' to='/'>Întorceți-vă la pagina principală</NavLink>
        </div>
    )
}

export default ErrorPage