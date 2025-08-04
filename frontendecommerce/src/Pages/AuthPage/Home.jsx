import React from 'react';
import Header from '../../Components/Header';
import Electronics from '../../assets/5b3230c3028f24337a4fc2341f12457c.jpg'
import kitchen from '../../assets/352c5ad9b78a44eaaa78b3af246359f3.jpg'
import skin from '../../assets/skin.jpg'
import dress from '../../assets/dress.jpg'
import wallpaper from '../../assets/wallpaper.jpg'
import wallpere2 from '../../assets/wallper2.jpg'
import wallpere3 from '../../assets/wallper3.jpg'
import Footer from '../../Components/Footer';
/* import Skincare from '../../assets/Skincare.jpg'; // Assuming you have a skincare image in your  */

const categories = [
  {
    name: 'Live Comfortably',
image: dress ,// ✅ this is a real image

    className: 'col-span-2 row-span-2',
  },
  {
    name: 'Skincare',
    image: skin,
    className: 'row-span-2',
  },
  {
    name: 'Kitchen',
    image: kitchen,
  },
  {
    name: 'Electronics',
    image: Electronics,
  },
];

function Home() {
  return (
<>
      <div>
        <Header />
        <div className="px-4 py-8 grid grid-cols-2 md:grid-cols-4 auto-rows-[200px] gap-4 mx-auto max-w-7xl mt-10">
          {categories.map((category, index) => (
            <div
              key={index}
              className={`relative group overflow-hidden rounded-md shadow-md ${category.className || ''}`}
            >
              <img
                src={category.image}
                alt={category.name}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-opacity-40 group-hover:bg-opacity-60 transition duration-300"></div>
              <h2 className="absolute bottom-4 left-4 text-white text-xl sm:text-2xl font-bold drop-shadow-lg">
                {category.name}
              </h2>
            </div>
          ))}
        </div>
  <div className="mt-8  w-full">
    <h1 className="text-3xl font-bold">Products we are Proud of</h1>
  
    {/* Section 1 */}
    <div className="flex flex-col md:flex-row items-center mt-8 bg-gray-300  overflow-hidden">
      <div className="text-center md:w-1/2 p-6 space-y-4">
        <h1 className="text-2xl font-bold">Creative harmonious living</h1>
        <p className="font-bold">
          RAOUF Products are all made to standard sizes so that you can mix and match them freely.
        </p>
        <button className="bg-black px-6 py-3 text-white rounded-2xl">Shop Now</button>
      </div>
      <div className="md:w-1/2">
        <img src={wallpere3} alt="no image" className="w-full h-[500px] object-cover" />
      </div>
    </div>
  
    {/* Trending Section */}
    <div className="mt-8">
      <h1 className="text-3xl font-bold">Trending</h1>
      {/* Add trending cards here */}
    </div>
  
    {/* Section 2 */}
    <div className="flex flex-col md:flex-row items-center mt-8 bg-gray-300  overflow-hidden">
      <div className="md:w-1/2  ">
        <img src={wallpere2} alt="no image" className="w-full h-[500px] object-cover" />
      </div>
      <div className="text-center md:w-1/2 p-6 space-y-4">
        <h1 className="text-2xl font-bold">Comfortable & Elegant Living</h1>
        <p className="font-bold">
          RAOUF Products are all made to standard sizes so that you can mix and match them freely.
        </p>
        <button className="bg-black px-6 py-3 text-white rounded-2xl">Shop Now</button>
      </div>
    </div>
  </div>
  
      </div>
      <Footer/>
</>
  );
}

export default Home;
