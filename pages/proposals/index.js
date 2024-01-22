import styled from "styled-components";
import { colors } from "@/lib/data";
import Image from "next/image";

import { Title } from "@/components/Title";

const Wrapper = styled.div`
  margin: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 16px; // Add padding to prevent content from sticking to the edges
  overflow-y: auto; // Allow vertical scrolling when content overflows
  height: 100vh;
`;

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 16px;
  border: 1px solid black;
`;

const ImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 16px;
  text-align: center;
`;

const ImageWrapper = styled.div`
  width: 150px; // Set a fixed width for the images
  margin-bottom: 8px; // Add margin between the image and link
`;

const LinkWrapper = styled.div`
  text-align: center;
`;

const StyledLink = styled.a`
  margin: 0.8rem;
  color: #32393d;
  font-size: 0.8rem;
  text-align: center;

  &:hover,
  :active {
    color: #32393d;
  }
`;

export default function ProposalsPage() {
  return (
    <Wrapper>
      <Title>ChatGPT Color Proposals for Travel</Title>

      {colors.map((color) => (
        <CardContainer key={color.id}>
          <h2>{color.title}</h2>
          <p>{color.description}</p>
          {color.images.map((image) => (
            <ImageContainer key={image.alt}>
              <ImageWrapper>
                <a href={image.src} target="_blank" rel="noopener noreferrer">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    layout="responsive"
                    width="450"
                    height="300"
                  />
                </a>
              </ImageWrapper>
              <LinkWrapper>
                <StyledLink href={image.src}>{image.src} </StyledLink>
              </LinkWrapper>
            </ImageContainer>
          ))}
        </CardContainer>
      ))}
    </Wrapper>
  );
}
