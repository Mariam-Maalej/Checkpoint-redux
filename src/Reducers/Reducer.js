const initialState = {
  todos: [
    {
      id: 1,
      description: "Go shopping",
      isDone: false,
    },
    {
      id: 2,
      description: "Practise sport in the gym",
      isDone: false,
    },
    {
      id: 3,
      description: "Watch a movie with friends",
      isDone: false,
    },
  ],
};

const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case "Add-Todo":
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };
    case "Toggle-Todo":
      return {
        todos: state.todos.map((todo) =>
          todo.id === action.payload ? { ...todo, isDone: !todo.isDone } : todo
        ),
      };
    case "Edit-Todo" :
      return {
        todos: state.todos.map((todo) =>
        todo.id === action.payload.id ? { ...todo, description: action.payload.description } : todo
      ),
       
      };
    case "Delete-Todo":
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload),
      };
    default:
      return state;
  }
};

export default Reducer;
