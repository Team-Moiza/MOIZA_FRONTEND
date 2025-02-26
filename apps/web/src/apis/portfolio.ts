import { instance } from "./instance";

export const addPortfolio = async () => {
  const data = {
    title: `레주메 ${new Date().toISOString().split("T")[0]}`,
    introduce: "",
    introduction: { introduce: "", url: "" },
    projects: [],
    awards: [],
    qualifications: [],
    links: [],
    codes: [],
  };

  return await instance.post("/portfolios", data);
};

export const detailPortFolio = async (id: string) => {
  return await instance.get(`/portfolios/${id}`);
};

export const listPortFolio = async () => {
  return await instance.get("/portfolios");
};

export const myPortFolio = async () => {
  return await instance.get("/portfolios/my");
};

export const editPortFolio = async (id: string) => {
  return await instance.patch(`/portfolios/${id}`);
};

export const deletePortFolio = async (id: string) => {
  return await instance.delete(`/portfolios/${id}`);
};

export const publishPortFolio = async (id: string) => {
  return await instance.patch(`/portfolios/publish/${id}`);
};
