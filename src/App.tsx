import { createContext, useState } from 'react'

import { BrowserRouter, Route } from 'react-router-dom'

// Importando o pacote de roteamento de pages
// E convertendo para type
import { Home } from './pages/Home'
import { NewRoom } from './pages/NewRoom'
import { auth, firebase } from './services/firebase'

// Criar tipagem para tratar o tipo de informação o usuário irá receber
type User = {
  id: string;
  name: string;
  avatar: string;
}

// Criar tipagem para tratar os error de leitura react em typescript
type AuthContextType = {
  user: User | undefined;
  signInWithGoogle: () => Promise<void>; //Toda função assync devolve uma promise
}

// Criando contexto
// Passando o formato da informação que irei armazenar no contexto
// Para poder ultilizar o valor do contexto em toda a aplicação, eu devo exportar
export const AuthContext = createContext({} as AuthContextType)

// Passando o roteamento de pages em toda a aplicação 
// E colocando o path(caminho) e passando o componentes
function App() {

  // Criando um estado para o valor do context
  const [user, setUser] = useState<User>()

  // Crian uma função login
  async function signInWithGoogle() {
    // Criar uma const provider pra a autenticaçãao
    const provider = new firebase.auth.GoogleAuthProvider();

    // Autenticação do usuário com o google
    // Passar o contexto de login para essa função
    const result = await auth.signInWithPopup(provider);


    // Se o resultado me retornar tudo direito
    if (result.user) {
      // Armazenando essas constantes dentro de user
      const { displayName, photoURL, uid } = result.user

      // Se o usuário nn tiver foto ou nome vou passar um tratamento de erro
      if (!displayName || !photoURL) {
        throw new Error('Missing information from Google Account.')
      }

      // Chamo a função e passo todas as constantes
      setUser({
        id: uid,
        name: displayName,
        avatar: photoURL
      })
    }
  }
  // Então estarei compartilhando todas as informaçoes do usuário entre todas as paginas
  return (
    <BrowserRouter>
      <AuthContext.Provider value={{ user, signInWithGoogle }}>
        <Route path="/" exact component={Home} />
        <Route path="/rooms/new" component={NewRoom} />
      </AuthContext.Provider>
    </BrowserRouter>
  );
}

export default App;
