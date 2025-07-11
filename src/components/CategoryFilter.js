import React from "react";

function CategoryFilter({ categories, selectedCategory, onSelectedCategory }) {
  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categories.map((category) => (
        <button 
          key={category} 
          className={category === selectedCategory ? "selected" : ""}
          onClick={() => onSelectedCategory(category)}
          >
            {category}
        </button>
      ))}
    </div>
  );
}

export default CategoryFilter;
