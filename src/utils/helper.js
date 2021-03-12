export const getUniqueValues = (data, type) => {
  let unique = data.map((item) => item[type]);
  console.log(["all", ...new Set(unique)]);
  return ["all", ...new Set(unique)];
};
