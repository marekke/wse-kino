import {createAction} from "@reduxjs/toolkit";
import {exampleDataGenerator} from "../../utils/Helper";

export const redirect = createAction('app/redirect')
export const errorAdded = createAction('epp/error/added')
export const errorRemoved = createAction('epp/error/removed')
export const exampleDataGenerated = createAction('epp/exampleData/generated')

export const addError = (error) => (dispatch) => {
  dispatch(errorAdded(error));
};

export const removeError = () => (dispatch) => {
  dispatch(errorRemoved());
};

export const generateExampleData = () => (dispatch) => {
  dispatch(exampleDataGenerated(exampleDataGenerator()))
}
