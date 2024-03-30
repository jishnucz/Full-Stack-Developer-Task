// import React, { useState } from 'react';
// import { Document, Page } from 'react-pdf';

// const PDFViewer = ({ file }) => {

//   return (
//     <div>
//       welcome
//     </div>
//   );
// };

// export default PDFViewer;

import React, { useEffect, useState } from 'react';
import axios from 'axios';

const PDFViewer = () => {
  // const [imageUrls, setImageUrls] = useState([]);

  // useEffect(() => {
  //   const fetchImages = async () => {
  //     try {
  //       const response = await axios.get('/api/images');
  //       setImageUrls(response.data.imageUrls);
  //     } catch (error) {
  //       console.error('Error fetching images:', error);
  //     }
  //   };

  //   fetchImages();
  // }, []);

  return (
    <div>
      <h2>Visual Representation of PDF Pages</h2>
      {/* <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {imageUrls.map((imageUrl, index) => (
          <img key={index} src={imageUrl} alt={`Page ${index + 1}`} style={{ width: '200px', height: 'auto', margin: '5px' }} />
        ))}
      </div> */}
    </div>
  );
};

export default PDFViewer;
