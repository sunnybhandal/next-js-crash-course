"use client";
import { useState } from "react";

export const CourseSearch = ({ getSearchResults }) => {
  const [query, setQuery] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch(`/api/courses/search?query=${query}`);
    const courses = await res.json();
    getSearchResults(courses);
  };

  return (
    <form onSubmit={handleSubmit} className="">
      <input
        type="text"
        placeholder="Search Courses..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="text-black"
      />
      <button type="submit" className="bg-blue-500">
        Search
      </button>
    </form>
  );
};
