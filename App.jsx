import { Routes, Route, useNavigate } from 'react-router-dom';

import Movies from './pages/Movies';
import Subscriptions from './pages/Subscriptions';
import AddMember from './pages/AddMember';
import UsersManag from './pages/UsersManag';
import EditMovie from './pages/EditMovie';
import DeleteMovie from './pages/DeleteMovie';
import AddMovie from './pages/AddMovie';
import EditMember from './pages/EditMember';
import DeleteMember from './pages/DeleteMember';



const App = () => {
  const navigate = useNavigate();

  return (
    <>
      <h1>Movies- Subscriptions Web Site</h1>
    
      <button onClick={() => navigate('/Movies')}>Movies</button>
      <button onClick={() => navigate('/Subscriptions')}>Subcriptions</button>
      <button onClick={() => navigate('/UsersManag')}>Users Management</button>
      <br /> <br />
    
      <br />
      <Routes>
      
       
        <Route path='/movies' element={<Movies />} />
        <Route path='/edit/:id' element={<EditMovie />} />
        <Route path='/delete' element={<DeleteMovie />} />
        <Route path="/movies/add" element={<AddMovie />} />
       
          
        <Route path='/subscriptions' element={<Subscriptions />} />
        
        <Route path='/addMember' element={<AddMember />} />
        <Route path='/editMember' element={<EditMember />} />
        <Route path='/deleteMember' element={<DeleteMember />} />

        <Route path='/UsersManag' element={<UsersManag />} />

      
      </Routes>
    </>
  );
};

export default App;