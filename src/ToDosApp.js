import { useSyncExternalStore } from 'react';
import { todosStore } from './todoStore.js';

// this pulls the data from an external source (todoStore.js)
// using useSyncExternalStore

export default function TodosApp() {
  const todos = useSyncExternalStore(todosStore.subscribe, todosStore.getSnapshot);
  return (
    <>
      <button onClick={() => todosStore.addTodo()}>Add todo</button>
      <hr />
      <ul>
        {todos.map(todo => (
          <li key={todo.id}>{todo.text}</li>
        ))}
      </ul>
    </>
  );
}
