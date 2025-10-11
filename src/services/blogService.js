// src/services/blogService.js
import axios from "axios";

const API_URL = "http://localhost:5000/api/blogs"; // adjust backend URL as needed

export const getBlogs = async (token) => {
  return await axios.get(API_URL, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const createBlog = async (data, token) => {
  return await axios.post(API_URL, data, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const deleteBlog = async (id, token) => {
  return await axios.delete(`${API_URL}/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};
