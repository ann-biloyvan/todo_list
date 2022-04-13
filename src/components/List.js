import React from 'react';
import ListItem from './ListItem';

const List = ({ todos, deleteHandler, doneHandler }) => {
  if (todos.length <= 0) {
    return (
      <div>
        <h3>
          No todos found yet
          <br />
          Have a rest!
        </h3>

        <img src="../catParty1.gif" alt="cat Stepan enjoying his life" />
      </div>
    );
  }

  return (
    <div>
      <ul>
        {todos &&
          todos.length > 0 &&
          todos.map((todo) => (
            <ListItem
              key={todo.id}
              id={todo.id}
              title={todo.title}
              done={todo.done}
              deleteHandler={deleteHandler}
              doneHandler={doneHandler}
            />
          ))}
      </ul>
    </div>
  );
};

export default List;
