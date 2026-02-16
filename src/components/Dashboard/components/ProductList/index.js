"use client";

import { useState, useMemo } from "react";
import ProductCard from "../ProductCard";
import ProductCarousel from "../ProductCarousel";
import CategorySection from "../CategorySection";
import { useDebounce } from "@/hooks/useDebounce";

const ProductList = ({ products }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const debouncedSearch = useDebounce(searchQuery, 500);

  const categories = useMemo(() => {
    const allCategories = products.map((product) => product.category);
    return ["", ...new Set(allCategories)];
  }, [products]);

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchesSearch = product.title
        .toLowerCase()
        .includes(debouncedSearch.toLowerCase());
      const matchesCategory =
        selectedCategory === "" || product.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [debouncedSearch, selectedCategory, products]);

  return (
    <div className="space-y-10 pb-20">
      <ProductCarousel products={products} />

      <div className="sticky top-20 z-30 flex flex-col md:flex-row gap-6 items-center justify-between bg-white/80 backdrop-blur-md p-6 rounded-2xl border border-border shadow-sm">
        <div className="w-full md:w-1/3 relative group">
          <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-primary transition-colors">
            🔍
          </span>
          <input
            type="text"
            placeholder="        Search products..."
            className="input-field pl-11 h-12 bg-gray-50 border-none ring-1 ring-gray-200 focus:ring-2 focus:ring-primary"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        <div className="w-full md:w-auto overflow-x-auto no-scrollbar">
          <CategorySection
            categories={categories}
            selectedCategory={selectedCategory}
            onSelectCategory={setSelectedCategory}
          />
        </div>
      </div>

      <div className="space-y-6">
        <div className="flex justify-between items-end">
          <h2 className="text-2xl font-bold text-text-main">
            {selectedCategory || "All Products"}
          </h2>
          <p className="text-sm text-text-muted font-medium">
            Showing <span className="text-text-main">{filteredProducts.length}</span> items
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))
          ) : (
            <div className="col-span-full py-20 text-center bg-gray-50 rounded-2xl border-2 border-dashed border-gray-200">
              <p className="text-text-muted text-lg font-medium">No products match your search.</p>
              <button 
                onClick={() => {setSearchQuery(""); setSelectedCategory("");}}
                className="text-primary font-bold mt-2 hover:underline"
              >
                Clear all filters
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductList;