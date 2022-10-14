import { useContext, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { UserContext } from '../../contexts/UserContext'


export const Login = () => {

    const { setUser } = useContext(UserContext)
    const username = useRef()
    const password = useRef()

    const navigate = useNavigate()

    const handleLogin = (e) => {
        e.preventDefault()
        const user = {
            username: username.current.value,
            password: password.current.value
        }
        setUser(user)
        localStorage.setItem('user', JSON.stringify(user))

        navigate('/')
    }

    return (
        <div className="mt-5 col-6 mx-auto card p-4 shadow-l">
            <h1 className="text-center mb-3">Bienvenido a Wheather</h1>
            <form action="" onSubmit={handleLogin}>
                <div className="mb-3">
                    <label className="form-label">Nombre de usuario</label>
                    <input
                        type="text"
                        className='form-control'
                        placeholder="Ingrese su nombre de usuario"
                        ref={username}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Contraseña</label>
                    <input
                        type="password"
                        className='form-control'
                        placeholder="Ingrese su nombre de contraseña"
                        ref={password}
                        required
                    />
                </div>
                <div className='d-flex justify-content-center'>
                    <button className='btn btn-primary' type='submit'>Iniciar Sesion</button>
                </div>
            </form>
        </div>
    )
}
