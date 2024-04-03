import { ReactComponent as UserIcon } from "../../../../icons/user.svg"
import { styled } from "styled-components";
import { ROUTES } from "../../../../Utils/routes";
import { NavLink } from "react-router-dom";
import { useAuthContext } from "../../../../App/App";
import { useContext } from "react";

const UserIconWrapper = styled.div`
    margin:0 0 0 15px;
    cursor: pointer;

    .active{
        svg{
            background-color: #37332F;
            border-radius:4px;
            width:40px;
            height:40px;
        }
    }
`

export const HeaderUser:React.FC = () =>{
    const authContext = useContext(useAuthContext)
  
    return (
        <UserIconWrapper>
            <NavLink to={authContext.useAuth? ROUTES.USERPAGE : ROUTES.REGISTRATION } state='Регистрация'>
                <UserIcon/>
            </NavLink>
        </UserIconWrapper>
    )
}

   
   
   
