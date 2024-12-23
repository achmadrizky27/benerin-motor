/* Recommended Product => Done */

import React, { useState } from "react";
import { Link } from "react-router-dom";

const RecommendedProduct = () => {
  // List => Recommended Product
  const listRecommendedProduct = [
    {
      id: 7,
      name: "Shockbreaker DBS Aerox Old",
      image: "./product/new/shockdbs-aerox.png",
      price: "Rp.1.100.000",
      specs: "Enhanced durability for smoother rides",
      label: "Discount 10%",
      sold: 4,
      rating: 4.6,
    },
    {
      id: 8,
      name: "Kampas Ganda Aerox",
      image: "./product/new/kampasganda-aerox.png",
      price: "Rp.250.000",
      specs: "Efficient and long-lasting clutch pads",
      label: "Discount 5%",
      sold: 7,
      rating: 4.7,
    },
    {
      id: 9,
      name: "Kampas Ganda Aerox",
      image: "./product/new/kampasganda-aerox.png",
      price: "Rp.250.000",
      specs: "Efficient and long-lasting clutch pads",
      label: "Discount 17%",
      sold: 9,
      rating: 4.8,
    },
    {
      id: 10,
      name: "Kampas Ganda Aerox",
      image: "./product/new/kampasganda-aerox.png",
      price: "Rp.250.000",
      specs: "Efficient and long-lasting clutch pads",
      label: "Discount 40%",
      sold: 10,
      rating: 4.9,
    },
    {
      id: 11,
      name: "Kampas Ganda Aerox",
      image: "./product/new/kampasganda-aerox.png",
      price: "Rp.250.000",
      specs: "Efficient and long-lasting clutch pads",
      label: "Discount 4%",
      sold: 8,
      rating: 5,
    },
    {
      id: 12,
      name: "Kampas Ganda Aerox",
      image: "./product/new/kampasganda-aerox.png",
      price: "Rp.250.000",
      specs: "Efficient and long-lasting clutch pads",
      label: "Discount 10%",
      sold: 11,
      rating: 4.3,
    },
  ];

  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 4;
  const totalPages = Math.ceil(listRecommendedProduct.length / itemsPerPage);
  const currentItems = listRecommendedProduct.slice(currentPage * itemsPerPage, currentPage * itemsPerPage + itemsPerPage);

  const handlePrev = () => {
    if (currentPage > 0) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages - 1) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  return (
    <section className="font-poppins p-3 space-y-3">
      <p className="font-bold text-md text-orange-900 md:text-xl">RECOMMENDED PRODUCTS</p>
      <div className="relative">
        {/* Content */}
        <div className="gap-3 grid grid-cols-2 md:grid-cols-4">
          {currentItems.map((product) => (
            <div key={product.id} className="bg-white duration-300 flex flex-col group justify-between overflow-hidden relative rounded-md shadow-md transform hover:-translate-y-1">
              {/* Image Product */}
              <div className="relative h-40 w-full">
                <img src={product.image} alt={product.name} className=" duration-300 h-full object-cover transition-transform w-full group-hover:scale-110" />
                {/* Label Discount Or New */}
                <span className="absolute bg-orange-500 bg-opacity-75 p-2 text-white text-xs top-0">{product.label}</span>
              </div>

              {/* Detail Product */}
              <div className="p-3 space-y-2">
                <p className="font-semibold text-md truncate">{product.name}</p>
                <p className="text-slate-500 text-xs truncate">{product.specs}</p>
                <p className="font-semibold text-orange-500 text-md">{product.price}</p>
                <div className="flex items-center justify-between text-xs text-slate-500">
                  <p>{product.sold} Sold</p>
                  <div className="flex gap-2 items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill text-yellow-500" viewBox="0 0 16 16">
                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                    </svg>
                    <p>{product.rating}</p>
                  </div>
                </div>
              </div>

              {/* Button => View Details */}
              <div className="flex items-center justify-between p-3">
                <Link to={`/product/${product.id}`} className="bg-orange-500 duration-300 px-3 py-1.5 rounded-md transition text-sm text-white hover:bg-orange-600 md:px-5 md:py-1.5">
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Button => Pagination */}
        {currentPage > 0 && (
          <button onClick={handlePrev} className="absolute duration-300 left-0 rounded-full text-orange-500 top-1/2 transform -translate-y-1/2 hover:text-orange-700">
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-arrow-left-circle-fill" viewBox="0 0 16 16">
              <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0m3.5 7.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5z" />
            </svg>
          </button>
        )}
        {currentPage < totalPages - 1 && (
          <button onClick={handleNext} className="absolute duration-300 right-0 rounded-full text-orange-500 top-1/2 transform -translate-y-1/2 hover:text-orange-700">
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-arrow-right-circle-fill" viewBox="0 0 16 16">
              <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0M4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z" />
            </svg>
          </button>
        )}
      </div>
    </section>
  );
};

export default RecommendedProduct;
