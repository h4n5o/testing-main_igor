

const axios = require("axios");
const TodosMutations = require("./TodosMutations");

// Mock Axios .post method
jest.mock("axios");

const returnedTodo1 = {
  id: 6,
  userId: 1,
  task: "Trinken",
  isDone: true,
  dueDate: "2024-11-10T00:00:00.000Z",
  createdAt: "2024-02-28T08:17:33.000Z",
  updatedAt: "2024-02-28T13:10:19.000Z",
};

describe("Testing POST Functions of Todo Route", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  test("Test POST Create Function", async () => {
    // Mock the response data
    const mockData = {
      data: { todo: returnedTodo1 },
    };

    // Mock the Axios post method to resolve with the mock data
    axios.post.mockResolvedValue(mockData);

    // Example usage: Create a new todo
    const myDate = new Date();
    const result = await TodosMutations.createTodo(1, "Essen", false, myDate);

    // Assertions
    expect(result).toEqual(mockData.data.todo);
    expect(axios.post).toHaveBeenCalledTimes(1);
    expect(axios.post).toHaveBeenCalledWith(
      "http://localhost:5050/v1/todos/create",
      {
        newDueDate: myDate,
        newIsDone: false,
        newTask: "Essen",
        newUserId: 1,
      }
    );
  });
});
test("Test POST Mark Todo Function", async () => {
  // Mock the response data
  const mockData = {
    data: { todo: returnedTodo1 },
  };

  // Mock the Axios post method to resolve with the mock data
  axios.post.mockResolvedValue(mockData);

  // Example usage: Mark a todo as done
  const todoId = 6;
  const result = await TodosMutations.markTodo(todoId);

  // Assertions
  expect(result).toEqual(mockData.data.todo);
  expect(axios.post).toHaveBeenCalledTimes(1);
  expect(axios.post).toHaveBeenCalledWith(
    `http://localhost:5050/v1/todos/${todoId}/mark`,
    {}
  );
});
test("Test PUT Update Todo Function", async () => {
  // Mock the response data
  const updatedTodo = {
    ...returnedTodo1,
    task: "Updated Task",
  };
  const mockData = {
    data: { todo: updatedTodo },
  };

  // Mock the Axios put method to resolve with the mock data
  axios.put.mockResolvedValue(mockData);

  // Example usage: Update a todo
  const todoId = 6;
  const updatedTask = "Updated Task";
  const result = await TodosMutations.updateTodo(todoId, updatedTask);

  // Assertions
  expect(result).toEqual(mockData.data.todo);
  expect(axios.put).toHaveBeenCalledTimes(1);
  expect(axios.put).toHaveBeenCalledWith(
    `http://localhost:5050/v1/todos/${todoId}`,
    { updatedTask }
  );
});
test("Test DELETE Delete Todo Function", async () => {
  // Mock the response data
  const mockData = {
    data: { message: "Todo deleted successfully" },
  };

  // Mock the Axios delete method to resolve with the mock data
  axios.delete.mockResolvedValue(mockData);

  // Example usage: Delete a todo
  const todoId = 6;
  const result = await TodosMutations.deleteTodo(todoId);

  // Assertions
  expect(result).toEqual(mockData.data.message);
  expect(axios.delete).toHaveBeenCalledTimes(1);
  expect(axios.delete).toHaveBeenCalledWith(
    `http://localhost:5050/v1/todos/${todoId}`
  );
});
