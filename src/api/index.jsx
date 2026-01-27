import axios from "axios";

const api = axios.create({
    baseURL : 'https://gnews.io/api/v4',
    headers : {
        'Content-Type' : 'application/json'
    }
})


const nServices = {
  news: async () => {
    const res = await api.get("/top-headlines", {
      params: {
        country: "bd",
        lang: "bn",
        token: "136e08ded777ffed50adf267c3ff0fa2",
      },
    });

    return res.data.articles;
  },
};

export { nServices };
