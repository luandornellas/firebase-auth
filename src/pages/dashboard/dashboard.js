import { signOut } from "firebase/auth"
import { auth } from "../../firebase/firebase"
import { useNavigate } from "react-router-dom"

export default function DashBoard(){

    const nav = useNavigate()

function logoff(){
    signOut(auth)
    .then(() => {
        nav('/')
    }).catch((error) => {
        console.log("Error logoff" + error)
    })
}

return(
    <div>
        <h1>Olá</h1>
        <button onClick={logoff}>Sair</button>
    </div>
)
}