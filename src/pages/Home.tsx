import { useHistory } from 'react-router-dom';

import { auth, firebase } from '../services/firebase'

import illustrationImg from '../assets/images/illustration.svg';
import logoImg from '../assets/images/logo.svg';
import googleIconImg from '../assets/images/google-icon.svg';

import { Button } from '../components/Button';

import "../styles/auth.scss"



export function Home() {
    // Criando um HOOK e todo hook tem que
    // Está dentro do componentes
    // Crio a função de navegar e disparo no botão
    const history = useHistory()

    function handleCreateRoom() {
        // Autenticação do usuário com o google
        const provider = new firebase.auth.GoogleAuthProvider()
        
        // Abrindo o login do google como popup
        // E depois do login vou ter um resultado
        auth.signInWithPopup(provider).then( result => {
            console.log( result )
        })

        // history.push('/rooms/new')
    }
    
    return (
        <div id="page-auth">
            <aside>
                <img src={illustrationImg} alt="Ilustração simbolizando perghuntas e respostas" />
                <strong>Crie salas de Q&amp;A ao-vivo</strong>
                <p>Tire as dúvidas da sua audiência em tempo-real</p>
            </aside>
            <main>
                <div className="main-content">
                    <img src={logoImg} alt="Letmeask" />
                    <button onClick={ handleCreateRoom } className="create-room">
                        <img src={googleIconImg} alt="Logo do google" />
                        Crie sua sala com o Google
                    </button>
                    <div className="separator">ou entre em uma sala</div>
                    <form>
                        <input
                            type="text"
                            placeholder="Digite o código da sala"
                        />
                        <Button type="submit">
                            Entrar na sala
                        </Button>
                    </form>
                </div>
            </main>
        </div>
    )
}