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

// import styled from "styled-components";
// import { useState } from "react";

// const Wrapper = styled.div`
//   margin: 0;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: center;
//   height: 100vh;
//   overflow: auto;
// `;

// const ImageContainer = styled.div`
//   margin-top: 16px;
//   text-align: center;
// `;

// const Title = styled.h1`
//   color: #32393d;
// `;

// const StyledLink = styled.a`
//   margin: 1rem;
//   padding: 1rem;
//   color: #32393d;

//   &:hover,
//   :active {
//     color: #32393d;
//   }
// `;

// const InputContainer = styled.div`
//   display: flex;
//   align-items: center;
//   margin-top: 16px;
// `;

// const InputLabel = styled.label`
//   font-size: 16px;
//   font-weight: bold;
//   color: #32393d;
//   margin-right: 8px; // Adjust the margin as needed
// `;

// const StyledInput = styled.input`
//   padding: 8px;
//   font-size: 16px;
//   border-radius: 0.4rem;
//   border: 1px solid #525e66;
// `;

// const Button = styled.button`
//   margin: 2rem;
//   padding: 1rem;
//   font-size: 16px;
//   font-weight: bold;
//   color: #525e66;
//   background-color: #b7bfc4;
//   border-radius: 3rem;
//   border: 2px solid #525e66;
//   cursor: pointer;

//   &:hover {
//     color: #ffffff;
//   }
// `;

// const ColorCombinationsContainer = styled.div`
//   display: flex;
//   justify-content: center;
//   flex-wrap: wrap;
//   margin-top: 24px;
// `;

// const ColorContainer = styled.div`
//   width: 45%;
//   margin: 10px;
//   text-align: center;
// `;

// const ColorImage = styled.img`
//   width: 100%;
//   border-radius: 8px;
//   margin-bottom: 8px;
// `;

// const ColorTitle = styled.h2`
//   color: #333;
// `;

// const ColorDescription = styled.p`
//   color: #666;
// `;

// export default function HomePage() {
//   const [imageText, setImageText] = useState("");
//   const [randomImageLink, setRandomImageLink] = useState(
//     "https://dummyimage.com/600x400/525e66/00ff00?text=hello"
//   );

//   function getRandomColor() {
//     return Math.floor(Math.random() * 16777215).toString(16);
//   }

//   function generateRandomImageLink() {
//     const backgroundColor = getRandomColor();
//     const foregroundColor = getRandomColor();

//     const formattedBackgroundColor = `#${backgroundColor}`;
//     const formattedForegroundColor = `#${foregroundColor}`;

//     const textParameter = imageText
//       ? `?text=${encodeURIComponent(`${imageText}`)}`
//       : `?text=${encodeURIComponent(
//           `${formattedForegroundColor}-on-${formattedBackgroundColor}`
//         )}`;

//     const newRandomImageLink = `https://dummyimage.com/450x300/${backgroundColor}/${foregroundColor}${textParameter}`;
//     return newRandomImageLink;
//   }

//   const handleNewImage = () => {
//     setRandomImageLink(generateRandomImageLink());
//   };

//   const handleInputChange = (event) => {
//     setImageText(event.target.value);
//   };

//   return (
//     <Wrapper>
//       <Title>Random Color Image Generator</Title>
//       <ImageContainer>
//         <a href={randomImageLink} target="_blank" rel="noopener noreferrer">
//           <img src={randomImageLink} alt="Dummy Image" />
//         </a>
//         <p>
//           <StyledLink href={randomImageLink}>{randomImageLink}</StyledLink>
//         </p>
//       </ImageContainer>
//       <InputContainer>
//         <InputLabel htmlFor="imageText">Image Text</InputLabel>
//         <StyledInput
//           type="text"
//           id="imageText"
//           value={imageText}
//           onChange={handleInputChange}
//           defaultValue="no input required"
//         />
//       </InputContainer>
//       <Button onClick={handleNewImage}>generate new image</Button>

//       {/* Color Combinations */}
//       <ColorCombinationsContainer>
//         {/* Coastal Bliss */}
//         <ColorContainer>
//           <ColorTitle>Coastal Bliss</ColorTitle>
//           <ColorDescription>
//             This combination reflects the calming essence of coastal landscapes,
//             invoking a sense of relaxation and adventure.
//           </ColorDescription>
//           <ColorImage
//             src="https://dummyimage.com/450x300/4fb0aa/f9d56e&text=CoastalBliss-4FB0AA-on-F9D56E"
//             alt="Coastal Bliss Variation 1"
//           />
//           <ColorImage
//             src="https://dummyimage.com/450x300/f9d56e/4fb0aa&text=CoastalBliss-F9D56E-on-4FB0AA"
//             alt="Coastal Bliss Variation 2"
//           />
//         </ColorContainer>

//         {/* Urban Explorer */}
//         <ColorContainer>
//           <ColorTitle>Urban Explorer</ColorTitle>
//           <ColorDescription>
//             Inspired by urban environments, this scheme conveys modernity and
//             energy, perfect for users exploring city destinations.
//           </ColorDescription>
//           <ColorImage
//             src="https://dummyimage.com/450x300/3d3d3d/ff6b6b&text=UrbanExplorer-3D3D3D-on-FF6B6B"
//             alt="Urban Explorer Variation 1"
//           />
//           <ColorImage
//             src="https://dummyimage.com/450x300/ff6b6b/3d3d3d&text=UrbanExplorer-FF6B6B-on-3D3D3D"
//             alt="Urban Explorer Variation 2"
//           />
//         </ColorContainer>

//         {/* Mountain Retreat */}
//         <ColorContainer>
//           <ColorTitle>Mountain Retreat</ColorTitle>
//           <ColorDescription>
//             The serene blue paired with earthy green captures the majesty of
//             mountains and the tranquility of nature.
//           </ColorDescription>
//           <ColorImage
//             src="https://dummyimage.com/450x300/647c90/b5b98e&text=MountainRetreat-647C90-on-B5B98E"
//             alt="Mountain Retreat Variation 1"
//           />
//           <ColorImage
//             src="https://dummyimage.com/450x300/b5b98e/647c90&text=MountainRetreat-B5B98E-on-647C90"
//             alt="Mountain Retreat Variation 2"
//           />
//         </ColorContainer>

//         {/* Sunset Soiree */}
//         <ColorContainer>
//           <ColorTitle>Sunset Soiree</ColorTitle>
//           <ColorDescription>
//             Reminiscent of a vibrant sunset, this combination creates a warm and
//             inviting atmosphere for users.
//           </ColorDescription>
//           <ColorImage
//             src="https://dummyimage.com/450x300/ff8c66/2e2e2e&text=SunsetSoiree-FF8C66-on-2E2E2E"
//             alt="Sunset Soiree Variation 1"
//           />
//           <ColorImage
//             src="https://dummyimage.com/450x300/2e2e2e/ff8c66&text=SunsetSoiree-2E2E2E-on-FF8C66"
//             alt="Sunset Soiree Variation 2"
//           />
//         </ColorContainer>

//         {/* Tropical Paradise */}
//         <ColorContainer>
//           <ColorTitle>Tropical Paradise</ColorTitle>
//           <ColorDescription>
//             Evoking tropical vibes, these colors suggest clear skies and sandy
//             beaches, promoting a sense of joy and fun.
//           </ColorDescription>
//           <ColorImage
//             src="https://dummyimage.com/450x300/61c0bf/ffd700&text=TropicalParadise-61C0BF-on-FFD700"
//             alt="Tropical Paradise Variation 1"
//           />
//           <ColorImage
//             src="https://dummyimage.com/450x300/ffd700/61c0bf&text=TropicalParadise-FFD700-on-61C0BF"
//             alt="Tropical Paradise Variation 2"
//           />
//         </ColorContainer>

//         {/* Heritage Journey */}
//         <ColorContainer>
//           <ColorTitle>Heritage Journey</ColorTitle>
//           <ColorDescription>
//             Inspired by cultural heritage, this combination conveys a sense of
//             history and exploration.
//           </ColorDescription>
//           <ColorImage
//             src="https://dummyimage.com/450x300/8a5a44/d9bf77&text=HeritageJourney-8A5A44-on-D9BF77"
//             alt="Heritage Journey Variation 1"
//           />
//           <ColorImage
//             src="https://dummyimage.com/450x300/d9bf77/8a5a44&text=HeritageJourney-D9BF77-on-8A5A44"
//             alt="Heritage Journey Variation 2"
//           />
//         </ColorContainer>

//         {/* Tech Traveler */}
//         <ColorContainer>
//           <ColorTitle>Tech Traveler</ColorTitle>
//           <ColorDescription>
//             For users with a tech-savvy and modern outlook, this scheme suggests
//             efficiency and innovation.
//           </ColorDescription>
//           <ColorImage
//             src="https://dummyimage.com/450x300/2c3e50/3498db&text=TechTraveler-2C3E50-on-3498DB"
//             alt="Tech Traveler Variation 1"
//           />
//           <ColorImage
//             src="https://dummyimage.com/450x300/3498db/2c3e50&text=TechTraveler-3498DB-on-2C3E50"
//             alt="Tech Traveler Variation 2"
//           />
//         </ColorContainer>

//         {/* Safari Adventure */}
//         <ColorContainer>
//           <ColorTitle>Safari Adventure</ColorTitle>
//           <ColorDescription>
//             Inspired by the colors of the savannah, this combination captures
//             the spirit of adventure and exploration.
//           </ColorDescription>
//           <ColorImage
//             src="https://dummyimage.com/450x300/c5a76d/4d774e&text=SafariAdventure-C5A76D-on-4D774E"
//             alt="Safari Adventure Variation 1"
//           />
//           <ColorImage
//             src="https://dummyimage.com/450x300/4d774e/c5a76d&text=SafariAdventure-4D774E-on-C5A76D"
//             alt="Safari Adventure Variation 2"
//           />
//         </ColorContainer>

//         {/* Snowy Escape */}
//         <ColorContainer>
//           <ColorTitle>Snowy Escape</ColorTitle>
//           <ColorDescription>
//             Clean and crisp, this monochromatic scheme represents the beauty of
//             snowy landscapes and simplicity.
//           </ColorDescription>
//           <ColorImage
//             src="https://dummyimage.com/450x300/ffffff/a6a6a6&text=SnowyEscape-FFFFFF-on-A6A6A6"
//             alt="Snowy Escape Variation 1"
//           />
//           <ColorImage
//             src="https://dummyimage.com/450x300/a6a6a6/ffffff&text=SnowyEscape-A6A6A6-on-FFFFFF"
//             alt="Snowy Escape Variation 2"
//           />
//         </ColorContainer>

//         {/* Bohemian Wanderer */}
//         <ColorContainer>
//           <ColorTitle>Bohemian Wanderer</ColorTitle>
//           <ColorDescription>
//             Earthy tones with a touch of warmth, perfect for users with a
//             free-spirited and adventurous mindset.
//           </ColorDescription>
//           <ColorImage
//             src="https://dummyimage.com/450x300/d8a07e/6b4226&text=BohemianWanderer-D8A07E-on-6B4226"
//             alt="Bohemian Wanderer Variation 1"
//           />
//           <ColorImage
//             src="https://dummyimage.com/450x300/6b4226/d8a07e&text=BohemianWanderer-6B4226-on-D8A07E"
//             alt="Bohemian Wanderer Variation 2"
//           />
//         </ColorContainer>
//       </ColorCombinationsContainer>
//     </Wrapper>
//   );
// }
