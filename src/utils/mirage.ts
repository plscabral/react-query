import { createServer } from "miragejs"

export function makeServer() {
  const server = createServer({
    routes() {
      this.urlPrefix = 'http://localhost:4000';
      this.namespace = "api"

      // É responsável pelo tempo de resposta da nossa "api fake"
      this.timing = 750;

      this.get("/notifications", () => {
        return [
          { id: 1, name: "Notificacao1" },
          { id: 2, name: "Notificacao2" },
          { id: 3, name: "Notificacao3" },
        ];
      })

      this.get("/movies", () => {
        return [
          { id: 1, name: "Inception", year: 2010 },
          { id: 2, name: "Interstellar", year: 2014 },
          { id: 3, name: "Dunkirk", year: 2017 },
        ]
      })

      this.get("/users", () => {
        return [
          { id: 1, name: "Paulo" },
          { id: 2, name: "Fábio" },
          { id: 3, name: "Felipe" },
        ]
      })
    },
  })

  return server;
}

