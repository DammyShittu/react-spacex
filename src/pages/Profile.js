import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import '../styling/profile.css';
import { leaveMission } from '../redux/missions/missions';

const Profile = () => {
  const missions = useSelector((state) => state.missionsReducer.newMissions);
  const list = useSelector((state) => state.rocketsReducer);
  const filteredRockets = list.filter((each) => each.reserved === 'true');
  const dispatch = useDispatch();

  let filteredMissions;

  if (missions) {
    filteredMissions = missions.filter((mission) => mission.reserved);
  }
  return (
    <section className="my-profile">
      <div className="profile">
        <div className="missions">
          <h2>My Missions</h2>
          <ul className="profile-lists">
            {filteredMissions && filteredMissions.map((mission) => {
              const { name, id, wikipedia } = mission;
              return (
                <li
                  key={id}
                  className="list"
                >
                  <h3 className="name">{name}</h3>
                  <a href={wikipedia} className="wiki">Read More</a>
                  <button
                    type="button"
                    className="btn leave"
                    onClick={() => dispatch(leaveMission(id))}
                  >
                    Leave Mission
                  </button>
                </li>
              );
            })}
          </ul>

          {(!filteredMissions || !filteredMissions[0]) && (
            <h3 className="no-mission">
              Oh Oh!
              <br />
              Kindly Join A Mission On The Missions Page.
            </h3>
          )}
        </div>
        <div className="rockets">
          <h2>My Rockets</h2>
          <ul className="profile-lists">
            {filteredRockets.map((reserved) => (
              <li key={reserved.id} className="list">{reserved.rocketName}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Profile;
