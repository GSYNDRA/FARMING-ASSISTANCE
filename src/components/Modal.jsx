import React from "react";

const Modal = ({ show, onClose, onConfirm, children }) => {
  if (!show) {
    return null;
  }

  return (
    <div className="fixed inset-0 flex justify-center items-center z-50">
      <div className="border border-gray-300 bg-white rounded-lg shadow-lg p-6" style={{ width: "500px", boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.7), 0 2px 4px -1px rgba(0, 0, 0, 0.06)" }}> {/* Adjust width and shadow as needed */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold text-black">Add Item</h2> {/* Change color to black */}
        </div>
        <div>
          {/* Input for image link */}
          <div className="mb-4">
            <label htmlFor="imageLink" className="block text-sm font-medium text-gray-700">
              Image Link
            </label>
            <input
              type="text"
              id="imageLink"
              name="imageLink"
              className="mt-1 p-2 border border-gray-300 rounded-md w-full bg-white"
              placeholder="Enter image link"
            />
          </div>
          {/* Other content */}
          {children}
          {/* Confirm button */}
          <div className="flex justify-end mt-4">
            <button onClick={onClose} className="mr-2 px-4 py-2 bg-red-800 text-white rounded-md">Cancel</button>
            <button onClick={onConfirm} className="px-4 py-2 bg-[#63B6BD] text-white rounded-md">Confirm</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
