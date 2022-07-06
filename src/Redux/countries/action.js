 export const  countryAction={

  GET_COUNTRY_LOADING: "GET_COUNTRY_LOADING",
  GET_COUNTRY_SUCCESS: "GET_COUNTRY_SUCCESS",
  GET_COUNTRY_FAILURE: "GET_COUNTRY_FAILURE",

  POST_COUNTRY_LOADING: "POST_COUNTRY_LOADING",
  POST_COUNTRY_SUCCESS: "POST_COUNTRY_SUCCESS",
  POST_COUNTRY_FAILURE: "POST_COUNTRY_FAILURE",


}

// in action creator we define the action

export const getCountryLoad = () => ({
    type: countryAction.GET_COUNTRY_LOADING
  });
  export const getCountrySucc = (data) => ({
    type: countryAction.GET_COUNTRY_SUCCESS,
    payload:data

  });
  export const getCountryFail = () => ({
    type: countryAction.GET_COUNTRY_FAILURE
  });

  export const getCountry = () => (dispatch, getState) => {
    const countryLoadAction = getTodoRequest();
    dispatch();
    console.log(`token is`, getState().auth.token);
    return axios({
      url: "https://json-server-mocker-masai.herokuapp.com/tasks",
      method: "GET"
    })
      .then((res) => {
        const todoSuccessAction = getTodoSuccess(res.data);
        dispatch(todoSuccessAction);
      })
      .catch((err) => {
        const todoErrorAction = getTodoFailure();
        dispatch(todoErrorAction);
      });
  };