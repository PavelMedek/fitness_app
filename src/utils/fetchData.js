export const exerciseOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "93338bbaf5msh7ca51c4d1d002f6p17446bjsna4098a9c5c76",
    "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
  },
};

export const youtubeOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "93338bbaf5msh7ca51c4d1d002f6p17446bjsna4098a9c5c76",
    "X-RapidAPI-Host": "youtube-search-and-download.p.rapidapi.com",
  },
};

export const fetchData = async (url, options) => {
  const res = await fetch(url, options);
  const data = await res.json();

  return data;
};
