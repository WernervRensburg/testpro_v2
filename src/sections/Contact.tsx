function Contact() {
  return (
    <>
      <div className="w-full max-w-7xl justify-center grid grid-cols-1 gap-4 border border-orange-500">
        <div className="w-full flex justify-center max-w-[calc(100vw-6rem)] mx-auto border border-black">
          contact us call now
        </div>
        <div className="w-full border mx-auto max-w-[calc(100vw-6rem)] border-blue-500">
          <div className="grid grid-cols-2 gap-2 lg:grid-cols-4">
            <div className="bg-gray-200 p-4 border border-green-700">Box 1</div>
            <div className="bg-gray-200 p-4 border border-green-700">Box 2</div>
            <div className="bg-gray-200 p-4 border border-green-700">Box 3</div>
            <div className="bg-gray-200 p-4 border border-green-700">Box 4</div>
            <div className="bg-gray-200 p-4 border border-green-700">Box 5</div>
            <div className="bg-gray-200 p-4 border border-green-700">Box 6</div>
            <div className="bg-gray-200 p-4 border border-green-700">Box 7</div>
            <div className="bg-gray-200 p-4 border border-green-700">Box 8</div>
          </div>
        </div>
        <div className="w-full flex justify-center mx-auto max-w-[calc(100vw-6rem)] border border-black">
          Social media pages
        </div>
      </div>
      <div className="w-full flex justify-center border border-red-700">
        <div className="w-full max-w-[calc(100vw-6rem)] grid grid-cols-1 gap-4">
          <div className="relative">
          <img
            src="https://placehold.co/3000x2000"
            alt="temporary-image"
            className="w-full h-auto"
            loading="lazy"
          />
          </div>
          <div>

          </div>
        </div>

      </div>
    </>
  );
}

export default Contact;
