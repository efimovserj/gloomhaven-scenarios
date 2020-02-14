import ActionCreator from "types/ActionCreator";
import ActionReducer from "types/ActionReducer";

export const createAction = ({
  type,
  payload = {}
}: ActionCreator): ActionReducer => {
  return {
    type,
    payload
  };
};
