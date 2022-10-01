import React, { useCallback, useRef, useState } from 'react'
import { useSelector } from 'react-redux'


import WarningBox from 'components/WarningBox'
import useFeeds from 'hooks/useFeeds'
import { searchSelector } from 'store/selectors'

import Box from 'components/Box'
import FeedCard from 'components/FeedCard/FeedCard'
import { IFeed } from 'shared/models/feeds.models'
import Spinner from 'components/Spinner'
import Loading from 'components/Loading'

const HomePage: React.FC = () => {
  const searchQuery = useSelector(searchSelector)
  const [pageNumber, setPageNumber] = useState(1)

  const { feeds, hasMore, loading, error } = useFeeds(searchQuery, pageNumber)

  const observer = useRef<IntersectionObserver | null>(null)

  const lastfeedElementRef = useCallback(
    (node: any) => {
      if (loading) return
      if (observer.current) observer.current.disconnect()
      observer.current = new IntersectionObserver(entries => {
        if (entries[0].isIntersecting && hasMore) {
          setPageNumber(prevPageNumber => prevPageNumber + 1)
        }
      })
      if (node) observer.current.observe(node)
    },
    [loading, hasMore]
  )

  if (error) {
    return <WarningBox>{error}</WarningBox>
  }

  if (!feeds?.length && !loading) {
    return <WarningBox>There is no feed to show</WarningBox>
  }

  return (
    <Box
      display='flex'
      justifyItems='center'
      alignItems='center'
      justifyContent='space-around'
      m={3}
      p={2}
      flexDirection='column'
      color='heading'
      // flexWrap='nowrap'
    >
      <Box as='h1' py={4}>
        The news feeds
      </Box>

      <ul>
        {feeds.map((feed: IFeed, index: number) => {
          if (feeds.length === index + 1) {
            return (
              <li key={feed.id} ref={lastfeedElementRef}>
                <FeedCard feed={feed} />
              </li>
            )
          } else {
            return <FeedCard key={feed.id} feed={feed} />
          }
        })}
        {loading && pageNumber !== 1 && (
          <Box color='card' display='flex' justifyContent='center'>
            Loading... <Spinner />
          </Box>
        )}
        {loading && pageNumber === 1 && <Loading loadStatus />}
      </ul>
    </Box>
  )
}

export default HomePage
