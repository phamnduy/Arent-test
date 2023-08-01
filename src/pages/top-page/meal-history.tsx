import { Box, Grid } from "@mui/material";
import MealType from "../../components/meal-type";
import IconKnife from "../../assets/icons/icon_knife.svg";
import IconCup from "../../assets/icons/icon_cup.svg";
import Photo from "../../components/photo";

import AppButton from "../../components/button";
import { useEffect, useState } from "react";
import { meals } from "./mockData";

const mealTypes = [
  {
    icon: IconKnife,
    label: "Morning",
    type: "morning",
  },
  {
    icon: IconKnife,
    label: "Lunch",
    type: "lunch",
  },
  {
    icon: IconKnife,
    label: "Dinner",
    type: "dinner",
  },
  {
    icon: IconCup,
    label: "Snack",
    type: "snack",
  },
];

const perPage = 8;

const MealHistoty = () => {
  const [selectedType, setSelectedType] = useState<string[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [filteredMeals, setfilteredMeals] = useState<any[]>([]);

  useEffect(() => {
    let filteredMeals = selectedType.length > 0 ? meals.filter((e) => selectedType.includes(e.type)) : meals;
    filteredMeals = filteredMeals.slice(0, perPage * currentPage);
    setfilteredMeals(filteredMeals);
  }, [selectedType, currentPage]);

  const handleSelectType = (type: string) => {
    if (selectedType.includes(type)) {
      const newTypes = selectedType.filter((e) => e !== type);
      setSelectedType(newTypes);
    } else {
      setSelectedType((oldTypes) => [...oldTypes, type]);
    }
  };
  return (
    <Box display="flex" flexDirection="column" alignItems="center">
      <Box display="flex" justifyContent="space-evenly" width="85%">
        {mealTypes.map((item) => (
          <Box key={item.label} onClick={() => handleSelectType(item.type)}>
            <MealType icon={item.icon} label={item.label} selected={selectedType.includes(item.type)} />
          </Box>
        ))}
      </Box>
      <Grid mt={2} spacing={1} container>
        {filteredMeals.map((item) => (
          <Grid item xs={3} key={(Math.random() + 1).toString(36).substring(7)}>
            <Photo image={item.img} title={item.title} />
          </Grid>
        ))}
      </Grid>
      <Box mt={3} display="flex" justifyContent="center">
        <AppButton onClick={() => setCurrentPage((pre) => pre + 1)}>記録をもっと見る</AppButton>
      </Box>
    </Box>
  );
};

export default MealHistoty;
