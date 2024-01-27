import { createUserWithEmailAndPassword } from "firebase/auth";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { auth } from "../../firebase/firebase";


export default function Registro(){

    const emailRef = useRef()
    const senhaRef = useRef()
    const confSenhaRef = useRef()

    function registrar(e){
        e.preventDefault()

        const email = emailRef.current.value;
        const senha = senhaRef.current.value;
        const confSenha = confSenhaRef.current.value;

        if(email != "" && senha == confSenha){
            createUserWithEmailAndPassword(auth, email,senha)
            .then(() => {
                console.log("Foi :)")
                
            }).catch((error) => {
                console.log("Não foi :(" + error)
            })
        }else{
            console.log("Digete sua senha ou as senhas não conferem")
        }
    }

    return(
        <div className="auth">
            <div className='auth-cont'>
                <h1>Registre-se</h1>
                <form onSubmit={registrar}>
                    <input ref={emailRef} placeholder='Email' type='email' required='required'/>
                    <input ref={senhaRef} placeholder='Senha' type='password' required='required'/>
                    <input ref={confSenhaRef} placeholder='Confirmar Senha' type='password' required='required'/>
                    <button>Registra-se</button>
                </form>
                <p>Já tem conta ? <Link to="/"> Login</Link></p>
                <hr/>
            </div>
        </div>
    );
} 