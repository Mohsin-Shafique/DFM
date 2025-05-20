const Loading = () => {
  return (
    <div className="flex justify-center items-center min-h-[60vh]">
      <div className="relative">
        <div className="w-16 h-16 border-4 border-secondary border-t-transparent rounded-full animate-spin"></div>
        <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
      </div>
    </div>
  );
};

export default Loading;