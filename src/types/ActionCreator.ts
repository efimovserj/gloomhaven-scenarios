import ACTIONS from "constants/actionTypes";

interface MetadataObj {
  [key: string]: any;
}

interface ActionCreator {
  type: keyof typeof ACTIONS;
  payload?: MetadataObj;
}

export default ActionCreator;
