import { Input, Button } from "@headlessui/react";

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
      <div className="w-full relative justify-center border border-red-700">
          <img
            src="https://placehold.co/3000x2000"
            alt="temporary-image"
            className="w-full h-auto"
            loading="lazy"
          />
        <div className="w-full absolute inset-0 mx-auto max-w-[calc(100vw-6rem)] grid grid-cols-1 gap-4 items-start mt-16">
          <div className="border border-blue-700 h-fit">
            <span className="font-bold">Don't Hesitate. Reach out to your local expert.</span>
          </div>
          <div className="border border-green-700">
            <div>
            <Input></Input>
            <Input></Input>
            <Button className="rounded border border-blue-800 px-4 py-2">SUBMIT</Button>
            </div>
          </div>
          <div className="border border-yellow-700">
          <div className="grid grid-cols-1 gap-2 lg:grid-cols-3">
            <div className="bg-gray-200 p-4 border border-green-700">Box 1</div>
            <div className="bg-gray-200 p-4 border border-green-700">Box 2</div>
            <div className="bg-gray-200 p-4 border border-green-700">Box 3</div>
          </div>
          </div>
        </div>

      </div>
    </>
  );
}

export default Contact;
