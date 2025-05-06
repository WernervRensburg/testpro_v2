function Services() {
  return (
    <>
      <div className="h-fit flex justify-center">
        <div className="relative w-full max-w-7xl">
          <img
            src="https://placehold.co/2000x4000"
            alt="temporary-image"
            className="w-full h-auto block md:hidden"
            loading="lazy"
          />
          <img
            src="https://placehold.co/3000x1500"
            alt="temporary-image"
            className="w-full h-auto hidden md:block xl:hidden"
            loading="lazy"
          />
          <img
            src="https://placehold.co/3500x1500"
            alt="temporary-image"
            className="w-full h-auto hidden xl:block"
            loading="lazy"
          />
          <div className="absolute inset-0 flex justify-center items-center">
            <div className="max-w-7xl border border-purple-500">
              <div className="grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-3">
                <div className="bg-gray-200 p-4 border border-green-700">Box 1</div>
                <div className="bg-gray-200 p-4 border border-green-700">Box 2</div>
                <div className="bg-gray-200 p-4 border border-green-700">Box 3</div>
                <div className="bg-gray-200 p-4 border border-green-700">Box 4</div>
                <div className="bg-gray-200 p-4 border border-green-700">Box 5</div>
                <div className="bg-gray-200 p-4 border border-green-700">Box 6</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Services;
