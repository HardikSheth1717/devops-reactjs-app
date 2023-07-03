import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import ListCategories from './components/ListCategories';
import CreateCategory from './components/CreateCategory';
import EditCategory from './components/EditCategory';

const App = () => {
  return (

    <BrowserRouter>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">List Categories</Link>
            </li>
            <li>
              <Link to="/create">Create Category</Link>
            </li>
          </ul>
        </nav>



      </div>
      <Routes>
        <Route path="/" exact element={<ListCategories />}></Route>
        <Route path="/create" element={<CreateCategory />} />
        {/* <Route path="/edit/:id" render={props => <EditCategory categoryId={props.match.params.id} />} /> */}
        <Route path="/edit/:id" element={<EditCategory />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
