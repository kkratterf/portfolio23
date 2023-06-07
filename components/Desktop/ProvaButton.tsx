'use client';

import { useState } from 'react';
import MyModal from '../../components/Modals/Prova';
import Draggable from 'react-draggable';

function ProvaButton() {
  const eventLogger = (e, data) => {
    console.log('Event: ', e);
    console.log('Data: ', data);
  };

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Draggable
        axis="both"
        handle=".handle"
        defaultPosition={{ x: 0, y: 0 }}
        position={null}
        grid={[1, 1]}
        scale={1}
        onStart={eventLogger}
        onDrag={eventLogger}
        onStop={eventLogger}
      >
        <button
          type="button"
          onClick={console.log('diocane')}
          className="handle rounded-md bg-black bg-opacity-20 px-4 py-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
        >
          Open dialog
        </button>
      </Draggable>
      <MyModal isModalOpen={isModalOpen} closeModal={closeModal} />
      <MyModal isModalOpen={isModalOpen} closeModal={closeModal} />
      <MyModal isModalOpen={isModalOpen} closeModal={closeModal} />
    </>
  );
}

export default ProvaButton;
