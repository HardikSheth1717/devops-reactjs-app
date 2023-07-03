import React from 'react';
import axios from 'axios';

const CategoryItem = ({ category, fetchCategories }) => {
  const deleteCategory = async () => {
    try {
      await axios.delete(`${process.env.REACT_APP_API_URL}/category/${category.categoryId}`);
      fetchCategories();
    } catch (error) {
      console.error(error);
    }
  };

  // Render category item UI
  return (
    <div>
      <span>{category.code}</span>
      <span>{category.categoryName}</span>
      <span>{category.remarks}</span>
      <button onClick={deleteCategory}>Delete</button>
    </div>
  );
};

export default CategoryItem;
