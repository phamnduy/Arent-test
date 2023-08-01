export interface Props {
  children: React.ReactNode;
}

export const getResolution = (timeRange: string) => {
  switch (timeRange) {
    case "month":
      return "m";
    case "week":
      return "w";
    case "year":
      return "y";
    default:
      return "y";
  }
};

