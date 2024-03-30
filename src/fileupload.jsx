import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const FileUploadForm = () => {
  const [file, setFile] = useState(null);

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    setFile(selectedFile);
  };

  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append('pdfFile', file);

    try {
      const response = await axios.post('/api/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log( response.data);
      alert(response.data)
      navigate("/view")

    } catch (error) {
      alert("Only pdf files are allowed")
      console.error('Error uploading file:', error);
    }
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <input type="file" accept=".pdf" name='pdfFile' onChange={handleFileChange} />
      <button type="submit" disabled={!file || loading}>
        {loading ? 'Uploading...' : 'Upload'}
      </button>
    </form>
  );
};

export default FileUploadForm;









// import React, { useState } from 'react';
// import axios from 'axios';

// const FileUploadForm = () => {
//   const [file, setFile] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);

//   const handleFileChange = (event) => {
//     const selectedFile = event.target.files[0];
//     setFile(selectedFile);
//     setError(null); // Reset error state when a new file is selected
//   };

//   const handleFormSubmit = async (event) => {
//     event.preventDefault();
//     setLoading(true);
//     const formData = new FormData();
//     formData.append('pdfFile', file);
  
//     try {
//       // Upload PDF file
//       const uploadResponse = await axios.post('/api/upload', formData, {
//         headers: {
//           'Content-Type': 'multipart/form-data',
//         },
//       });
//       console.log(uploadResponse.data);
      
//       // Extract pages
//       const extractResponse = await axios.post('/api/extract-pages', {
//         pdfPath: uploadResponse.data.filePath, // Assuming the server returns the file path after upload
//         selectedPages: [1, 2, 3] // Replace with the selected pages
//       });
//       console.log(extractResponse.data);
      
//       alert('File uploaded and pages extracted successfully');
//     } catch (error) {
//       if (error.response && error.response.status === 500) {
//         alert('Server error. Please try again later.');
//       } else {
//         alert('Error uploading file. Please make sure you selected a PDF file.');
//       }
//       console.error('Error handling form submission:', error);
//     } finally {
//       setLoading(false);
//     }
//   };
  

//   return (
//     <form onSubmit={handleFormSubmit} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
//       <input type="file" accept=".pdf" name="pdfFile" onChange={handleFileChange} />
//       {error && <p style={{ color: 'red' }}>{error}</p>}
//       <button type="submit" disabled={!file || loading}>
//         {loading ? 'Uploading...' : 'Upload and Extract Pages'}
//       </button>
//     </form>
//   );
// };

// export default FileUploadForm;


