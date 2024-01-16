import axios, { AxiosRequestConfig } from "axios";

export const getRepo = async () => {
  try {
    const config: AxiosRequestConfig = {
      url: "https://api.github.com/user/repos",
      method: "get",
      headers: {
        Authorization: `Bearer ${import.meta.env.VITE_TOKEN}`,
      },
    };

    const res = await axios(config);

    return res.data;
  } catch (error) {
    console.error(error);
  }
};
