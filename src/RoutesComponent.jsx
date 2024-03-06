import {Routes, Route} from 'react-router-dom';
import Home from './components/Home';
import Profile from './components/Profile';

const RoutesComponent = ()=>{
    return (<Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/profile' element={<Profile/>}/>
    </Routes>)
}

export default RoutesComponent;