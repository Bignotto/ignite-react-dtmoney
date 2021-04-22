import React from "react";
import ReactDOM from "react-dom";
import { App } from "./App";

import { createServer, Model } from "miragejs";

createServer({
  models: {
    transaction: Model,
  },

  seeds(server) {
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title: "Desenvolvimento de Website",
          type: "credit",
          category: "Dev",
          amount: 6000,
          createdAt: new Date("2021-04-22 09:00:00"),
        },
        {
          id: 2,
          title: "Hospedagem Servidor",
          type: "debit",
          category: "Dev",
          amount: 400,
          createdAt: new Date("2021-04-20 05:46:37"),
        },
      ],
    });
  },

  routes() {
    this.namespace = "api";

    this.post("/transactions", (schema, request) => {
      const data = JSON.parse(request.requestBody);
      return schema.create("transaction", data);
    });

    this.get("/transactions", () => {
      return this.schema.all("transaction");
    });
  },
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
