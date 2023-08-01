import { Box, styled } from "@mui/material";

const ImageBox = styled("img")(
  () => `
  width: 100%;
  height: 100%;
  object-fit: cover;
  `
);

const TitlePhoto = styled(Box)(
  () => `
  background: #FFCC21;
  padding: 7px 10px;
  position: absolute;
  font-size: 15px;
  color: #fff;
  bottom: 2px;
  display: flex;
  align-items: center;
  justify-content: center;
  line-height: 18px
  `
);

interface IPhoto {
  image: string;
  title: string;
}

const Photo = ({ image, title }: IPhoto) => {
  return (
    <Box position="relative">
      <ImageBox src={image} />
      <TitlePhoto>{title}</TitlePhoto>
    </Box>
  );
};

export default Photo;
