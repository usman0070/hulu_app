const API_KEY = "7106868acf920a0b95859646624cf0ed";
export default {
  fetchTrending: {
    title: "Trending",
    url: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
  },
  fetchTopRated: {
    title: "Top rated",
    url: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  },
  fetchHorror: {
    title: "Horror",
    url: `/movie/upcoming?api_key=${API_KEY}&language=en-US`,
  },
  fetchAction: {
    title: "Action",
    url: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
  },
  fetchComedy: {
    title: "Comedy",
    url: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
  },
  fetchRomantic: {
    title: "Romantic",
    url: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
  },
  fetchDramas: {
    title: "Tv Shows",
    url: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
  },
  fetchBollywood: {
    title: "Bollywood",
    url: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
  },
  fetchHollywood: {
    title: "Hollywood",
    url: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
  },
  fetchScience: {
    title: "Sci friction",
    url: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
  },
};
