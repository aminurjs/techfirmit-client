import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxios from "./useAxios";

const useEmployee = () => {
  const { user, isLoading } = useAuth();
  const axios = useAxios();
  const { data: isEmployee, isPending: isEmployeeLoading } = useQuery({
    queryKey: [user?.email, "isEmployee"],
    enabled: !isLoading,
    queryFn: async () => {
      console.log("asking or checking is employee", user);
      const res = await axios.get(`/employee/${user.email}`);
      // console.log(res.data);
      return res.data?.employee;
    },
  });
  return [isEmployee, isEmployeeLoading];
};

export default useEmployee;
