import LoadingSvg from "/Loading.svg";

const LoadingProduct = () => {
  return (
    <div className="flex h-full min-h-screen items-baseline justify-center">
      <img src={LoadingSvg} />
    </div>
  );
};

export default LoadingProduct;
