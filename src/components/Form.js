import React from 'react';

const Form = ({ value, submit, onChange }) => {
  return (
    <form onSubmit={submit}>
      <div>
        <input
          type="text"
          placeholder="Things to be done"
          required
          value={value}
          onChange={onChange}
        />
      </div>
      <div>
        <button className="btn-addToDo" type="submit">
          Add Todo
        </button>
      </div>
    </form>
  );
};

export default Form;
