
import './App.css';
import Header from './Header';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import { Route, Routes } from 'react-router-dom';
import Mort from './components/Mort';
import Home from './components/Home'
import Income from './components/Income';
import OutGoings from './components/OutGoings';
import Result from './components/Result';
import BookAppointment from './components/BookAppointment';

function App() {
  return (
    <div className="App">
      <Header />
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />}></Route>

        <Route path="/mortgage" element={<Mort />}> </Route>
            
              <Route path='income' element={<Income/>}></Route>
                  <Route path='outgoing' element={<OutGoings/>}></Route>
                      <Route path='result' element={<Result/>}></Route>
                          <Route path='bookAppointment' element={<BookAppointment/>}></Route>
            
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
