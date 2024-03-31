import React, { useState } from 'react';
import axios from 'axios';

const ExerciseSearchForm = ({ onSearch }) => {
  const [muscle, setMuscle] = useState('');
  const [equipment, setEquipment] = useState('');
  const [type, setType] = useState('');
  const [difficulty, setDifficulty] = useState('');

  const handleSearch = async () => {
    console.log('Selected Options:', { muscle, equipment, type, difficulty });
    try {
      const response = await axios.get('https://api.api-ninjas.com/v1/exercises', {
        params: {
          muscle,
          equipment,
          type,
          difficulty,
          limit: 10 // Always limit to 10 results
        },
        headers: {
          'X-Api-Key': 'mgS819STNx1KpuKbeAkddCtzAHrj9WgTMEsAwevC'
        }
      });
      onSearch(response.data);
    } catch (error) {
      console.error('Request failed:', error);
    }
  };

  return (
    <div className="exercise-search-form">
      <label>
        Muscle Group:
        <select value={muscle} onChange={e => setMuscle(e.target.value)}>
          <option value="">Select Muscle Group</option>
          <option value="biceps">Biceps</option>
          <option value="quadriceps">Quadriceps</option>
          <option value="chest">Chest</option>
          {/* Add more options as needed */}
        </select>
      </label>
      <label>
        Equipment:
        <select value={equipment} onChange={e => setEquipment(e.target.value)}>
          <option value="">Select Equipment</option>
          <option value="barbell">Barbell</option>
          <option value="dumbbell">Dumbbell</option>
          <option value="machine">Machine</option>
          {/* Add more options as needed */}
        </select>
      </label>
      <label>
        Type of Exercise:
        <select value={type} onChange={e => setType(e.target.value)}>
          <option value="">Select Exercise Type</option>
          <option value="strength">Strength</option>
          <option value="cardio">Cardio</option>
          <option value="flexibility">Flexibility</option>
          {/* Add more options as needed */}
        </select>
      </label>
      <label>
        Difficulty Level:
        <select value={difficulty} onChange={e => setDifficulty(e.target.value)}>
          <option value="">Select Difficulty Level</option>
          <option value="beginner">Beginner</option>
          <option value="intermediate">Intermediate</option>
          <option value="advanced">Advanced</option>
          {/* Add more options as needed */}
        </select>
      </label>
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default ExerciseSearchForm;