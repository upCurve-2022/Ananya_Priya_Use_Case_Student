import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import StudentList from './components/StudentList';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import NewStudent from './components/NewStudent';


function App() {
  return (
    <div>
      <BrowserRouter>
        <HeaderComponent/>
        <div className='container'>
          <Routes>
            <Route path="/" element={<StudentList/>}></Route>
            <Route path="/students" element={<StudentList/>}></Route>
            <Route path="/add-student" element={<NewStudent/>}></Route>
            <Route path="/update-student/:id" element={<NewStudent/>}></Route>
        
          </Routes>
        </div>
        <FooterComponent/>
      </BrowserRouter>
    </div>
  );
}

export default App;
