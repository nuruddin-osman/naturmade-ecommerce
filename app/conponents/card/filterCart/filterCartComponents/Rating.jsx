"use client";
import { FilterCartSortRating } from "@/app/conponents/dummyData/DummyArray";
import React, { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const Rating = () => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [itemOpen, setItemOpen] = useState(false);

  const handleItemOpen = () => {
    setItemOpen(!itemOpen);
  };

  return (
    <>
      <div
        onClick={handleItemOpen}
        className="w-full flex items-center justify-between  p-3 text-left text-lg font-medium cursor-pointer"
      >
        <h3 className="text-[#343438] font-semibold text-xl font-montserrat capitalize">
          Rating
        </h3>
        <span className="text-gray-500">
          {itemOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}
        </span>
      </div>
      {itemOpen && (
        <div className="px-3">
          {FilterCartSortRating.map((item) => (
            <div key={item.category} className="flex items-center gap-2 pb-3">
              <input
                id={item.category}
                type="checkbox"
                name="filter-category"
                value={item.category}
                checked={selectedCategory === item.category}
                onChange={() => setSelectedCategory(item.category)}
                className="cursor-pointer"
              />
              <label
                htmlFor={item.category}
                className="flex items-center gap-1"
              >
                <span className="text-yellow-600 flex items-center gap-1">
                  {item.ratingLavel}
                </span>
                <span className="text-slate-400 flex items-center gap-1">
                  {item.rates}
                </span>
              </label>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default Rating;

// "use client";
// import { FilterCartSortRating } from "@/app/conponents/dummyData/DummyArray";
// import axios from "axios";
// import React, { useEffect, useState } from "react";
// import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
// import { IoStar } from "react-icons/io5";

// const Rating = () => {
//   const [selectedCategory, setSelectedCategory] = useState("");
//   const [itemOpen, setItemOpen] = useState(false);
//   const [data, setData] = useState([]);

//   const handleItemOpen = () => {
//     setItemOpen(!itemOpen);
//   };

//   useEffect(() => {
//     const fetchData = async () => {
//       const fetchArray = await axios.get(
//         "https://dummyjson.com/products?limit=100"
//       );
//       setData(fetchArray.data.products); // Assuming the API response has a `products` field
//     };
//     fetchData();
//   }, []);

//   return (
//     <>
//       <div
//         onClick={handleItemOpen}
//         className="w-full flex items-center justify-between  p-3 text-left text-lg font-medium cursor-pointer"
//       >
//         <h3 className="text-[#343438] font-semibold text-xl font-montserrat capitalize">
//           Rating
//         </h3>
//         <span className="text-gray-500">
//           {itemOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}
//         </span>
//       </div>
//       {itemOpen && (
//         <div className="px-3">
//           {data.map((item) => (
//             <div key={item.category} className="flex items-center gap-2 pb-3">
//               <input
//                 id={item.category}
//                 type="checkbox"
//                 name="filter-category"
//                 value={item.category}
//                 checked={selectedCategory === item.category}
//                 onChange={() => setSelectedCategory(item.category)}
//                 className="cursor-pointer"
//               />

//               <label
//                 htmlFor={item.category}
//                 className="flex items-center gap-1"
//               >
//                 {item.reviews[0].rating === 5 ? (
//                   <span className="flex items-center gap-1 text-yellow-600">
//                     <IoStar />
//                     <IoStar />
//                     <IoStar />
//                     <IoStar />
//                     <IoStar />
//                   </span>
//                 ) : item.reviews[0].rating === 4 ? (
//                   <span className="flex items-center gap-1 text-yellow-600">
//                     <IoStar />
//                     <IoStar />
//                     <IoStar />
//                     <IoStar />
//                   </span>
//                 ) : item.reviews[0].rating === 3 ? (
//                   <span className="flex items-center gap-1 text-yellow-600">
//                     <IoStar />
//                     <IoStar />
//                     <IoStar />
//                   </span>
//                 ) : (
//                   ""
//                 )}
//               </label>

//               {/* <span className="text-yellow-600 flex items-center gap-1">

//               </span> */}
//             </div>
//           ))}
//         </div>
//       )}
//     </>
//   );
// };

// export default Rating;
