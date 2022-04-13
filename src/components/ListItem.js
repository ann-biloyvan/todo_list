import React, { useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { faArrowRotateRight } from '@fortawesome/free-solid-svg-icons';

const ListItem = ({ id, title, deleteHandler, doneHandler, done }) => {
  const [openModal, setOpenModal] = useState(false);

  const openModalHandler = (e) => {
    e.preventDefault();
    setOpenModal(true);
  };

  return (
    <>
      {openModal && (
        <div
          className="modal"
          onClick={() => {
            setOpenModal(false);
          }}
        >
          <dialog className="modal-content">
            <p>Are you sure?</p>
            <div>
              <button onClick={() => deleteHandler(id)}>Yay</button>
              <button onClick={() => setOpenModal(false)}>Nay</button>
            </div>
          </dialog>
        </div>
      )}

      <div className={`${done ? 'done' : ''}`}>
        <li key={id}>
          <span className="text scrollbars">
            {done && <del>{title}</del>}
            {!done && <>{title}</>}
          </span>
          <div className="flex">
            <button className="red" onClick={(e) => openModalHandler(e)}>
              <FontAwesomeIcon icon={faTrash} />
            </button>
            <button
              className={`${done ? 'yellow' : 'done'}`}
              onClick={() => doneHandler(id)}
            >
              {done ? (
                <FontAwesomeIcon icon={faArrowRotateRight} />
              ) : (
                <FontAwesomeIcon icon={faCheckCircle} />
              )}
            </button>
          </div>
        </li>
      </div>
    </>
  );
};

export default ListItem;
