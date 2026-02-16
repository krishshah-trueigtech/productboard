import { Suspense } from "react";
import ProductListContainer from "@/components/Dashboard/components/ProductDashBoard";
import Loading from "@/app/loading";

const DashboardPage = () => {
  return (
    <>
      <Suspense fallback={<Loading />}>
        <ProductListContainer />
      </Suspense>
    </>
  );
};

export default DashboardPage;