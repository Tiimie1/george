import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import { saveAs } from "file-saver";

const styles = {
  pixelated: {
    height: "100px",
    imageRendering: "-moz-crisp-edges",
    imageRendering: "-o-crisp-edges",
    imageRendering: "-webkit-optimize-contrast",
    msInterpolationMode: "nearest-neighbor",
    imageRendering: "pixelated",
    cursor: "pointer",
  },
  container: {
    display: "flex",
    flexWrap: "wrap",
    gap: "20px",
    justifyContent: "center",
  },
};

const importAll = (requireContext) => requireContext.keys().map(requireContext);

const images = importAll(
  require.context("./assets", false, /\.(png|jpe?g|svg|gif)$/)
);

const biggerImages = importAll(
  require.context("./pfps", false, /\.(png|jpe?g|svg|gif)$/)
);

function App() {
  const ImageGallery = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [selectedImageIndex, setSelectedImageIndex] = useState(null);
    // const handleContextMenu = (event) => {
    //   event.preventDefault();
    // };

    const handleImageLoad = () => {
      setIsLoading(false);
    };

    const handleImageClick = (index) => {
      const biggerImage = biggerImages[index];
      saveAs(biggerImage, index);
    };

    return (
      <div style={styles.container}>
        {isLoading && <p>Loading images...</p>}
        {images.map((image, index) => (
          <div>
            <img
              //onContextMenu={handleContextMenu}
              key={index}
              src={image}
              alt={`Image ${index}`}
              onLoad={handleImageLoad}
              style={styles.pixelated}
              onClick={() => handleImageClick(index)}
            />
            <p style={{ margin: 0, padding: 0, textAlign: "center" }}>
              {index}
            </p>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div>
      <Navbar />
      <ImageGallery style={{ margin: "10px" }} />
    </div>
  );
}

export default App;
