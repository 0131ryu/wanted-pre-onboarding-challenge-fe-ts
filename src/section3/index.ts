interface Tag {
    id: number;
    name: string;
  }
  
  interface Todo {
    id: number;
    content: string;
    isCompleted: boolean;
    category: string;
    tags?: Tag[];
  }
  
  let TodoLists: Todo[];

  interface CreateTodo {
    (todo: Pick<Todo, 'content' | 'category' | 'tags'>): Promise<Todo | void>;
  }
  
  const createTodo = (todo: string) => {
    TodoLists.push({
          id: TodoLists.length + 1,
          content: todo,
          isCompleted: false,
          category: ""
      })
  };
  
  interface GetTodos {
    (): Promise<Todo[] | void>;
  }
  
  const getTodos = () => {
    TodoLists.map((todo) => todo)
  };
  
  interface GetTodoById {
    (id: Pick<Todo, 'id'>): Promise<Todo | void>;
  }
  
  const getTodoById =  (id: number) => {
    TodoLists.filter((todo) => todo.id === id);
  };
  
  interface UpdateTodo {
    (todo: Todo): Promise<Todo | void>;
  }
  
  const updateTodo = (id: number, content: string)
  :void => {
    TodoLists.find((todo) =>  {
        if(todo.id === id) {
       return {
        content: content
       }
    }})
  }
  
  interface UpdateTags {
    (id: Pick<Todo, 'id'>, tags: Tag[]): Promise<Todo | void>;
  }
  
  const updateTags = (id:number, tags: string): void => {
    TodoLists.find((todo) =>  {
        if(todo.id === id) {
            return {
                tags: tags,
              };
    }})
  };
  
  interface DeleteAllTodos {
    (): Promise<void>;
  }
  
  const deleteAllTodos = (id: number) => {
    TodoLists.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            content: "",
            tags: [],
            category: ""
          };
        }
        return todo;
      });
  };
  
  interface DeleteById {
    (id: Pick<Todo, 'id'>): Promise<void>;
  }
  
  const deleteTodoById = (id: number) => {
    TodoLists.find((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
           content: ""
          };
        }
        return todo;
      });
  };
  
  const deleteAllTags = (id: number) => {
    TodoLists.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            tags: [],
          };
        }
        return todo;
      });
  };
  
  
  interface DeleteTag {
    (id: Pick<Todo, 'id'>, tagId: Pick<Tag, 'id'>): Promise<Todo | void>;
  }
  
  const deleteTag = (id: number) => {
    TodoLists.find((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            tags: [],
          };
        }
        return todo;
      });
  };