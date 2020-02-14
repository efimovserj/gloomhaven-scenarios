import ACTIONS from "constants/actionTypes";
import { createAction } from "helpers/redux";

export const addAchievement = (achievement: any) => {
  return (dispatch: any) => {
    dispatch(
      createAction({
        type: ACTIONS.ADD_ACHIEVEMENT,
        payload: {
          achievement
        }
      })
    );
  };
};
