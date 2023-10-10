import Header from './components/Header';
import TableListEmployee from './components/TableListEmployee';
import {ToastContainer} from 'react-toastify';

function App() {

  return (
    <div className='app-container'>
      <Header />
      <TableListEmployee />
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      {/* Same as */}
      <ToastContainer />
    </div>
  );
}

export default App;
