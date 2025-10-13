
import { useContext, useEffect, useState } from "react";
import API from "../../services/api.js"; 
import { AuthContext } from "../../context/AuthContext.jsx";
import "./DashBoardProjects.css";

export const Projects = () => {
  const { user } = useContext(AuthContext);
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true); 
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [githubLink, setGithubLink] = useState("");
  const [liveLink, setLiveLink] = useState("");
  const [technologies, setTechnologies] = useState(""); 
  const [image, setImage] = useState(null); 
  const [imagePreview, setImagePreview] = useState("");
  const [editingId, setEditingId] = useState(null);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  // Fetch projects on mount
  useEffect(() => {
    const fetchProjects = async () => {
      setLoading(true);
      try {
        const response = await API.get("/projects"); 
        setProjects(response.data.projects || response.data);
        setError(""); // Clear error on success
      } catch (err) {
        console.error("Fetch projects error:", {
          status: err.response?.status,
          message: err.response?.data?.message || err.message,
          data: err.response?.data,
        }); // Detailed logging for debug
        setError("Failed to load projects. Check browser console for details (e.g., 404 if route wrong, 401 if unauthorized).");
      } finally {
        setLoading(false);
      }
    };
    fetchProjects();
  }, []);


  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    
    if (!title || !description || !githubLink || !liveLink || !technologies || (!image && !editingId)) {
      setError("All fields are required.");
      return;
    }

    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    formData.append("githubLink", githubLink);
    formData.append("liveLink", liveLink);
    formData.append("technologies", technologies); 
    if (image) formData.append("image", image);

    try {
      let response;
      if (editingId) {
        response = await API.put(`/projects/${editingId}`, formData);
        setSuccess("Project updated successfully!");
      } else {
        response = await API.post("/projects", formData);
        setSuccess("Project created successfully!");
      }
      // Refresh list
      const updatedResponse = await API.get("/projects");
      setProjects(updatedResponse.data.projects || updatedResponse.data);
      resetForm();
    } catch (err) {
      console.error("Project operation error:", {
        status: err.response?.status,
        message: err.response?.data?.message || err.message,
      });
      setError(err.response?.data?.message || "Operation failed. Check console.");
    }
  };

  
  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this project?")) return;
    try {
      await API.delete(`/projects/${id}`);
      setProjects(projects.filter((p) => p._id !== id)); // Use id from Postman
      setSuccess("Project deleted successfully!");
    } catch (err) {
      console.error("Delete error:", err.response?.data || err.message);
      setError("Failed to delete project.");
    }
  };


  const handleEdit = (project) => {
    setTitle(project.title);
    setDescription(project.description);
    setGithubLink(project.githubLink);
    setLiveLink(project.liveLink);
    
    let techArray = project.technologies;
    if (typeof project.technologies === "string") {
      try {
        techArray = JSON.parse(project.technologies);
      } catch {
        techArray = project.technologies.split(",").map(t => t.trim());
      }
    }
    setTechnologies(Array.isArray(techArray) ? techArray.join(", ") : "");
    setImagePreview(project.image);
    setEditingId(project.id); 
  };

  
  const resetForm = () => {
    setTitle("");
    setDescription("");
    setGithubLink("");
    setLiveLink("");
    setTechnologies("");
    setImage(null);
    setImagePreview("");
    setEditingId(null);
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
    if (file) {
      setImagePreview(URL.createObjectURL(file));
    }
  };

  return (
    <div className="projects-section container">
      <h2>Project Management</h2>
      
    
      <form onSubmit={handleSubmit} className="project-form">
        <label htmlFor="title">Title</label>
        <input id="title" type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Enter project title" required />
        
        <label htmlFor="description">Description</label>
        <textarea id="description" value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Enter project description" required />
        
        <label htmlFor="githubLink">GitHub Link</label>
        <input id="githubLink" type="url" value={githubLink} onChange={(e) => setGithubLink(e.target.value)} placeholder="https://github.com/..." required />
        
        <label htmlFor="liveLink">Live Link</label>
        <input id="liveLink" type="url" value={liveLink} onChange={(e) => setLiveLink(e.target.value)} placeholder="https://your-project.com" required />
        
        <label htmlFor="technologies">Technologies (comma-separated)</label>
        <input id="technologies" type="text" value={technologies} onChange={(e) => setTechnologies(e.target.value)} placeholder="React, Tailwind CSS, API" required />
        
        <label htmlFor="image">Project Image</label>
        <input id="image" type="file" onChange={handleImageChange} accept="image/*" required={!editingId} />
        {imagePreview && <img src={imagePreview} alt="Preview" className="image-preview" />}
        
        <button type="submit" className="btn-primary">{editingId ? "Update Project" : "Add Project"}</button>
        {editingId && <button type="button" className="btn-secondary" onClick={resetForm}>Cancel Edit</button>}
      </form>
      
      {error && <p className="error-message">{error}</p>}
      {success && <p className="success-message">{success}</p>}
      
      {/* Project List */}
      <div className="project-list">
        {loading ? (
          <p>Loading projects...</p>
        ) : projects.length === 0 ? (
          <p>No projects found. Add one to get started!</p>
        ) : (
          projects.map((project) => {
            // Parse technologies if string
            let techs = project.technologies;
            if (typeof project.technologies === "string") {
              try {
                techs = JSON.parse(project.technologies);
              } catch {
                techs = project.technologies.split(",").map(t => t.trim());
              }
            }
            return (
              <div key={project._id} className="project-card">
                <img src={project.image} alt={project.title} className="project-thumbnail" />
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="technologies">
                  {techs.map((tech, idx) => (
                    <span key={idx} className="tech-tag">{tech}</span>
                  ))}
                </div>
                <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="link">GitHub</a>
                <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="link">Live Demo</a>
                <button className="btn-edit" onClick={() => handleEdit(project)}>Edit</button>
                <button className="btn-delete" onClick={() => handleDelete(project._id)}>Delete</button>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};