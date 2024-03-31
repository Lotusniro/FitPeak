import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import './InstructionPage.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faDumbbell,
  faRunning,
  faBurn,
  faWeightHanging,
  faIndustry,
} from '@fortawesome/free-solid-svg-icons';

const InstructionPage = () => {
  const { exerciseName } = useParams();
  const [exercise, setExercise] = useState(null);
  const [showFullInstructions, setShowFullInstructions] = useState(false);

  useEffect(() => {
    const fetchExercise = async () => {
      try {
        const response = await axios.get(`https://api.api-ninjas.com/v1/exercises?name=${exerciseName}`, {
          headers: {
            'X-Api-Key': 'mgS819STNx1KpuKbeAkddCtzAHrj9WgTMEsAwevC'
          }
        });
        setExercise(response.data[0]); // Assuming exerciseName is unique and returns only one exercise
      } catch (error) {
        console.error('Request failed:', error);
      }
    };
    fetchExercise();
  }, [exerciseName]);

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
        return faRunning;
      case 'machine':
        return faIndustry;
      default:
        return null;
    }
  };

  const videoPaths = {
    'Rickshaw Carry': '/beg1.mp4',
    'Single-Leg Press': '/beg1.mp4',
    'Clean from Blocks': '/beg1.mp4',
    'Incline Hammer Curls ': '/beg1.mp4',
    'Barbell deficit deadlift': '/beg1.mp4',
    'Romanian Deadlift With Dumbbells': '/beg1.mp4',
    'Clean Deadlift': '/beg1.mp4',
    'Landmine twist': '/beg1.mp4',
    'Weighted pull-up': '/beg1.mp4',
    'Power snatch-': '/beg1.mp4',
    'Narrow-stance squat': '/beg1.mp4',
    'Barbell forward lunge': '/beg1.mp4',
    // Add more exercise names and corresponding video file paths as needed
  };

  const toggleInstructions = () => {
    setShowFullInstructions(!showFullInstructions);
  };

  return (
    <div className="instruction-page">
      {exercise ? (
        <div className="main">
          <h2>{exercise.name}</h2>
          <p>Type: {exercise.type}</p>
          <p>
            Equipment: {exercise.equipment}
            {getEquipmentIcon(exercise.equipment) && (
              <FontAwesomeIcon icon={getEquipmentIcon(exercise.equipment)} className="equipment-icon" />
            )}
          </p>
          <p>Difficulty: {exercise.difficulty}</p>
          <div className="video-container">
            <video width="560" height="315" controls className='video'>
              <source src={videoPaths[exercise.name]} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <div className="instructions">
            <h3>Instructions:</h3>
            <div className='dis'>
            <p>
              {showFullInstructions ? exercise.instructions : `${exercise.instructions.slice(0, 500)}...`}
              
              {!showFullInstructions && (
                <button className="read-more-button ins" onClick={toggleInstructions}>Show more</button>
              )}
              {showFullInstructions && (
                <button className="less-button ins" onClick={toggleInstructions}>Show less</button>
              )}
            </p>
            </div>
          </div>
          <Link to="/" className="back-button">Back to Main Page</Link>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default InstructionPage;