import { notFound } from "next/navigation";
import Image from "next/image";
import useGetProductById from "@/components/Dashboard/hooks/useGetProductById";

export const generateMetadata = async ({ params }) => {
  const { id } = await params;
  const product = await useGetProductById(id);

  if (!product) return { title: "Product Not Found" };

  return {
    title: product.title,
    description: product.description,
  };
};

const ProductDetails = async ({ params }) => {
  const { id } = await params;
  const product = await useGetProductById(id);

  if (!product) {
    notFound();
  }

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-xl border border-border shadow-sm">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="relative h-96 w-full bg-gray-100 rounded-lg overflow-hidden">
          <Image
            src={product.thumbnail}
            alt={product.title}
            width={500}
            height={500} 
            priority 
            className="object-contain p-4"
          />
        </div>

        <div className="flex flex-col justify-center">
          <span className="text-primary font-semibold uppercase tracking-wider text-sm mb-2">
            {product.category}
          </span>
          <h1 className="text-3xl font-bold text-text-main mb-4">
            {product.title}
          </h1>
          <p className="text-2xl font-bold text-primary mb-6">
            ${product.price}
          </p>
          <p className="text-text-muted leading-relaxed mb-8">
            {product.description}
          </p>

          <div className="flex items-center gap-4 border-t border-border pt-6">
            <div className="flex items-center gap-1 text-yellow-500 font-bold">
              <span>★</span>
              <span>{product.rating}</span>
            </div>
            <span className="text-text-muted text-sm">
              | {product.stock} units in stock
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
