import { Routes, Route } from 'react-router';
import './App.css'
import CollegeRegistration from './pages/CollegeRegistration';
import Home from './pages/Home';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />}></Route >
      <Route path='/college-registration' element={<CollegeRegistration />} />
    </Routes >
  )
}

export default App;
