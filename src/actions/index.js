import sessionAction from './sessionAction';
import boxAction from './boxAction';
import foodAction from './foodAction';

export default {
  ...sessionAction,
  ...boxAction,
  ...foodAction,
};
