"use client";
import { useState } from "react";
import CourseCard from "../components/CourseCard";
import Modal from "../components/Modal";

export default function Home() {
  const [courses, setCourses] = useState([
    {
      title: "Machine Learning",
      code: "CS771",
      credits: 9,
      description: "An advanced course on machine learning algorithms.",
      image: "/ml.png", // Replace with your image path
    },
    {
      title: "Data Structures and Algorithms",
      code: "ESO207",
      credits: 11,
      description: "Learn about arrays, linked lists, trees, and more.",
      image: "/dsa.png", // Replace with your image path
    },
    {
      title: "Fluid Mechanics",
      code: "ME302",
      credits: 9,
      description: "Fundamentals of fluid mechanics and applications.",
      image: "/fluid.png", // Replace with your image path
    },
    {
      title: "Introduction to Electronics",
      code: "ESO201",
      credits: 11,
      description: "Basics of electrical circuits and applications.",
      image: "/electronics.png", // Replace with your image path
    },
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState(null); // New state for selected course

  const handleCardClick = (course) => {
    setSelectedCourse(course); // Set the clicked course
    setIsModalOpen(true); // Open the modal
  };

  const handleAddCourse = (newCourse) => {
    setCourses((prev) => [...prev, newCourse]);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <header className="flex justify-between items-center bg-blue-500 text-white px-4 py-2 rounded-md shadow-md">
        <h1 className="text-lg font-bold">Course Helper</h1>
        <button className="px-4 py-2 bg-white text-blue-500 rounded-md shadow hover:bg-gray-200">
          LOGIN
        </button>
      </header>
      <main className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map((course, index) => (
          <CourseCard
            key={index}
            course={course}
            onClick={() => handleCardClick(course)} // Pass the click handler
          />
        ))}
      </main>
      <div className="flex justify-center mt-6">
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded-md shadow hover:bg-blue-600"
          onClick={() => {
            setSelectedCourse(null); // Reset selectedCourse for adding a new course
            setIsModalOpen(true); // Open the modal for adding a course
          }}
        >
          ADD COURSE
        </button>
      </div>

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleAddCourse}
        course={selectedCourse} // Pass selected course to the modal
      />
    </div>
  );
}
