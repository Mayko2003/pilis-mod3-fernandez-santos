import { Link, Outlet } from "react-router-dom"
import { useContext } from 'react'
import { UserContext } from '../../contexts/UserContext'

export const Navigation = () => {

    const { setUser, user } = useContext(UserContext)

    const logout = () => {
        localStorage.removeItem('user')
        setUser(null)
    }

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <span className="nav-brand text-light">Wheater</span>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0 w-100">
                            <li className="nav-item">
                                <Link className="nav-link" to='/'>Home</Link>
                            </li>
                            <li className="nav-item ms-lg-auto">
                                <Link className="nav-link" to={user ? "/ubicacion/create" : "/login"}>Crear Ubicacion</Link>
                            </li>
                            {
                                user ?
                                    (
                                        <li className="nav-item">
                                            <a href="." className="nav-link" onClick={logout}>Cerrar Sesion</a>
                                        </li>
                                    ) :
                                    (
                                        <li className="nav-item">
                                            <Link className="nav-link" to='/login'>Iniciar Sesion</Link>
                                        </li>
                                    )
                            }

                        </ul>
                    </div>
                </div>
            </nav >
            <Outlet />
        </>
    )
}
