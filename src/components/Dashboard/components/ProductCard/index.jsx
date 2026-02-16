import Image from "next/image";
import Link from "next/link";

const ProductCard = ({
  id,
  title,
  description,
  thumbnail,
  price,
  category,
  rating,
}) => {
  return (
    <div className="card hover:shadow-lg transition-shadow flex flex-col h-full bg-white rounded-lg border border-gray-200 overflow-hidden">
      <div className="relative h-48 w-full bg-gray-100">
        <Image
          src={thumbnail}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-contain mix-blend-multiply p-4"
          priority={false}
        />
        <span className="absolute top-2 right-2 bg-primary text-white text-xs px-2 py-1 rounded-full uppercase z-10">
          {category}
        </span>
      </div>

      <div className="p-4 flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-2">
          <h2
            className="text-lg font-bold text-gray-800 line-clamp-1"
            title={title}
          >
            {title}
          </h2>
          <span className="text-lg font-bold text-primary">${price}</span>
        </div>

        <p className="text-gray-600 text-sm line-clamp-2 mb-4 flex-grow">
          {description}
        </p>

        <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-100">
          <div className="flex items-center gap-1 text-yellow-500 text-sm font-medium">
            <span>★</span>
            <span>{rating}</span>
          </div>
          <Link
            href={`/products/${id}`}
            className="text-primary text-sm font-semibold hover:underline"
          >
            View Details →
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
