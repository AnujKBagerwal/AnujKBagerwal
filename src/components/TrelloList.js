import React from "react";
import TrelloCard from './TrelloCard';
import TrelloActionButton from './TrelloActionButton'
import { Droppable, Draggable } from 'react-beautiful-dnd'

const TrelloList = ({ title, cards, listID, index }) => {
  return (
    <Draggable
      draggableId={String(listID)}
      index={index}
    >
      {provider => (
        <div
          {...provider.draggableProps}
          ref={provider.innerRef}
          {...provider.dragHandleProps}
          className='ListContainer'>
          <Droppable droppableId={String(listID)}>
            {provider => (
              <div
                {...provider.droppableProps}
                ref={provider.innerRef}
              >
                <h4>{title}</h4>
                {cards.map((card, index) => (
                  <TrelloCard
                    index={index}
                    id={card.id}
                    key={card.id}
                    text={card.text}
                  />))}
                <TrelloActionButton listID={listID} />
                {provider.placeholder}
              </div>
            )}
          </Droppable>
        </div>
      )}
    </Draggable>
  );
};

export default TrelloList;
