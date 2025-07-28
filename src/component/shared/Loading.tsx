// components/Loading.tsx
const LoadingSpinner = () => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-25">
      <div className="animate-spin text-white rounded-full h-10 w-10 border-b-2 border-red-500"></div>
    </div>
  );
};

export default LoadingSpinner;
