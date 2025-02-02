// import { useQuery } from "@tanstack/react-query";
import { instance } from "./instance";
import { paths } from "./paths";

export const test = async () => await instance.get(paths.test);

// const { data } = useQuery({ queryKey: [paths.test], queryFn: test });
