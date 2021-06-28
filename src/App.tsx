import {BrowserRouter, Route} from 'react-router-dom'

// Importando o pacote de roteamento de pages
// E convertendo para type
import { Home } from './pages/Home'
import { NewRoom } from './pages/NewRoom'

// Passando o roteamento de pages em toda a aplicação 
// E colocando o path(caminho) e passando o componentes
function App() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={ Home }/>
      <Route path="/rooms/new" component={ NewRoom }/>
    </BrowserRouter>
  );
}

export default App;
