import { createActions } from 'redux-actions'
import types from './actionTypes';

export default createActions({
  [types.REQUEST_GOOGLE_AUTH]: (googleToken) => ({
    googleToken
  }),
  [types.RECEIVE_GOOGLE_AUTH]: (credential) => ({
    credential
  }),
  [types.FAILED_GOOGLE_AUTH]: (error) => ({
    error
  }),
  [types.REQUEST_GET_BOXES]: (credential) => ({
    credential
  }),
  [types.RECEIVE_GET_BOXES]: (boxes) => ({
    boxes
  }),
  [types.FAILED_GET_BOXES]: (error) => ({
    error
  })
})

//
//
//
// export function requestGoogleAuth(googleToken) {
//   return {
//     type: types.REQUEST_GOOGLE_AUTH,
//     googleToken,
//   };
// }
//
// export function receiveGoogleAuth(credential) {
//   return {
//     type: types.RECEIVE_GOOGLE_AUTH,
//     credential,
//   };
// }
//
// export function failedGoogleAuth(error) {
//   return {
//     type: types.FAILED_GOOGLE_AUTH,
//     error,
//   };
// }
//
// export function requestGetBoxes(credential) {
//   return {
//     type: types.REQUEST_GET_BOXES,
//     credential,
//   };
// }
//
// export function receiveGetBoxes(boxes) {
//   return {
//     type: types.RECEIVE_GET_BOXES,
//     boxes,
//   };
// }
//
// export function failedGetBoxes(error) {
//   return {
//     type: types.FAILED_GET_BOXES,
//     error,
//   };
// }
