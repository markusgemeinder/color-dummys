import styled from "styled-components";
import { useState, useEffect } from "react";

const Wrapper = styled.div`
  margin: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const ImageContainer = styled.div`
  margin-top: 16px;
  text-align: center;
`;

const Title = styled.h1`
  color: #32393d;
`;

const StyledLink = styled.a`
  margin: 1rem;
  padding: 1rem;
  color: #32393d;

  &:hover,
  :active {
    color: #32393d;
  }
`;

const InputContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 16px;
`;

const InputLabel = styled.label`
  font-size: 16px;
  font-weight: bold;
  color: #32393d;
  margin-right: 8px; // Adjust the margin as needed
`;

const StyledInput = styled.input`
  padding: 8px;
  font-size: 16px;
  border-radius: 0.4rem;
  border: 1px solid #525e66;
`;

const Button = styled.button`
  margin: 2rem;
  padding: 1rem;
  font-size: 16px;
  font-weight: bold;
  color: #525e66;
  background-color: #b7bfc4;
  border-radius: 3rem;
  border: 2px solid #525e66;
  cursor: pointer;

  &:hover {
    color: #ffffff;
  }
`;

export default function HomePage() {
  const [imageText, setImageText] = useState("");
  const [randomImageLink, setRandomImageLink] = useState(
    "https://dummyimage.com/600x400/525e66/00ff00?text=hello"
  );

  function getRandomColor() {
    return Math.floor(Math.random() * 16777215).toString(16);
  }

  function generateRandomImageLink() {
    const backgroundColor = getRandomColor();
    const foregroundColor = getRandomColor();

    const formattedBackgroundColor = `#${backgroundColor}`;
    const formattedForegroundColor = `#${foregroundColor}`;

    const textParameter = imageText
      ? `?text=${encodeURIComponent(`${imageText}`)}`
      : `?text=${encodeURIComponent(
          `${formattedForegroundColor}-on-${formattedBackgroundColor}`
        )}`;

    const newRandomImageLink = `https://dummyimage.com/600x400/${backgroundColor}/${foregroundColor}${textParameter}`;
    return newRandomImageLink;
  }

  const handleNewImage = () => {
    setRandomImageLink(generateRandomImageLink());
  };

  const handleInputChange = (event) => {
    setImageText(event.target.value);
  };

  return (
    <Wrapper>
      <Title>Random Color Image Generator</Title>
      <ImageContainer>
        <a href={randomImageLink} target="_blank" rel="noopener noreferrer">
          <img src={randomImageLink} alt="Dummy Image" />
        </a>
        <p>
          <StyledLink href={randomImageLink}>{randomImageLink}</StyledLink>
        </p>
      </ImageContainer>
      <InputContainer>
        <InputLabel htmlFor="imageText">Image Text</InputLabel>
        <StyledInput
          type="text"
          id="imageText"
          value={imageText}
          onChange={handleInputChange}
          defaultValue="no input required"
        />
      </InputContainer>
      <Button onClick={handleNewImage}>generate new image</Button>
    </Wrapper>
  );
}
