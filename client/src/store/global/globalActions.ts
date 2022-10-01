import { AppDispatch, RootState } from 'store'

import { globalSlice } from 'store/global/globalSlice'

const actions = globalSlice.actions

export const globalSelector = (state: RootState) => state.global

export const setLoading =
  (isLoading: boolean, loadingPageName?: string | undefined) =>
  (dispatch: AppDispatch): void => {
    dispatch(actions.setLoading({ isLoading, loadingPageName }))
  }

export const catchErrorMessage =
  (payload: {
    statusCode: number
    error: any
  }) =>
  (dispatch: AppDispatch): void => {
    dispatch(actions.setGeneralErrorMessage(payload))
  }

export const clearErrorMessage =
  () =>
  (dispatch: AppDispatch): void => {
    dispatch(actions.clearGeneralErrorMessage())
  }

export const setSearch =
  (key: string) =>
  (dispatch: AppDispatch): void => {
    dispatch(actions.setSearch(key))
  }
