import Image from "next/image";
import Image1 from "../public/image/image1.jpg";
import Image2 from "../public/image/image2.jpg";
import Image3 from "../public/image/image3.jpg";
import Image4 from "../public/image/image4.jpg";
import Image5 from "../public/image/image5.jpg";
import Image6 from "../public/image/image6.jpg";

const image = () => {
  return (
    <div className="m-16 ">
      <div className="flex justify-end">
        <ul className="flex">
          <div className="group">
            <li className="mr-4  cursor-pointer duration-500 ">Vector</li>
            <div className="mx-2 mt-2 duration-500 border-b-2 opacity-0 border-black group-hover:opacity-100"></div>
          </div>
          <div className="group">
            <li className="mr-4  cursor-pointer duration-500 ">
              Illustrations
            </li>
            <div className="mx-2 mt-2 duration-500 border-b-2 opacity-0 border-black group-hover:opacity-100"></div>
          </div>
          <div className="group">
            <li className="mr-4  cursor-pointer duration-500 ">Images</li>
            <div className="mx-2 mt-2 duration-500 border-b-2 opacity-0 border-black group-hover:opacity-100"></div>
          </div>
          <div className="group">
            <li className="mr-4  cursor-pointer duration-500 ">Icons</li>
            <div className="mx-2 mt-2 duration-500 border-b-2 opacity-0 border-black group-hover:opacity-100"></div>
          </div>
        </ul>
      </div>
      <div className="flex justify-end mt-16">
        <button className="bg-black text-white py-2 px-4 hover:bg-white hover:text-black">Upload</button>
      </div>
      <div className="flex justify-end mt-16 ">
        <div className="grid gap-4 md:grid-cols-3">
          <div className="relative group">
            <Image src={Image1} className="w-96 " />
            <div className="absolute bottom-0 left-0 right-0 px-2 py-4 text-white duration-500 bg-black opacity-0 group-hover:opacity-100 bg-opacity-40">
              <div className="flex justify-between w-full">
                <p className="text-sm">Girl Painting</p>
                <p className="text-xs">245Likes - 35 Shares</p>
              </div>
            </div>
          </div>

          <div className="relative group">
            <Image src={Image2} className="w-96 " />
            <div className="absolute bottom-0 left-0 right-0 px-2 py-4 text-white duration-500 bg-black opacity-0 group-hover:opacity-100 bg-opacity-40">
              <div className="flex justify-between w-full">
                <p className="text-xm">Window</p>
                <p className="text-xs">40 Likes - 12 Shares</p>
              </div>
            </div>
          </div>
          <div className="relative group">
          <Image src={Image3} className="w-96 " />
          <div className="absolute bottom-0 left-0 right-0 px-2 py-4 text-white duration-500 bg-black opacity-0 group-hover:opacity-100 bg-opacity-40">
              <div className="flex justify-between w-full">
                <p className="text-xm">Terrace</p>
                <p className="text-xs">1 Likes - 1 Shares</p>
              </div>
            </div>
          

          </div>
          <div className="relative group">
          <Image src={Image4} className="w-96 " />
          <div className="absolute bottom-0 left-0 right-0 px-2 py-4 text-white duration-500 bg-black opacity-0 group-hover:opacity-100 bg-opacity-40">
              <div className="flex justify-between w-full">
                <p className="text-xm">Painting</p>
                <p className="text-xs">0 Likes - 85 Shares</p>
              </div>
            </div>
          

          </div>
          
          <div className="relative group">
          <Image src={Image5} className="w-96 " />
          <div className="absolute bottom-0 left-0 right-0 px-2 py-4 text-white duration-500 bg-black opacity-0 group-hover:opacity-100 bg-opacity-40">
              <div className="flex justify-between w-full">
                <p className="text-xm">Building</p>
                <p className="text-xs">12 Likes - 285 Shares</p>
              </div>
            </div>
          

          </div>
          
          <div className="relative group">
          <Image src={Image6} className="w-96 " />
          <div className="absolute bottom-0 left-0 right-0 px-2 py-4 text-white duration-500 bg-black opacity-0 group-hover:opacity-100 bg-opacity-40">
              <div className="flex justify-between w-full">
                <p className="text-xm">Wall Painting</p>
                <p className="text-xs">45 Likes - 4 Shares</p>
              </div>
            </div>
          

          </div>
          
          </div>
      </div>
    </div>
  );
};

export default image;
