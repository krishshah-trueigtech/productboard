"use client";

const CategorySection = ({ categories, selectedCategory, onSelectCategory }) => {
  return (
    <div className="flex gap-2">
      <button
        onClick={() => onSelectCategory("")}
        className={`px-5 py-2 rounded-full text-sm font-semibold transition-all whitespace-nowrap ${
          selectedCategory === "" 
          ? "bg-primary text-white shadow-md shadow-primary/20" 
          : "bg-white text-text-muted border border-border hover:border-primary hover:text-primary"
        }`}
      >
        All
      </button>
      {categories.filter(cat => cat !== "").map((category) => (
        <button
          key={category}
          onClick={() => onSelectCategory(category)}
          className={`px-5 py-2 rounded-full text-sm font-semibold transition-all whitespace-nowrap capitalize ${
            selectedCategory === category 
            ? "bg-primary text-white shadow-md shadow-primary/20" 
            : "bg-white text-text-muted border border-border hover:border-primary hover:text-primary"
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default CategorySection;