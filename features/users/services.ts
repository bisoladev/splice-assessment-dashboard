import { getAllUsers, getUser } from "@/services/query-controllers/user";
import { useQuery } from "@tanstack/react-query";

export const useGetUsers = (query: string | undefined) => {
  return useQuery({
    queryKey: ["GET_USERS", query],
    queryFn: () => getAllUsers(query),
  });
};

export const useUser = (id: string) => {
  return useQuery({
    queryKey: ["GET_USER", id],
    queryFn: () => getUser(id),
  });
};
