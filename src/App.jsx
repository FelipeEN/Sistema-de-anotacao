import{Routes,Route} from 'react-router-dom'

import  {Anotacao}  from './pages/anotacao'
import  {Login}  from './pages/login'
import  {VerAnotacoes}  from './pages/verAnotacoes'
import  {Cadastrar}  from './pages/cadastro'
import { ProtectedRoute } from "./ProtectedRoute"


function App (){
  return(
    <Routes>

        <Route
            path="/"
            element={<Login />}
        />

        <Route
            path="/cadastro"
            element={<Cadastro />}
        />

        <Route
            path="/anotacao"
            element={
                <ProtectedRoute>
                    <Anotacao />
                </ProtectedRoute>
            }
        />

        <Route
            path="/anotacoes"
            element={
                <ProtectedRoute>
                    <VerAnotacoes />
                </ProtectedRoute>
            }
        />

    </Routes>
  )
}

export default App