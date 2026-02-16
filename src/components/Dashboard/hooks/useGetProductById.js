const useGetProductById = async (id) => {
  const baseUrl = process.env.NEXT_PUBLIC_API_URL;
  const response = await fetch(`${baseUrl}/products/${id}`, {
    cache: "no-store",
  });

  if (!response.ok) return null;

  const data = await response.json();
  return data;
};

export default useGetProductById;
