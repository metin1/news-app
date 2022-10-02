import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Modal from 'react-modal'

import Box from 'components/Box'

import { globalStateSelector } from 'store/selectors'
import { clearErrorMessage } from 'store/global/globalActions'
import Button from 'components/Button/Button'

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
}

const ErrorMessage = () => {
  const dispatch = useDispatch()

  const { error, errorStatusCode } = useSelector(globalStateSelector)
  console.log(`LL: ErrorMessage -> error`, error)

  const [state, setState] = useState({
    message: '',
    statusCode: 0,
  })

  useEffect(() => {
    setState({
      message: error || '',
      statusCode: errorStatusCode || 0,
    })

    return () => {
      // dispatch(clearErrorMessage())
    }
  }, [])

  const handleClick = () => {
    dispatch(clearErrorMessage())
  }

  let errorDetail = ''
  switch (errorStatusCode) {
    case 400:
      errorDetail = 'Bad request.'
      break
    case 403:
      errorDetail = `You don't have permission to access this page!`
      break
    case 404:
      errorDetail = `The page does not exist.`
      break
    default:
      errorDetail = 'Unexpected Error.'
      break
  }

  console.log(`LL: ErrorMessage -> state`, state)

  return (
    <Modal
      isOpen
      id='error-modal'
      style={customStyles}
      contentLabel='Error'
    >
      <Box
        display='flex'
        flexDirection='column'
        justifyContent='center'
        alignItems='center'
        minHeight={150}
      >
        <>
          {state.message && (
            <Box color='warning-red' id='message'>
              {state.message}
            </Box>
          )}
          {!state.message && errorDetail && (
            <Box color='warning-red' id='detail'>
              {errorDetail}
            </Box>
          )}
        </>
      </Box>

      <Box
        display='flex'
        flexDirection='column'
        justifyContent='center'
        alignItems='center'
      >
      <Button
        width='100%'
        id='close'
        onClick={handleClick}
        maxWidth='200px'
      >
        Close
        </Button>
      </Box>
    </Modal>
  )
}

export default ErrorMessage
