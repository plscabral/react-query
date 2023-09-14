import { useQuery } from "@tanstack/react-query"
import { getMovies } from "./endpoints/getMovies";
import { useNotification } from "./hooks/useNotitication";

export function App() {
  const { isLoading, notifications, movies, users } = useNotification()
  const { data, isLoading: isLoadingMovies } = useQuery({ queryKey: ['movies'], queryFn: getMovies });

  return (
    <>
      {
        isLoadingMovies ? (
          <h1>Carregando chamada feita pela tela app ...</h1>
        ) : (
          <>
            <h1>Chamada feita pela tela app</h1>
            <ul>
              {data?.map((item: any) => (
                <li key={item.id}>{item.name} - {item.year}</li>
              ))}
            </ul>
          </>
        )
      }

      {
        isLoading ? (
          <h1>Carregando chamada pelo hook ...</h1>
        ) : (
          <>
            <h1>Chamada feita pelo hook</h1>
            <ul>
              {notifications?.map((item: any) => (
                <li key={item.id}>{item.name}</li>
              ))}
            </ul>

            <ul>
              {movies?.map((item: any) => (
                <li key={item.id}>{item.name} - {item.year}</li>
              ))}
            </ul>

            <ul>
              {users?.map((item: any) => (
                <li key={item.id}>{item.name}</li>
              ))}
            </ul>
          </>
        )
      }
    </>
  )
}