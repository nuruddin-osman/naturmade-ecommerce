// "use client";
// import React from "react";
// import Image from "next/image";
// import Link from "next/link";

// const CardForGetStartedPage = ({ item }) => {
//   if (!item) {
//     return null;
//   }

//   return (
//     <div className="">
//       <div
//         key={item.id}
//         className="bg-[#F5F5F7] border rounded-lg shadow-md p-4 xl:w-[300px] w-[225px] font-montserrat relative"
//       >
//         {/* Heart Icon */}
//         <button className="absolute top-3 right-3 text-gray-400 hover:text-red-500 text-3xl">
//           {item.favorites}
//         </button>

//         {/* Product Title */}
//         <div className="flex flex-col items-center">
//           <h3 className="font-bold text-base text-[#343438] tracking-[2px] capitalize">
//             {item.baseName}
//             <span className="font-normal uppercase">{item.nameSubtruc}</span>
//           </h3>
//           <p className="text-base text-[#343438] font-normal uppercase">
//             {item.productTitle}
//           </p>

//           {/* Star Rating */}
//           <div className="flex items-center my-1">
//             <div className="flex text-yellow-400"> {item.review}</div>
//             <span className="ml-2 text-gray-600 text-sm">
//               {item.reviewPerson}
//             </span>
//           </div>
//         </div>

//         {/* Product Image */}
//         <div className="flex justify-center my-4">
//           <Image
//             src={item.image}
//             alt={item.productTitle}
//             width={150}
//             height={100}
//             className="object-cover"
//           />
//         </div>

//         {/* "New" Badge */}
//         {item.isNew && (
//           <div className="absolute top-20 left-2 bg-red-500 text-white text-xs font-normal px-2 py-1 h-16 w-16 rounded-full flex items-center justify-center">
//             {item.isNew}
//           </div>
//         )}

//         {item.cetagory === "collections" ? (
//           <div className="mt-10">
//             <div
//               className={`flex items-center px-10 ${
//                 item.mensMultivitamins === "multivitamins"
//                   ? "justify-between"
//                   : "justify-center"
//               }`}
//             >
//               <div className="flex flex-col gap-1 items-center mb-2">
//                 <div className="w-6 h-6 overflow-hidden">
//                   <Image
//                     className="w-full h-full object-contain"
//                     src={item.productIconGen}
//                     alt={item.productTitle}
//                     width={24}
//                     height={24}
//                   />
//                 </div>
//                 <div className="text-sm font-montserrat font-medium text-[#343438] flex flex-col items-center justify-center leading-4 uppercase">
//                   general <br />
//                   wellness
//                 </div>
//               </div>
//               {item.mensMultivitamins === "multivitamins" && (
//                 <>
//                   <span className="h-10 w-[1px] bg-slate-500"></span>
//                   <div className="flex flex-col gap-1 items-center mb-2">
//                     <div className="w-6 h-6 overflow-hidden">
//                       <Image
//                         className="w-full h-full object-contain"
//                         src={item.productIconVit}
//                         alt={item.productTitle}
//                         width={24}
//                         height={24}
//                       />
//                     </div>
//                     <div className="text-sm font-montserrat font-medium text-[#343438] flex flex-col items-center justify-center leading-4 uppercase">
//                       men's <br />
//                       health
//                     </div>
//                   </div>
//                 </>
//               )}
//             </div>
//             <div className="w-4/5 mx-auto">
//               <Link
//                 href="#"
//                 className="text-lg font-montserrat font-bold rounded-bl-xl rounded-tr-xl px-3 py-1 bg-[#FDCA21] text-[#343438] hover:text-[#000] hover:scale-[1.02] transform transition-all ease-in-out duration-300 capitalize w-full flex items-center justify-center"
//               >
//                 {item.buyBtn}
//               </Link>
//             </div>
//           </div>
//         ) : (
//           <div>
//             <div className="flex justify-between items-center my-3">
//               <div className="flex flex-col gap-1 items-center">
//                 <div className="h-5 w-5">
//                   <Image
//                     src={item.productIcon}
//                     alt={item.productTitle}
//                     width={20}
//                     height={20}
//                   />
//                 </div>
//                 <p className="text-xs text-[#343438] tracking-wider">
//                   {item.productType}
//                 </p>
//               </div>
//               <span className="h-10 w-[1px] bg-slate-500"></span>
//               <div className="flex flex-col items-center gap-1">
//                 <div className="h-5 w-5">
//                   <Image
//                     src={item.doseIcon}
//                     alt={item.productTitle}
//                     width={20}
//                     height={20}
//                   />
//                 </div>
//                 <p className="font-bold text-[#343438]">{item.doseType}</p>
//               </div>
//             </div>
//             <div className="flex gap-3 items-center justify-between">
//               <p className="text-base font-normal text-[#343438]">
//                 {item.price}
//               </p>
//               <button className="text-lg font-montserrat font-bold rounded-bl-xl rounded-tr-xl px-3 py-1 bg-[#FDCA21] text-[#343438] hover:text-[#000] hover:scale-[1.02] transform transition-all ease-in-out duration-300 capitalize">
//                 {item.buyBtn}
//               </button>
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default CardForGetStartedPage;
