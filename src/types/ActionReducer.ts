import ACTIONS from "constants/actionTypes";

interface MetadataObj {
  [key: string]: any;
}

interface ActionReducer {
  type: keyof typeof ACTIONS;
  payload: MetadataObj;
}

export default ActionReducer;
