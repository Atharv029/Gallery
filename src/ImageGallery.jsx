import React, { useState } from 'react';
import { Search, Home, Image, Video, Layout, X, Menu, ChevronLeft } from 'lucide-react';

const ImageGallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('creatives');


  const images = [
    {
      id: 1,
      title: "Forest",
      url: "https://i.postimg.cc/sXCmPb04/vertical-shot-mountains-covered-greenery-perfect-mobile-181624-26834.avif",
      description: "Forest Nature Is Good",
      photographer: "John Mitchell",
      likes: 1234
    },
    {
      id: 2,
      title: "Mountain",
      url: "https://i.postimg.cc/MHcfHmyf/download-11.jpg",
      description: "Mountain Have Next Level Height",
      photographer: "Emma Thompson",
      likes: 856
    },
    {
      id: 3,
      title: "Ocean Waves",
      url: "https://i.postimg.cc/DyBKj3s6/images-1.jpg",
      description: "Ocean Waves",
      photographer: "Michael Chen",
      likes: 2341
    },
    {
      id: 4,
      title: "Snow Forest",
      url: "https://i.postimg.cc/MHsfKrMS/download-10.jpg",
      description: "Snow Forest",
      photographer: "Anna White",
      likes: 1567
    },
    {
      id: 5,
      title: "Flowers",
      url: "https://i.postimg.cc/ydVBd6CM/images.jpg",
      description: "Flowers Mountain",
      photographer: "Sarah Parker",
      likes: 1890
    },
    {
      id: 6,
      title: "City Light",
      url: "https://i.postimg.cc/4xJF9w5q/premium-photo-1661908853318-893732a14e42.jpg",
      description: "Main City",
      photographer: "David Rodriguez",
      likes: 2156
    },
    {
      id: 7,
      title: "Desert Dunes",
      url: "https://i.postimg.cc/sXrjF924/download-9.jpg",
      description: "Desert Dunes",
      photographer: "Lisa Morgan",
      likes: 1432
    }
  ];

  const NavigationLinks = () => (
    <div className="space-y-6 text-[1.3rem]">
      <a href="#" className="flex hover:text-[#0af]   items-center gap-2 text-gray-300 ">
        <Home size={20} />
        <span>Home</span>
      </a>
      <a href="#" className="flex hover:text-[#0af]    items-center gap-2 text-gray-300 ">
        <Layout size={20} />
        <span>Community</span>
      </a>
      <a href="#" className="flex hover:text-[#0af]    items-center gap-2 text-gray-300 ">
        <Image size={20} />
        <span>Images</span>
      </a>
      <a href="#" className="flex hover:text-[#0af]    items-center gap-2 text-gray-300 ">
        <Video size={20} />
        <span>Videos</span>
      </a>
    </div>
  );

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Mobile Header */}
      <div className="lg:hidden fixed top-0 left-0 right-0 bg-gray-800 z-30">
        <div className="flex items-center justify-between p-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-cyan-400 rounded-full" />
            <h1 className="text-xl font-bold">Gallery App</h1>
          </div>
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 hover:bg-gray-700 rounded-lg"
          >
            <Menu size={24} />
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      <div className={`
        lg:hidden fixed inset-0 z-40 transform transition-transform duration-300 ease-in-out
        ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}
      `}>
        <div className="absolute inset-0 bg-black/50" onClick={() => setIsMobileMenuOpen(false)} />
        <div className="absolute inset-y-0 left-0 w-64 bg-gray-800 p-4">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-cyan-400 rounded-full" />
              <h1 className="text-xl font-bold">Gallery App</h1>
            </div>
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="p-2 hover:bg-gray-700 rounded-lg"
            >
              <ChevronLeft size={24} />
            </button>
          </div>
          <NavigationLinks />
        </div>
      </div>

      {/* Desktop Navigation */}
      <nav className="hidden lg:block fixed top-0 left-0 h-screen w-64 bg-black p-4">
        <div className="flex items-center gap-2 mb-8">
          <div className="w-8 h-8 bg-cyan-400 rounded-full" />
          <h1 className="text-xl font-bold">Gallery App</h1>
        </div>
        <NavigationLinks />
      </nav>

      {/* Main Content */}
      <main className="lg:ml-64 pt-20 lg:pt-6 p-4 lg:p-6">
        {/* Hero Section */}
        <div className="relative h-32 sm:h-48 mb-6 lg:mb-8 rounded-lg overflow-hidden border border-gray-700">
          <img
            src="https://s1-def.ap4r.com/kos/s101/nlav112154/aiwp/assets/community-head-Bub5IN1X.jpg"
            alt="Hero banner"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/50 to-transparent">
            <div className="p-4 sm:p-8">
              <h2 className="text-2xl sm:text-3xl flex justify-center  font-bold">Community</h2>
              <p className="text-gray-200 flex justify-center">Share your ideas with us!</p>
            </div>
          </div>
        </div>

        
        {/* Search and Filters */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-6 lg:mb-8">
          {/* {Toogle} */}
        <div className="bg-black p-4 w--0">
          <div className="bg-gray-800 rounded-full h-11 flex p-1 ">
            <button
              className={`flex-1 py-1 px-4 rounded-full text-lg transition-all duration-200 ${activeTab === 'creatives'
                  ? 'bg-emerald-400 text-black'
                  : 'text-gray-400'
                }`}
              onClick={() => setActiveTab('creatives')}
            >
              Creatives
            </button>
            <button
              className={`flex-1 py-1 px-4 rounded-full text-lg transition-all duration-200 ${activeTab === 'shorts'
                  ? 'bg-emerald-400 text-black'
                  : 'text-gray-400'
                }`}
              onClick={() => setActiveTab('shorts')}
            >
              Shorts
            </button>
          </div>
        </div>
          <div className="flex-1 left-[2%] relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search something..."
              className="w-[40%] bg-gray-800 rounded-full py-2 px-10 text-white border border-gray-700 focus:border-cyan-400 focus:outline-none transition-colors"
            />
          </div>
          <select className="bg-gray-800 rounded-md py-2 px-6 border border-gray-700 focus:border-cyan-400 focus:outline-none">
            <option>Most Popular</option>
            <option>Latest</option>
            <option>Trending</option>
          </select>
          
        </div>
        <div>

        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {images.map((image) => (
            <div
              key={image.id}
              onClick={() => setSelectedImage(image)}
              className="group relative aspect-[3/4] rounded-lg overflow-hidden cursor-pointer border border-gray-700 bg-gray-800"
            >
              <img
                src={image.url}
                alt={image.title}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="text-lg font-semibold mb-1">{image.title}</h3>
                  <div className="flex items-center justify-between text-sm text-gray-300">
                    <span>{image.photographer}</span>
                    <span>{image.likes.toString()} likes</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Modal */}
      {selectedImage && (
       <div
       className="fixed inset-0 bg-black flex items-center justify-center z-50"
       onClick={() => setSelectedImage(null)}
     >
       <div
         className="flex w-full max-w-6xl h-[85vh] bg-gray-900"
         onClick={e => e.stopPropagation()}
       >
         {/* Image Section */}
         <div className="flex-1  flex items-center justify-center ">
           <img
             src={selectedImage.url}
             alt={selectedImage.title}
             className="max-w-full max-h-full w-[95%] h-[93%] border border-gray-900 rounded-lg"
           />
         </div>
 
         {/* Details Panel */}
         <div className="w-96 border-l border-gray-800 bg-gray-900">
           <div className="p-6">
             <div className="flex items-center justify-between mb-6">
               <div className="flex items-center gap-2">
                 <h2 className="text-2xl font-bold text-white">Details</h2>
                 <span className="px-2 py-1 text-xs bg-green-900/30 text-green-400 rounded">
                   Images
                 </span>
               </div>
               <button
                 onClick={() => setSelectedImage(null)}
                 className="text-gray-400 hover:text-white transition-colors"
               >
                
               </button>
             </div>
 
             <div className="space-y-6">
               <div className=' relative top-'>
                 <h3 className="text-xl text-white mb-2">{selectedImage.title}</h3>
                 <p className="text-gray-400 text-sm">
                   Publish Time: {selectedImage.publishTime}
                 </p>
               </div>
 
               <div className="p-4 relative top-11 bg-gray-800/50 rounded-lg space-y-4">
                 <div>
                   <h4 className="text-white mb-2">Prompt</h4>
                   <p className="text-gray-300">{selectedImage.description}</p>
                 </div>
                 
                 <div className="flex justify-between items-center">
                   <div>
                     <h4 className="text-gray-400 text-sm">Image Ratio</h4>
                     <p className="text-white">9:16</p>
                   </div>
                   <div>
                     <h4 className="text-gray-400 text-sm">Reference Image</h4>
                     <p className="text-white">None</p>
                   </div>
                 </div>
               </div>
 
               <div className="flex items-center relative top-48 justify-between">
                 <button className="flex items-center gap-2 text-gray-300">
                  
                   <span>10</span>
                 </button>
                 <button className="p-2 hover:bg-gray-800 rounded-full">

                 </button>
                 <button className="px-4 py-2  bg-gradient-to-r from-green-400 to-blue-400 rounded-full text-black font-medium">
                   Clone & Try
                 </button>
               </div>
             </div>
           </div>
         </div>
       </div>
     </div>
      )}
    </div>
  );
};

export default ImageGallery;