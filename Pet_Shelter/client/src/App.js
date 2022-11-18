import './App.css';

import { Link, Navigate, Route, Routes} from 'react-router-dom'

import { AllPets } from './views/AllPets';
import { OnePet } from './views/OnePet';
import { NewPet } from './views/NewPet';
import { EditPet } from './views/EditPet';

// Not found view 


function App() {
  return (
    <div className="App">
{/* Any content that will always show up goes here */}

    <Routes>
      {/* navigate to will allow toalways go to /pets */}
      <Route path='/' element={<Navigate to='/pets' replace/>}/>
      <Route path='/pets' element={<AllPets/>}/>
      <Route path='/pets/new' element={<NewPet/>}/>
      <Route path='/pets/:id' element={<OnePet/>}/>
      <Route path='/pets/:id/edit' element={<EditPet/>}/>
    </Routes>
    </div>
  );
}

export default App;
