import React, { ReactNode, useContext } from 'react'
import { ROUTES } from '../../Utils/routes'
import { Link } from 'react-router-dom'
import { useAuthContext } from '../../App/App'

interface InoteAutorizet{
    children?:ReactNode
}
export const NotAutorizet:React.FC<InoteAutorizet> = ({children}) => {
    const authContext = useContext(useAuthContext)

  return (
     <div className={!authContext.useAuth ? 'authorized-visible' : 'authorized-hidden'}>
        {children}
        <Link style={{color: `var(--red)`}} to={ROUTES.REGISTRATION}> Вход или Зарегистрирация</Link>
    </div>
  )
}


