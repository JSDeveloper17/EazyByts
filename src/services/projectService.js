import axios from "axios";

const API_URL = "http://localhost:4000/api/projects";

//  Get all projects of logged-in user
export const getProjects = async (token) => {
  const res = await axios.get(API_URL, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return res.data;
};


export const createProject = async (projectData, token) => {
  const res = await axios.post(API_URL, projectData, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return res.data;
};


export const updateProject = async (id, projectData, token) => {
  const res = await axios.put(`${API_URL}/${id}`, projectData, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return res.data;
};


export const deleteProject = async (id, token) => {
  const res = await axios.delete(`${API_URL}/${id}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return res.data;
};
