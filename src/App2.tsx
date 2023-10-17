
import './App.css';
import { HomePublico, NavBarPublico, Process } from './componentes/headers/publico/components';
import { AuthPassChange, AuthTwostep, ForgotPassword, LoginPage, Signup } from './pages/access/components';
// import { App } from './App.1';
export function App() {
  return (
    <div>
      <NavBarPublico />
      <HomePublico />
      <Process />
    </div>
  )
};

export default App;