import React, { useState, useRef } from "react";
import styled from "styled-components";
import { FaSpinner, FaCamera, FaTimes } from "react-icons/fa";
import Webcam from "react-webcam";
import LeftSectionImg from "../../assets/images/disease-classification-inside.jpg";
import cropdis from "../../assets/images/crop-dis.jpg";

const HeroSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh; /* Changed from height to min-height */
  background-color: #f5f5f5;
  padding: 20px; /* Added padding for mobile responsiveness */
`;

const HeroCard = styled.div`
  display: flex;
  flex-direction: row; /* Added for mobile responsiveness */
  width: 100%;
  max-width: 1200px; /* Added max-width */
  background-color: #ffffff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  overflow: hidden;

  @media (max-width: 768px) {
    flex-direction: column; /* Stack sections on mobile */
  }
`;

const LeftSection = styled.div`
  flex: 1;
  background-image: url(${LeftSectionImg});
  background-size: cover;
  background-position: center;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 40px;
  color: #fff;

  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 1;
  }

  @media (max-width: 768px) {
    padding: 20px;
    height: 300px; /* Adjusted height for mobile */
  }
`;

const LeftContent = styled.div`
  position: relative;
  z-index: 2;
`;

const Title = styled.h1`
  font-size: 36px;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    font-size: 28px;
  }
`;

const Description = styled.p`
  font-size: 18px;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const RightSection = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 40px;
  background-color: #f9f9f9;

  @media (max-width: 768px) {
    padding: 20px;
  }
`;

const ImageUploadTitle = styled.h3`
  font-size: 20px;
  margin-bottom: 15px;
  color: ${({ theme }) => theme.colors.primary};

  @media (max-width: 768px) {
    font-size: 18px;
  }
`;

const ImageUploadWrapper = styled.label`
  margin-bottom: 20px;
  padding: 20px;
  background-color: #ffffff;
  border: 2px dashed ${({ theme }) => theme.colors.primary};
  border-radius: 10px;
  text-align: center;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: ${({ theme }) => theme.colors.lightPrimary};
    border-color: ${({ theme }) => theme.colors.darkPrimary};
    transform: translateY(-5px);
  }

  @media (max-width: 768px) {
    padding: 15px;
  }
`;

const ImageUpload = styled.input`
  display: none;
`;

const ImagePreview = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 10px;
  justify-content: center;
`;

const PreviewImage = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 5px;
  object-fit: cover;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
`;

const SubmitButton = styled.button`
  padding: 12px 24px;
  background-color: ${({ theme }) =>
    theme.colors.primary}; /* Use theme color */
  color: #fff;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 10px;

  &:hover {
    background-color: ${({ theme }) =>
      theme.colors.darkPrimary}; /* Use darker shade */
  }

  &:disabled {
    background-color: #cccccc;
    cursor: not-allowed;
  }
`;

const ResultCardWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 50px 20px; /* Added horizontal padding */

  @media (max-width: 768px) {
    padding: 30px 10px;
  }
`;

const ResultCard = styled.div`
  width: 100%;
  max-width: 800px;
  padding: 30px;
  background-color: #ffffff;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  border-radius: 15px;
  display: flex;
  flex-direction: row; /* Added for responsiveness */
  justify-content: space-between;
  align-items: center;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.2);
  }

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const ResultLeftSection = styled.div`
  flex: 1;
  text-align: center;
  margin-bottom: 20px; /* Added margin for mobile */

  @media (max-width: 768px) {
    margin-bottom: 20px;
  }
`;

const ResultImage = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 15px;
  object-fit: cover;
  margin-bottom: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const DiseaseName = styled.h2`
  font-size: 28px;
  font-weight: bold;
  color: #333;
`;

const ResultRightSection = styled.div`
  flex: 2;
  padding-left: 30px;

  @media (max-width: 768px) {
    padding-left: 0;
  }
`;

const CureTitle = styled.h3`
  font-size: 24px;
  margin-bottom: 15px;
  color: ${({ theme }) => theme.colors.primary}; /* Use theme color */
`;

const CureList = styled.ul`
  list-style-type: disc;
  margin-left: 20px;
`;

const CureItem = styled.li`
  font-size: 18px;
  margin-bottom: 10px;
`;

/* Updated Styled Components for Camera Button and Modal */
const CaptureButton = styled.button`
  padding: 12px 24px;
  background-color: ${({ theme }) =>
    theme.colors.secondary}; /* Use theme secondary color */
  color: #fff;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  margin-bottom: 20px;
  margin-top: 10px;
  transition: background-color 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: ${({ theme }) =>
      theme.colors.darkSecondary}; /* Use darker shade */
  }

  &:disabled {
    background-color: #cccccc;
    cursor: not-allowed;
  }

  svg {
    margin-right: 8px;
  }
`;

const ModalBackground = styled.div`
  display: ${({ isOpen }) => (isOpen ? "flex" : "none")};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 1000;
  justify-content: center;
  align-items: center;
`;

const ModalContent = styled.div`
  background-color: #ffffff;
  padding: 20px;
  border-radius: 15px;
  width: 90%;
  max-width: 500px;
  position: relative;
  text-align: center;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  overflow: hidden; /* Added to prevent overflow issues */

  @media (max-width: 768px) {
    padding: 15px;
  }
`;

/* Updated CloseButton with higher z-index */
const CloseButton = styled.button`
  position: absolute;
  top: 15px;
  right: 15px;
  z-index: 2; /* Ensures the button is above other elements */
  background: transparent;
  border: none;
  font-size: 24px;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.primary};

  &:hover {
    color: ${({ theme }) => theme.colors.darkPrimary};
  }
`;
function DiseaseClassification() {
  const [selectedImages, setSelectedImages] = useState([]);
  const [capturedImage, setCapturedImage] = useState(null);
  const [isCameraOpen, setIsCameraOpen] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [result, setResult] = useState(null);

  const resultRef = useRef(null);
  const webcamRef = useRef(null);

  const handleImageUpload = (event) => {
    const files = Array.from(event.target.files);
    setSelectedImages(files);
    setCapturedImage(null); // Clear captured image if new images are uploaded
  };

  const openCamera = () => {
    setIsCameraOpen(true);
    setSelectedImages([]); // Clear selected images if camera is opened
  };

  const closeCamera = () => {
    setIsCameraOpen(false);
  };

  const captureImage = () => {
    const imageSrc = webcamRef.current.getScreenshot();
    setCapturedImage(imageSrc);
    setIsCameraOpen(false);
  };

  const handleSubmit = async () => {
    if (!capturedImage && selectedImages.length === 0) {
      // No image selected or captured
      return;
    }

    setIsProcessing(true);

    try {
      let formData = new FormData();

      if (capturedImage) {
        // Convert data URL to Blob
        const res = await fetch(capturedImage);
        const blob = await res.blob();
        formData.append("image", blob, "capturedImage.jpg");
      } else if (selectedImages.length > 0) {
        formData.append("image", selectedImages[0]);
      }

      // Make API call to backend
      const response = await fetch("http://127.0.0.1:8000/api/analyze", {
        method: "POST",
        body: formData,
      });

      const resultData = await response.json();

      if (response.ok) {
        setResult({
          image: resultData.processedImage,
          disease: resultData.diseaseName,
          cure: resultData.cure,
        });

        // Scroll to the result card after processing
        if (resultRef.current) {
          resultRef.current.scrollIntoView({ behavior: "smooth" });
        }
      } else {
        console.error("Error from backend:", resultData.error);
        alert("Error: " + resultData.error);
      }
    } catch (error) {
      console.error("Error processing image:", error);
      alert("Error processing image. Please try again.");
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <div>
      <HeroSection>
        <HeroCard>
          <LeftSection>
            <LeftContent>
              <Title>Disease Classification Service</Title>
              <Description>
                Upload an image of your crop, or use your camera to capture one.
                We'll identify the disease and suggest a cure.
              </Description>
            </LeftContent>
          </LeftSection>
          <RightSection>
            <CaptureButton onClick={openCamera}>
              <FaCamera /> Open Camera
            </CaptureButton>
            <ImageUploadTitle>Upload Crop Image</ImageUploadTitle>
            <ImageUploadWrapper>
              <ImageUpload
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
              />
              <p>Click here to upload an image</p>
              <ImagePreview>
                {selectedImages.map((image, index) => (
                  <PreviewImage
                    key={index}
                    src={URL.createObjectURL(image)}
                    alt={`Selected ${index + 1}`}
                  />
                ))}
                {capturedImage && (
                  <PreviewImage src={capturedImage} alt="Captured" />
                )}
              </ImagePreview>
            </ImageUploadWrapper>
            <SubmitButton
              onClick={handleSubmit}
              disabled={
                isProcessing || (selectedImages.length === 0 && !capturedImage)
              }
            >
              {isProcessing ? (
                <>
                  <FaSpinner className="spinner" /> Processing...
                </>
              ) : (
                "Submit"
              )}
            </SubmitButton>
          </RightSection>
        </HeroCard>
      </HeroSection>

      {result && (
        <ResultCardWrapper ref={resultRef}>
          <ResultCard>
            <ResultLeftSection>
              <ResultImage src={result.image} alt="Result" />
              <DiseaseName>{result.disease}</DiseaseName>
            </ResultLeftSection>
            <ResultRightSection>
              <CureTitle>Cure</CureTitle>
              <CureList>
                {result.cure.map((item, index) => (
                  <CureItem key={index}>{item}</CureItem>
                ))}
              </CureList>
            </ResultRightSection>
          </ResultCard>
        </ResultCardWrapper>
      )}

      {/* Camera Modal */}
      <ModalBackground isOpen={isCameraOpen}>
        <ModalContent>
          <CloseButton onClick={closeCamera}>
            <FaTimes />
          </CloseButton>
          <Webcam
            audio={false}
            ref={webcamRef}
            screenshotFormat="image/jpeg"
            width="100%"
            videoConstraints={{
              facingMode: "environment", // Use rear camera if available
            }}
            style={{ borderRadius: "10px" }}
          />
          <CaptureButton onClick={captureImage}>
            <FaCamera /> Capture Photo
          </CaptureButton>
        </ModalContent>
      </ModalBackground>
    </div>
  );
}

export default DiseaseClassification;
