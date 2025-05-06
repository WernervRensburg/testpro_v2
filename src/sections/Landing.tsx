function Landing() {
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
          <div className="absolute inset-0 flex text-black text-left justify-start uppercase font-bold text-[64px] pl-2 pt-15 sm:pl-8 sm:w-120">
            quality testing simplified
          </div>
        </div>
      </div>
    </>
  );
}

export default Landing;
