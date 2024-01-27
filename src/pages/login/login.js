import { Link, useNavigate } from 'react-router-dom';
import '../../global.css'
import { useEffect, useRef, useState} from 'react';
import { GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import { auth } from '../../firebase/firebase';

export default function Login(){

    const senhaRef = useRef()
    const emailRef = useRef()
    const [user, setUser] = useState(false)
    const [userInfo, setUserInfo] = useState({uid: '', email: ''})
    const nav = useNavigate();
    
    function entrar(e){
        e.preventDefault()
        const senha = senhaRef.current.value;
        const email = emailRef.current.value;

        signInWithEmailAndPassword(auth, email, senha)
        .then(() => {
            console.log("Foi :) login")
        }).catch((error) => {
            console.log("Não foi :(" + error)
        })
    }

    useEffect(() => {

        onAuthStateChanged(auth, (user) => {
            if(user){
                setUser(true)
                setUserInfo({uid: user.uid, email: user.email})
                nav('/dashBoard')
            }
        })
    }, [])

    async function SignUpGoogle(){
        const provider = new GoogleAuthProvider();
        await signInWithPopup(auth, provider)
        .then(() => {
            console.log('Foi popup')
        }).catch((error) => {
            console.log("Não foi popup" + error)
        })
    }

    return(
        <div className="auth">
            <div className='auth-cont'>
                <h1>Olá! Faça Login</h1>
                <form onSubmit={entrar}>

                    <input ref={emailRef} 
                    placeholder='Email' 
                    type='email' 
                    required='required'/>
                    <input ref={senhaRef} placeholder='Senha' type='password' required='required'/>

                    <button>Entrar</button>
                </form>
                <Link>Esqueci a senha</Link>
                <p>Não tem conta ? <Link to='/registrar'>Registra-se</Link></p>
                <hr/>
                <button onClick={SignUpGoogle}>Entrar Com google</button>
            </div>
        </div>
    );
} 
