import { HTTP } from "../HTTP";

export const getTodos = async () => {
  const { data } = await HTTP("get", "/todos");

  return data ?? [];
};
