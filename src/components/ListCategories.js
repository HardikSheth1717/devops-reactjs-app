import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const ListCategories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    // Fetch categories from the API endpoint
    fetch(`${process.env.REACT_APP_API_URL}/category`)
      .then(async response => {
        return (await response.json()).data;
      })
      .then(data => setCategories(data))
      .catch(error => console.log(error));
  }, []);

  return (
    <div>
      <h1>List Categories</h1>
      <table border="1">
        <thead>
          <tr>
            <th>Category ID</th>
            <th>Code</th>
            <th>Category Name</th>
            <th>Remark</th>
            <th>Is System</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {categories.map(category => (
            <tr key={category.categoryId}>
              <td>{category.categoryId}</td>
              <td>{category.code}</td>
              <td>{category.categoryName}</td>
              <td>{category.remarks}</td>
              <td>{category.isSystem ? 'Yes' : 'No'}</td>
              <td><Link to={"/edit/" + category.categoryId}>Edit</Link></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListCategories;
