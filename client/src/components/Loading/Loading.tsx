import React from 'react'
import { useSelector } from 'react-redux'

import Spinner from 'components/Spinner'

import { globalLoadingSelector } from 'store/selectors'

import { InternalWrapper, Wrapper } from './Loading.styled'

interface ILoadingProps {
  loadStatus?: boolean
  internal?: boolean
  bg?: string
}

const Loading: React.FC<ILoadingProps> = props => {
  const isLoading: boolean = useSelector(globalLoadingSelector)
  const LoadingWrapper = props.internal ? InternalWrapper : Wrapper

  const background = props.bg || 'rgba(255, 255, 255, 0.5)'

  return (
    <LoadingWrapper id='loading' show={props.loadStatus || isLoading} bg={background}>
      <Spinner />
    </LoadingWrapper>
  )
}

Loading.defaultProps = {
  loadStatus: false,
}


export default Loading
