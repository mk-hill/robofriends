import React from 'react';
import Card from './Card';
import { IRobot } from '../containers/App';

const CardList = ({ robots }: { robots: Array<IRobot> }) => {
  return (
    <div>
      {robots.map((robot, i) => {
        return (
          <Card
            // Key appears to be inaccessible as a prop, duplicating as id for Card component
            key={robots[i].id}
            id={robots[i].id}
            name={robots[i].name}
            email={robots[i].email}
          />
        );
      })}
    </div>
  );
};

export default CardList;
