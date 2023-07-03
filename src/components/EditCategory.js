import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const EditCategory = () => {
  let { id: categoryId } = useParams();
  const [category, setCategory] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch the category data for editing from the API endpoint
    fetch(`${process.env.REACT_APP_API_URL}/category/${categoryId}`)
      .then(async response => {
        return (await response.json()).data;
      })
      .then(data => setCategory(data))
      .catch(error => console.log(error));
  }, [categoryId]);

  const handleChange = event => {
    const { name, value } = event.target;
    setCategory(prevCategory => ({ ...prevCategory, [name]: value }));
  };

  const handleCheckboxChange = event => {
    const { name, checked } = event.target;
    setCategory(prevCategory => ({ ...prevCategory, [name]: checked }));
  };

  const handleSubmit = event => {
    event.preventDefault();

    // Send the updated category data to the API endpoint
    fetch(`${process.env.REACT_APP_API_URL}/category`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(category),
    })
      .then(response => response.json())
      .then(data => {
        navigate('/');
      })
      .catch(error => console.log(error));
  };

  if (!category) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Edit Category</h1>
      <form onSubmit={handleSubmit}>
      <table>
          <tr>
            <td><label>Code:</label></td>
            <td>
              <input
                type="text"
                name="code"
                value={category.code}
                onChange={handleChange}
              />
            </td>
          </tr>
          <tr>
          <td><label>Category Name:</label></td>
          <td>
            <input
              type="text"
              name="categoryName"
              value={category.categoryName}
              onChange={handleChange}
            />
          </td>
        </tr>
        <tr>
          <td><label>Remark:</label></td>
          <td><input
            type="text"
            name="remarks"
            value={category.remarks}
            onChange={handleChange}
          />
          </td>
        </tr>
        <tr>
          <td><label>Is System:</label></td>
          <td>
            <input
              type="checkbox"
              name="isSystem"
              checked={category.isSystem}
              onChange={handleCheckboxChange}
            />
          </td>
        </tr>
        <tr>
          <td colSpan={2}><button type="submit">Update</button></td>
        </tr>
        </table>
      </form>
    </div>
  );
};

export default EditCategory;
