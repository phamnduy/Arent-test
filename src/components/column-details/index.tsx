import { Box, Typography, styled } from "@mui/material";
import { colors } from "../../theme/schemes/PureLightTheme";

interface IColumnType {
  date: string;
  time: string;
  tags: Array<string>;
  image: string;
  title: any;
}

const ImageBox = styled("img")(
  () => `
    width: 100%;
    height: 25vh;
    object-fit: cover;
    `,
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
    `,
);
const ColumnDetail = ({ image, date, time, title, tags }: IColumnType) => {
  return (
    <Box pb={2}>
      <Box position="relative">
        <ImageBox src={image} />
        <TitlePhoto>{`${date} ${time}`}</TitlePhoto>
      </Box>
      <Typography>{title}</Typography>
      <Box sx={{ display: "flex", color: colors.alpha.orange[100] }}>
        {tags.map((item, i) => {
          return <Typography key={i}>#{item} &nbsp;</Typography>;
        })}
      </Box>
    </Box>
  );
};

export default ColumnDetail;
