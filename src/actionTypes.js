export default {
  BOX: {
    LIST: {
      REQUEST: "REQUEST_LIST_BOX",
      RECEIVE: "RECEIVE_LIST_BOX",
      FAILED: "FAILED_LIST_BOX"
    },
    CREATE: {
      REQUEST: "REQUEST_CREATE_BOX",
      RECEIVE: "RECEIVE_CREATE_BOX",
      FAILED: "FAILED_CREATE_BOX"
    },
    UPDATE: {
      REQUEST: "REQUEST_UPDATE_BOX",
      RECEIVE: "RECEIVE_UPDATE_BOX",
      FAILED: "FAILED_UPDATE_BOX"
    },
    REMOVE: {
      REQUEST: "REQUEST_REMOVE_BOX",
      RECEIVE: "RECEIVE_REMOVE_BOX",
      FAILED: "FAILED_REMOVE_BOX"
    },
    INVITE: {
      REQUEST: "REQUEST_INVITE_BOX",
      RECEIVE: "RECEIVE_INVITE_BOX",
      FAILED: "FAILED_INVITE_BOX"
    },
    SELECT: "SELECT_BOX"
  },
  FOOD: {
    LIST: {
      REQUEST: "REQUEST_LIST_FOOD",
      RECEIVE: "RECEIVE_LIST_FOOD",
      FAILED: "FAILED_LIST_FOOD"
    },
    CREATE: {
      REQUEST: "REQUEST_CREATE_FOOD",
      RECEIVE: "RECEIVE_CREATE_FOOD",
      FAILED: "FAILED_CREATE_FOOD"
    },
    UPDATE: {
      REQUEST: "REQUEST_UPDATE_FOOD",
      RECEIVE: "RECEIVE_UPDATE_FOOD",
      FAILED: "FAILED_UPDATE_FOOD"
    },
    REMOVE: {
      REQUEST: "REQUEST_REMOVE_FOOD",
      RECEIVE: "RECEIVE_REMOVE_FOOD",
      FAILED: "FAILED_REMOVE_FOOD"
    },
    NOTICE: {
      CREATE: {
        REQUEST: "REQUEST_CREATE_NOTICE_FOOD",
        RECEIVE: "RECEIVE_CREATE_NOTICE_FOOD",
        FAILED: "FAILED_CREATE_NOTICE_FOOD"
      },
      REMOVE: {
        REQUEST: "REQUEST_REMOVE_NOTICE_FOOD",
        RECEIVE: "RECEIVE_REMOVE_NOTICE_FOOD",
        FAILED: "FAILED_REMOVE_NOTICE_FOOD"
      }
    }
  },
  UNIT: {
    CREATE: {
      REQUEST: "REQUEST_CREATE_UNIT",
      RECEIVE: "RECEIVE_CREATE_UNIT",
      FAILED: "FAILED_CREATE_UNIT"
    },
    LIST: {
      REQUEST: "REQUEST_LIST_UNIT",
      RECEIVE: "RECEIVE_LIST_UNIT",
      FAILED: "FAILED_LIST_UNIT"
    },
    UPDATE: {
      REQUEST: "REQUEST_UPDATE_UNIT",
      RECEIVE: "RECEIVE_UPDATE_UNIT",
      FAILED: "FAILED_UPDATE_UNIT"
    },
    REMOVE: {
      REQUEST: "REQUEST_REMOVE_UNIT",
      RECEIVE: "RECEIVE_REMOVE_UNIT",
      FAILED: "FAILED_REMOVE_UNIT"
    }
  },
  USER: {
    LIST: {
      REQUEST: "REQUEST_LIST_USER",
      RECEIVE: "RECEIVE_LIST_USER",
      FAILED: "FAILED_LIST_USER"
    },
    UPDATE: {
      REQUEST: "REQUEST_UPDATE_USER",
      RECEIVE: "RECEIVE_UPDATE_USER",
      FAILED: "FAILED_UPDATE_USER"
    }
  },
  SESSION: {
    VERIFY: {
      REQUEST: "REQUEST_VERIFY_SESSION",
      RECEIVE: "RECEIVE_VERIFY_SESSION",
      FAILED: "FAILED_VERIFY_SESSION"
    },
    SIGNUP: {
      REQUEST: "REQUEST_SIGNUP_SESSION",
      RECEIVE: "RECEIVE_SIGNUP_SESSION",
      FAILED: "FAILED_SIGNUP_SESSION"
    },
    FIREBASE_AUTH: {
      REQUEST: "REQUEST_FIREBASE_AUTH_SESSION",
      RECEIVE: "RECEIVE_FIREBASE_AUTH_SESSION",
      FAILED: "FAILED_FIREBASE_AUTH_SESSION"
    }
  },
  NOTIFICATION: {
    SHOW: "SHOW_NOTIFICATION",
    HIDE: "HIDE_NOTIFICATION"
  },
  SIGNOUT: "SIGNOUT"
};
