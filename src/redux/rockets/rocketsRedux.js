// create a redux directory for rocketpage
const FETCH_DATA = 'my-app/rockets/FETCH';

const initialState = [];

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DATA:
      return action.payload;
    default:
      return state;
  }
};

const fetchData = (payload) => (
  {
    type: FETCH_DATA,
    payload,
  }
);

export const fetchAPI = () => async (dispatch) => {
  const response = await fetch('https://api.spacexdata.com/v3/rockets');
  const data = await response.json();
  const newArr = [];
  data.map((each) => {
    const {
      id,
      rocket_name: rocketName,
      description,
    } = each;
    const obj = {
      id,
      rocketName,
      description,
      flickrImages: each.flickr_images[0],
    };
    return newArr.push(obj);
  });
  // console.log('Wanted format', newArr);
  dispatch(fetchData(newArr));
};

export default reducer;
