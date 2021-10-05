import React from 'react';
import { useSelector } from 'react-redux';
import SingleMission from '../components/SingleMission';

const Missions = () => {
  const missions = useSelector((state) => state.missionsReducer.newMissions);

  return (
    <>
      <ul>
        {missions && missions.map((mission) => (
          <li key={mission.id}>
            <SingleMission name={mission.name} />
          </li>
        ))}
      </ul>
    </>
  );
};

export default Missions;
