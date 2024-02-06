import { useQuery } from "react-query";
import { getUserData } from "../apis/user";
import { useDispatch } from "react-redux";
import { ChangeLoadingStatus, ChangeUserData } from "../store/slice/user";
import { useEffect } from "react";

const useAuth = () => {
  const dispatch = useDispatch();

  //   react query
  const token = localStorage.getItem("token");

  const { data, isLoading } = useQuery({
    queryFn: () => getUserData(token),
    queryKey: ["userData"],
    staleTime: Infinity,
  });

  useEffect(() => {
    dispatch(ChangeLoadingStatus(isLoading));
  }, [isLoading, dispatch]);

  if (data?.error === false) {
    dispatch(
      ChangeUserData({
        id: data?.data?.data.id,
        name: data?.data?.data.name,
        email: data?.data?.data.email,
      })
    );
    return true;
  }

  return false;
};

export default useAuth;
