const useGetProducts = async () => {
  const baseUrl = process.env.NEXT_PUBLIC_API_URL;
  const response = await fetch(`${baseUrl}/products`, {
    cache: "no-cache",
  });
  const data = await response.json();
  return data.products;
};
export default useGetProducts;
