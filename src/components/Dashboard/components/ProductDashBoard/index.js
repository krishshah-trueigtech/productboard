import useGetProducts from "../../hooks/useGetProduct";
import ProductList from "../ProductList";

const Dashboard = async () => {
  const products = await useGetProducts();

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Welcome to Product Board</h1>
      <ProductList products={products} />
    </div>
  );
};

export default Dashboard;
