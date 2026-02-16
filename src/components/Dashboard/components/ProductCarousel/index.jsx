"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const ProductCarousel = ({ products }) => {
  const [current, setCurrent] = useState(0);
  const featured = products.slice(0, 5);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev === featured.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(timer);
  }, [featured.length]);

  return (
    <div className="relative h-[400px] w-full rounded-2xl overflow-hidden mb-12 bg-surface border border-border">
      {featured.map((product, index) => (
        <div
          key={product.id}
          className={`absolute inset-0 transition-opacity duration-1000 flex items-center p-12 ${
            index === current ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        >
          <div className="flex-1 space-y-4">
            <span className="text-primary font-bold uppercase tracking-widest text-sm">
              Featured Product
            </span>
            <h2 className="text-4xl font-extrabold text-text-main">
              {product.title}
            </h2>
            <p className="text-text-muted line-clamp-2 max-w-md">
              {product.description}
            </p>
            <Link
              href={`/products/${product.id}`}
              className="btn-primary inline-block mt-4"
            >
              Shop Now — ${product.price}
            </Link>
          </div>
          <div className="flex-1 relative h-full w-full">
            <Image
              src={product.thumbnail}
              alt={product.title}
              fill
              className="object-contain p-4"
              priority
            />
          </div>
        </div>
      ))}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {featured.map((_, i) => (
          <div
            key={i}
            className={`h-2 w-2 rounded-full ${i === current ? "bg-primary w-4" : "bg-gray-300"} transition-all`}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductCarousel;
