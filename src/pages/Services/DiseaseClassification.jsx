import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import { FaSpinner } from 'react-icons/fa';

const HeroSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh; /* Full screen height */
  background-color: #f5f5f5;
`;

const HeroCard = styled.div`
  display: flex;
  width: 90%;
  height: 80vh;
  background-color: #ffffff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  overflow: hidden;
`;

const LeftSection = styled.div`
  flex: 1;
  background-image: url('https://via.placeholder.com/600');
  background-size: cover;
  background-position: center;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 40px;
  color: #fff;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 1;
  }
`;

const LeftContent = styled.div`
  position: relative;
  z-index: 2;
`;

const Title = styled.h1`
  font-size: 36px;
  margin-bottom: 20px;
`;

const Description = styled.p`
  font-size: 18px;
`;

const RightSection = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 40px;
  background-color: #f9f9f9;
`;

const ImageUploadTitle = styled.h3`
  font-size: 20px;
  margin-bottom: 15px;
  color: ${({ theme }) => theme.colors.primary};
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
`;

const ImageUpload = styled.input`
  display: none;
`;

const ImagePreview = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 10px;
`;

const PreviewImage = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 5px;
  object-fit: cover;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
`;

const SubmitButton = styled.button`
  padding: 10px 20px;
  background-color: #27ae60; /* Green color */
  color: #fff;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: #1e8449;
  }

  &:disabled {
    background-color: #cccccc;
    cursor: not-allowed;
  }
`;

const ResultCardWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 50px 0; /* Padding from top and bottom, including from the footer */
`;

const ResultCard = styled.div`
  width: 70%;
  padding: 30px;
  background-color: #ffffff;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  border-radius: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.2);
  }
`;

const ResultLeftSection = styled.div`
  flex: 1;
  text-align: center;
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
`;

const CureTitle = styled.h3`
  font-size: 24px;
  margin-bottom: 15px;
  color: #27ae60;
`;

const CureList = styled.ul`
  list-style-type: disc;
  margin-left: 20px;
`;

const CureItem = styled.li`
  font-size: 18px;
  margin-bottom: 10px;
`;

function DiseaseClassification() {
  const [selectedImages, setSelectedImages] = useState([]);
  const [isProcessing, setIsProcessing] = useState(false);
  const [result, setResult] = useState(null);

  const resultRef = useRef(null);

  const handleImageUpload = (event) => {
    const files = Array.from(event.target.files);
    setSelectedImages(files);
  };

  const handleSubmit = () => {
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      setResult({
        image: URL.createObjectURL(selectedImages[0]),
        disease: 'Sample Disease',
        cure: [
          'Apply fungicide every two weeks.',
          'Remove infected leaves immediately.',
          'Ensure proper spacing between plants.',
        ],
      });

      // Scroll to the result card after processing
      resultRef.current.scrollIntoView({ behavior: 'smooth' });
    }, 3000);
  };

  return (
    <div>
      <HeroSection>
        <HeroCard>
          <LeftSection>
            <LeftContent>
              <Title>Disease Classification Service</Title>
              <Description>
                Upload an image of your crop, and we'll identify the disease and suggest a cure.
              </Description>
            </LeftContent>
          </LeftSection>
          <RightSection>
            <ImageUploadTitle>Upload Crop Image</ImageUploadTitle>
            <ImageUploadWrapper>
              <ImageUpload
                type="file"
                accept="image/*"
                multiple
                onChange={handleImageUpload}
              />
              <p>Click here to upload images</p>
              <ImagePreview>
                {selectedImages.map((image, index) => (
                  <PreviewImage
                    key={index}
                    src={URL.createObjectURL(image)}
                    alt={`Selected ${index + 1}`}
                  />
                ))}
              </ImagePreview>
            </ImageUploadWrapper>
            <SubmitButton
              onClick={handleSubmit}
              disabled={isProcessing || selectedImages.length === 0}
            >
              {isProcessing ? (
                <>
                  <FaSpinner className="spinner" /> Processing...
                </>
              ) : (
                'Submit'
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
    </div>
  );
}

export default DiseaseClassification;
