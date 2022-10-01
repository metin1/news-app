import { createSelector } from 'reselect'

import { IRootState } from 'store'

const globalSelector = (state: IRootState) => state.global
const authSelector = (state: IRootState) => state.auth

export const globalStateSelector = createSelector(
  globalSelector,
  state => state
)

export const globalLoadingSelector = createSelector(globalSelector, state =>
  Boolean(state.isLoading)
)

export const globalErrorStatusCodeSelector = createSelector(
  globalSelector,
  state => state?.errorStatusCode,
)

export const isAuthenticatedSelector = createSelector(
  authSelector,
  state => state?.isAuthenticated,
)

export const searchSelector = createSelector(
  globalSelector,
  state => state?.searchQuery
)
