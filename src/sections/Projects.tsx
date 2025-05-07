function Projects() {
  return (
    <>
      <div className="flex justify-center">
        <div className="max-w-7xl">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 w-5xl mx-auto m-4 max-w-[calc(100vw-4rem)] sm:border sm:border-black">
            <div className="bg-gray-200 border border-green-700">
              <div className="h-140 md:h-160 border border-red-400">box 1 IMAGE</div>
              <div className="h-70 border border-blue-300">box 1 DESCRIPTION</div>
            </div>
            <div className="bg-gray-200 border border-green-700">
              <div className="h-70 border border-red-400 hidden sm:block">box 2 DESCRIPTION</div>
              <div className="h-140 md:h-160 border border-blue-300">box 2 IMAGE</div>
              <div className="h-70 border border-red-400 block sm:hidden">box 2 small DESCRIPTION</div>
            </div>
            <div className="bg-gray-200 border border-green-700">
              <div className="h-140 md:h-160 border border-red-400">box 3 IMAGE</div>
              <div className="h-70 border border-blue-300">box 3 DESCRIPTION</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Projects;
