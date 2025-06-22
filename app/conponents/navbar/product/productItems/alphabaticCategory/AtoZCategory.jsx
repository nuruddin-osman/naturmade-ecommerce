"use client";
import LinkForNavProductABC from "@/app/conponents/utilities/LinkForNavProductABC";
import {
  closeMenu,
  hideComponent,
  loadDataFromStorage,
  setFetchData,
} from "@/app/featurs/toggleMenu/menuSlice";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

const AtoZCategory = ({ abcd, onCategoryClick }) => {
  const [data, setData] = useState([]);
  const [groupedCategories, setGroupedCategories] = useState({}); // Grouping categories by letter
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadDataFromStorage());
  }, [dispatch]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchArray = await axios.get(
          "https://dummyjson.com/products?limit=200&skip=100"
        );
        setData(fetchArray.data.products);
      } catch (error) {
        console.error("Failed to fetch products", error);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    // Grouping the data by letter (grouping categories)
    const grouped = data.reduce((acc, item) => {
      if (item.category) {
        const category = item.category;
        const firstLetter = category.charAt(0).toUpperCase(); // Extracting the first letter
        if (!acc[firstLetter]) {
          acc[firstLetter] = [];
        }
        acc[firstLetter].push(category);
      }
      return acc;
    }, {});

    // Creating data for all letters to show even if there are no categories
    const allLetters = Array.from({ length: 26 }, (_, i) =>
      String.fromCharCode(65 + i)
    );

    const completeGrouped = allLetters.reduce((acc, letter) => {
      acc[letter] = grouped[letter] || []; // If no data, keeping an empty array
      return acc;
    }, {});

    setGroupedCategories(completeGrouped);
  }, [data]);

  // Filtered result for specific letter or all
  const displayedCategories =
    abcd && abcd !== ""
      ? { [abcd]: groupedCategories[abcd] || [] }
      : groupedCategories; // Shows a specific letter if 'abcd' is set

  const handleNavigate = () => {
    dispatch(setFetchData(data));

    dispatch(closeMenu());
    onCategoryClick();
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 scroll-auto">
      {Object.keys(displayedCategories).some(
        (letter) => displayedCategories[letter].length > 0
      ) ? (
        Object.keys(displayedCategories).map(
          (letter) =>
            displayedCategories[letter].length > 0 && ( // Only shows those with data underneath
              <div key={letter} className="p-4 border rounded shadow h-fit">
                <h4 className="text-lg font-bold text-blue-600 uppercase mb-4">
                  {letter}
                </h4>
                <ul>
                  {[...new Set(displayedCategories[letter])].map(
                    (category, index) => (
                      <li onClick={handleNavigate} key={index} className="mb-2">
                        <LinkForNavProductABC
                          href={`/products/${encodeURIComponent(category)}`}
                          title={category}
                        />
                      </li>
                    )
                  )}
                </ul>
              </div>
            )
        )
      ) : (
        <p className="col-span-full text-gray-600">No categories available.</p>
      )}
    </div>
  );
};

export default AtoZCategory;
