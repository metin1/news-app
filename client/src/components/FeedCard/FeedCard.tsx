import React, { forwardRef, useEffect } from 'react'
import dayjs from 'dayjs'

import { useDispatch } from 'react-redux'
import { IFeed } from 'shared/models/feeds.models'

import Box from 'components/Box'
import { Link } from 'components/Link'
import Span from 'components/Span'

export interface FeedDetailProps {
  feed: IFeed
}

const FeedCard = (props: FeedDetailProps) => {
  return (
    <Box
      m='auto'
      my={4}
      p={3}
      display='flex'
      flexDirection='column'
      width={['320px', '520px', '780px']}
      borderColor='border'
      borderStyle='solid'
      borderWidth='1px'
      flex='auto 1 1'
      bg='card'
    >
      <Box
        my={3}
        p={2}
        pl={[2, 4, 6]}
        display='flex'
        justifyContent='space-between'
      >
        <Box display='flex' flexDirection='row' width='100%'>
          {props.feed?.avatar && (
            <Box
              as='img'
              marginRight='6px'
              maxWidth={60}
              maxHeight={60}
              borderRadius='50%'
              src={`${props.feed?.avatar}`}
              alt={props.feed?.name}
            />
          )}
          <Box as='h2'>{props.feed?.name}</Box>
        </Box>
        <Box
          display='flex'
          flexDirection='column'
          alignItems='flex-end'
          minWidth='160px'
        >
          <span>
            {dayjs(new Date(props.feed?.createdAt.toString())).format(
              'DD/MM/YYYY'
            )}
          </span>
          <span>
            {dayjs(new Date(props.feed?.createdAt.toString())).format('HH:MM')}
          </span>
        </Box>
      </Box>
      <Box display='flex' alignItems='center' height='auto' flexDirection='row'>
        <Box
          display='flex'
          alignItems='center'
          height='auto'
          flexDirection='row'
        >
          <Box
            width={['100px', '200px', '250px']}
            height={['100px', '200px', '250px']}
          >
            {props.feed?.image && (
              <img
                width='100%'
                height='100%'
                src={`${props.feed?.image}}`}
                alt={props.feed?.name}
              />
            )}
          </Box>
        </Box>
        <Box display='flex' flexDirection='row' flexWrap='wrap'>
          <Box
            display='flex'
            justifyContent='center'
            flexDirection='column'
            width='auto'
          >
            <Box p={[1, 2, 3]}>
              <Span>Listeners:</Span>
              <Span>{props?.feed?.title}</Span>
            </Box>
            <Box p={[1, 2, 3]}>
              <Span>Playcount:</Span>
              <Span>{props?.feed?.feed}</Span>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default FeedCard
