
import { RouterProvider } from 'react-router-dom';
import './App.css';
import router from './Routes/Routes';

function App() {
  return (
    <div className="w-[90%] lg:w-[1100px] mx-auto z-50">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
