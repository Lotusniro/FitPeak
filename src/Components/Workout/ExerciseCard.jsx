import React from 'react';
import { Link } from 'react-router-dom';
import './ExerciseCard.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faDumbbell,
  faRunning,
  faBurn,
  faWeightHanging,
  faIndustry,
} from '@fortawesome/free-solid-svg-icons';

// ExerciseCard component is a child component of MainPage
// It receives the exercise object and muscleImages object as props
// It displays the exercise details in a card format
const ExerciseCard = ({ exercise, muscleImages }) => {
  const { name, type, muscle, equipment, difficulty } = exercise;

  //when the user clicks on the view instructions link, the selected exercise will be stored in the local storage
  const handleClick = () => {
    localStorage.setItem('selectedExercise', name);
  };
// Select appropriate icon to card
const getEquipmentIcon = (equipment) => {
  switch (equipment) {
    case 'barbell':
      return faWeightHanging;
    case 'body_only':
      return faRunning;
    case 'kettlebells':
      return faBurn;
    case 'dumbbell':
      return faDumbbell;
    case 'other':
      return faRunning; // Use the faRunning icon for "other"
      case 'machine':
        return faIndustry;
    default:
      return null;
  }
};

return (
  <div className="exercise-card">
    <img className="exercise-image" src={muscleImages[muscle]} alt={muscle} style={{ width: '300px', height: '200px' }} />
    <div className="exercise-details">
      <h2 className="exercise-name">{name}</h2>
      <p className="exercise-info">
        <span className="exercise-label">Muscle:</span> {muscle}
      </p>
      <p className="exercise-info">
        <span className="exercise-label">Equipment:</span>
        {equipment}
        {getEquipmentIcon(equipment) && (
          <FontAwesomeIcon icon={getEquipmentIcon(equipment)} className="equipment-icon" />
        )}
      </p>
    </div>
    <Link
      to={`/instructions/${name}`}
      onClick={handleClick}
      className="view-instructions-link"
    >
      View Instructions
    </Link>
  </div>
);
};

export default ExerciseCard;