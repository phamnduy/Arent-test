import { Box } from "@mui/material";

import Recommend from "../../components/recommended";
import ColumnDetail from "../../components/column-details";

import AppButton from "../../components/button";
import { useEffect, useState } from "react";
import { columns } from "./mockData";

const perPage = 8;

const Column = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [newColumns, setNewColumns] = useState<any[]>([]);

  useEffect(() => {
    let newColumns = columns.slice(0, perPage * currentPage);
    setNewColumns(newColumns);
  }, [currentPage]);
  return (
    <Box mt={"50px"} mx={"15%"} mb={"200px"}>
      <Box
        sx={{
          display: "grid",
          columnGap: 5,
          rowGap: 1,
          gridTemplateColumns: "repeat(4, 1fr)",
        }}
      >
        <Recommend
          context="オススメ"
          title={
            <>
              RECOMMENDED <br />
              COLUMN
            </>
          }
        />
        <Recommend
          context="ダイエット"
          title={
            <>
              RECOMMENDED <br />
              DIET
            </>
          }
        />
        <Recommend
          context="美容"
          title={
            <>
              RECOMMENDED <br />
              BEAUTY
            </>
          }
        />
        <Recommend
          context="健康"
          title={
            <>
              RECOMMENDED <br />
              HEALTH
            </>
          }
        />
      </Box>
      <Box
        sx={{
          display: "grid",
          columnGap: 1,
          rowGap: 1,
          gridTemplateColumns: "repeat(4, 1fr)",
          mt: 5,
        }}
      >
        {newColumns.map((item, index) => {
          return (
            <ColumnDetail
              key={index}
              date={item.date}
              time={item.time}
              tags={item.tags}
              image={item.image}
              title={item.title}
            />
          );
        })}
      </Box>
      <Box mt={3} display="flex" justifyContent="center">
        <AppButton onClick={() => setCurrentPage((pre) => pre + 1)}>コラムをもっと見る</AppButton>
      </Box>
    </Box>
  );
};

export default Column;
