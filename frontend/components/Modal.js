import { useState, useEffect } from "react";

export default function Modal({ isOpen, onClose, onSubmit, course }) {
  const [formData, setFormData] = useState({
    title: "",
    code: "",
    credits: "",
    description: "",
    image: "",
  });

  // Populate form data when a course is selected
  useEffect(() => {
    if (course) {
      setFormData(course);
    }
  }, [course]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
    setFormData({
      title: "",
      code: "",
      credits: "",
      description: "",
      image: "",
    });
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-6 rounded-md w-96">
        <h2 className="text-xl font-bold mb-4">
          {course ? "Course Details" : "Add New Course"}
        </h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="title"
            placeholder="Course Name"
            value={formData.title}
            onChange={handleChange}
            className="w-full p-2 mb-2 border rounded"
            disabled={!!course} // Disable editing for course details
            required
          />
          <input
            type="text"
            name="code"
            placeholder="Course Code"
            value={formData.code}
            onChange={handleChange}
            className="w-full p-2 mb-2 border rounded"
            disabled={!!course}
            required
          />
          <input
            type="number"
            name="credits"
            placeholder="Credits"
            value={formData.credits}
            onChange={handleChange}
            className="w-full p-2 mb-2 border rounded"
            disabled={!!course}
            required
          />
          <textarea
            name="description"
            placeholder="Description"
            value={formData.description}
            onChange={handleChange}
            className="w-full p-2 mb-2 border rounded"
            disabled={!!course}
            required
          />
          <input
            type="text"
            name="image"
            placeholder="Image URL"
            value={formData.image}
            onChange={handleChange}
            className="w-full p-2 mb-4 border rounded"
            disabled={!!course}
            required
          />
        </form>
        <div className="flex justify-end gap-2 mt-4">
          {course && (
            <>
              <button
                type="button"
                className="px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600"
              >
                Update
              </button>
              <button
                type="button"
                className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
              >
                Delete
              </button>
            </>
          )}
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
