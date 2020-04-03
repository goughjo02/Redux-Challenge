import React from "react";

// Store Context is the global context that is managed by reducers.

const Store = React.createContext({
  todos: [
    // Initial Data
    "Buy paper",
    "Some antiseptic",
    "Stay at home :)"
  ]
});

export default Store;
