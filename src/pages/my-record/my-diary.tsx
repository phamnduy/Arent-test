import { Box, Typography } from "@mui/material";
import AppButton from "../../components/button";
import { useEffect, useState } from "react";
import { diaries } from "./mockData";

interface IDiary {
  date: string;
  time: string;
  text: string;
}
const perPage = 8;
const MyDiary = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [newDiary, setNewDiary] = useState<any[]>([]);

  useEffect(() => {
    let newDiary = diaries.slice(0, perPage * currentPage);
    setNewDiary(newDiary);
  }, [currentPage]);

  const DiaryDetail = ({ date, time, text }: IDiary) => {
    return (
      <Box sx={{ border: "2px solid #707070", padding: 2 }}>
        <Typography fontSize={18}>
          {date}
          <br /> {time}
        </Typography>
        <Typography fontSize={12}>{text}</Typography>
      </Box>
    );
  };

  return (
    <Box>
      <Typography mr={3} fontSize={22}>
        MY DIARY
      </Typography>
      <Box
        sx={{
          display: "grid",
          columnGap: 3,
          rowGap: 1,
          gridTemplateColumns: "repeat(4, 1fr)",
        }}
      >
        {newDiary.map((item, index) => {
          return (
            <Box key={index}>
              <DiaryDetail date={item.date} time={item.time} text={item.text} />
            </Box>
          );
        })}
      </Box>
      <Box mt={3} display="flex" justifyContent="center">
        <AppButton onClick={() => setCurrentPage((pre) => pre + 1)}>自分の日記をもっと見る</AppButton>
      </Box>
    </Box>
  );
};

export default MyDiary;
