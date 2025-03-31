import { UserContext } from "@/features/users/type";
import { axiosClient } from "../axios-client";

export const getAllUsers = async (name: string | undefined): Promise<UserContext[]> => {
  return await axiosClient.get("/users", { params: { name: name || undefined } });
};

export const getUser = async (id: string): Promise<UserContext> => {
  return await axiosClient.get(`/users/${id}`);
};
