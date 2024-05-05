// import Image from "next/image";

import Image from "next/image";

import Image1 from "../public/Image1.jpg";
import Image2 from "../public/Image2.jpg";
import Image3 from "../public/Image3.jpg";
import Image4 from "../public/Image4.jpg";
import Image5 from "../public/Image5.jpg";
import Image6 from "../public/Image6.jpg";
import Image7 from "../public/Image7.jpg";

// import Image3 from "../app/assets/image3.jpg";
// import Image4 from "../app/assets/image4.jpg";
// import Image5 from "../app/assets/image5.jpg";
// import Image6 from "../app/assets/image6.jpg";
// import Image7 from "../app/assets/image7.jpg";

export default function Home() {
  return (
    <main className="flex bg-yellow-300 h-screen">
      <div className="flex justify-center items-center h-screen">
        <div className="flex flex-col items-center justify-center">
          <div className="grid grid-cols-3 gap-4">
            <div className="w-28 h-32 rounded-full overflow-hidden transition-transform transform hover:scale-105">
              <Image
                src={Image1}
                alt="duck"
                priority="100"
                width={100}
                height={150}
                className="w-full h-full object-cover transition-opacity duration-300 hover:opacity-80"
                style={{ backdropFilter: "blur(10px)" }}
              />
            </div>
            <div className="w-28 h-32 rounded-full overflow-hidden transition-transform transform hover:scale-105">
              <Image
                src={Image7}
                alt="duck"
                priority="100"
                width={100}
                height={150}
                className="w-full h-full object-cover transition-opacity duration-300 hover:opacity-80"
                style={{ backdropFilter: "blur(10px)" }}
              />
            </div>
            <div className="w-28 h-32 rounded-full overflow-hidden transition-transform transform hover:scale-105">
              <Image
                src={Image3}
                alt="duck"
                priority="100"
                width={100}
                height={150}
                className="w-full h-full object-cover transition-opacity duration-300 hover:opacity-80"
                style={{ backdropFilter: "blur(10px)" }}
              />
            </div>
            <div className="w-28 h-32 rounded-full overflow-hidden transition-transform transform hover:scale-105">
              <Image
                src={Image4}
                alt="duck"
                priority="100"
                width={100}
                height={150}
                className="w-full h-full object-cover transition-opacity duration-300 hover:opacity-80"
                style={{ backdropFilter: "blur(10px)" }}
              />
            </div>
            <div className="w-28 h-32 rounded-full overflow-hidden transition-transform transform hover:scale-105">
              <Image
                src={Image5}
                alt="duck"
                priority="100"
                width={100}
                height={150}
                className="w-full h-full object-cover transition-opacity duration-300 hover:opacity-80"
                style={{ backdropFilter: "blur(10px)" }}
              />
            </div>
            <div className="w-28 h-32 rounded-full overflow-hidden transition-transform transform hover:scale-105">
              <Image
                src={Image6}
                alt="duck"
                priority="100"
                width={100}
                height={150}
                className="w-full h-full object-cover transition-opacity duration-300 hover:opacity-80"
                style={{ backdropFilter: "blur(10px)" }}
              />
            </div>
          </div>
          <button className="bg-gray-400 shadow-black shadow-md hover:bg-white hover:text-gray-500 text-white px-4 py-2 mt-4 rounded-lg">
            Whitepaper
          </button>
        </div>
      </div>
    </main>
  );
}
