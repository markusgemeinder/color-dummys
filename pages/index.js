import styled from "styled-components";
import { useState, useEffect } from "react";
import Image from "next/image";

import { Title } from "@/components/Title";
import { Button } from "@/components/Button";
import {
  InputContainer,
  StyledLabel,
  StyledInput,
} from "@/components/InputContainer.styled";
import { ImageContainer, StyledLink } from "@/components/ImageContainer.styled";

const Wrapper = styled.div`
  margin: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  text-align: center;
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
          <Image
            src={randomImageLink}
            alt="Dummy Image"
            layout="responsive"
            width="600"
            height="400"
          />
        </a>
        <p>
          <StyledLink href={randomImageLink}>{randomImageLink}</StyledLink>
        </p>
      </ImageContainer>
      <InputContainer>
        <StyledLabel htmlFor="imageText">Image Text</StyledLabel>
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
