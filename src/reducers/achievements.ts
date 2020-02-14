import ACTIONS from "constants/actionTypes";
import ActionReducer from "types/ActionReducer";
import Achievement from "types/Achievement";
import AchievementsList from "utils/achievements";

const initialState: Achievement[] = AchievementsList;

const achievements = (state = initialState, action: ActionReducer) => {
  const { type, payload } = action;
  switch (type) {
    case ACTIONS.ADD_ACHIEVEMENT:
      console.log("payload ADD_ACHIEVEMENT", payload);
      return state;
    default:
      return state;
  }
};

export default achievements;
