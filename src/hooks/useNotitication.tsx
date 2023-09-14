import { createContext, useContext, PropsWithChildren } from "react";
import { useQuery } from "@tanstack/react-query";

// endpoints
import { getNotifications } from "../endpoints/getNotifications";
import { getMovies } from "../endpoints/getMovies";
import { getUsers } from "../endpoints/getUsers";

interface NotificationContextData {
  notifications: any;
  users: any;
  movies: any;
  isLoading: boolean;
}

const NotificationContext = createContext({} as NotificationContextData);

export function NotificationContextProvider({ children }: PropsWithChildren) {
  const { 
    data: notifications, 
    isLoading: isLoadingNotifications 
  } = useQuery({ queryKey: ['notifications'], queryFn: getNotifications, staleTime: 30000 });

  const { 
    data: movies, 
    isLoading: isLoadingMovies 
  } = useQuery({ queryKey: ['movies'], queryFn: getMovies });

  const { 
    data: users,
    isLoading: isLoadingUsers
  } = useQuery({ queryKey: ['users'], queryFn: getUsers });

  const isLoading = isLoadingNotifications || isLoadingMovies || isLoadingUsers

  return (
    <NotificationContext.Provider value={{ notifications, movies, users, isLoading }}>
      {children}
    </NotificationContext.Provider>
  )
}

export function useNotification() {
  return useContext(NotificationContext);
}