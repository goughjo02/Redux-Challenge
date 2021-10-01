import reducer from "../reducer";

test("adds todo", async () => {
  const initialState = {
    todos: ["a", "b"]
  };
  const newState = reducer(initialState, { type: "ADD_TODO", payload: "c" });
  const expectedState = { todos: ["a", "b", "c"] };
  expect(newState).toEqual(expectedState);
});

test("completes todo", async () => {
  const initialState = {
    todos: ["a", "b", "c"]
  };
  const newState = reducer(initialState, { type: "COMPLETE", payload: "b" });
  const expectedState = { todos: ["a", "c"] };
  expect(newState).toEqual(expectedState);
});
