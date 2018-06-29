export default {
  GOOGLE_AUTH: {
    REQUEST: 'REQUEST_GOOGLE_AUTH',
    RECEIVE: 'RECEIVE_GOOGLE_AUTH',
    FAILED: 'FAILED_GOOGLE_AUTH',
  },
  BOX: {
    LIST: {
      REQUEST: 'REQUEST_LIST_BOX',
      RECEIVE: 'RECEIVE_LIST_BOX',
      FAILED: 'FAILED_LIST_BOX',
    },
    SELECT: 'SELECT_BOX',
  },
  FOOD: {
    CREATE: {
      REQUEST: 'REQUEST_CREATE_FOOD',
      RECEIVE: 'RECEIVE_CREATE_FOOD',
      FAILED: 'FAILED_CREATE_FOOD',
    },
    UPDATE: {
      REQUEST: 'REQUEST_UPDATE_FOOD',
      RECEIVE: 'RECEIVE_UPDATE_FOOD',
      FAILED: 'FAILED_UPDATE_FOOD',
    },
    REMOVE: {
      REQUEST: 'REQUEST_REMOVE_FOOD',
      RECEIVE: 'RECEIVE_REMOVE_FOOD',
      FAILED: 'FAILED_REMOVE_FOOD',
    },
    SET_PARAMS: 'SET_PARAMS_FOOD'
  },
  UNIT: {
    LIST: {
      REQUEST: 'REQUEST_LIST_UNIT',
      RECEIVE: 'RECEIVE_LIST_UNIT',
      FAILED: 'FAILED_LIST_UNIT',
    },
  },
  MODAL: {
    FOOD: {
      NEW: {
        OPEN: 'OPEN_NEW_FOOD_MODAL',
        CLOSE: 'CLOSE_NEW_FOOD_MODAL',
      },
      EDIT: {
        OPEN: 'OPEN_EDIT_FOOD_MODAL',
        CLOSE: 'CLOSE_EDIT_FOOD_MODAL',
      },
    },
  },
  SIGNOUT: 'SIGNOUT',
};
