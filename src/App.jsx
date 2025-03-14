
import './components/App.css'

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AppRoutes from './routes/AppRoutes';
import { UserProvider } from './components/UserProvider';


function App() {

  return (
    <>
    <ToastContainer position="top-right" autoClose={3000} hideProgressBar={false} />
    <UserProvider>
      <AppRoutes />
    </UserProvider>
    
    </>
  );
}

export default App
