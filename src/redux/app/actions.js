import {createAction} from "@reduxjs/toolkit";

export const redirect = createAction('app/redirect')
export const errorAdded = createAction('epp/error/added')
export const errorRemoved = createAction('epp/error/removed')

export const addError = (error) => (dispatch) => {
  dispatch(errorAdded(error));
};

export const removeError = () => (dispatch) => {
  dispatch(errorRemoved());
};
