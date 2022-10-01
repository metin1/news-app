import { useEffect, useState } from 'react'
import axios, { Canceler } from 'axios'
import { IFeed } from 'shared/models/feeds.models'
import { useDispatch } from 'react-redux'
import { setLoading } from 'store/global/globalActions'

export default function useFeeds(query: any, pageNumber: number) {
  const dispatch = useDispatch()
  const [loading, setLocalLoading] = useState(true)
  const [error, setError] = useState(false)
  const [feeds, setFeeds] = useState<IFeed[]>([])
  const [hasMore, setHasMore] = useState(false)


  useEffect(() => {
    setFeeds([])
  }, [query])

  useEffect(() => {
    // dispatch(setLoading(true))
    setLocalLoading(true)
    setError(false)
    let cancel: Canceler
    axios({
      method: 'GET',
      url: `/feeds?page=${pageNumber}&limit=5`,
      params: { q: query },
      cancelToken: new axios.CancelToken(c => (cancel = c)),
    })
      .then(res => {
        setFeeds((prevFeeds: IFeed[]) => {
          const newFeeds = res.data.map((item: IFeed) => {
            item.image = item.image + '?random=' + Math.random()
            return item
          })
          return [...new Set<any>([...prevFeeds, ...newFeeds])]
        })
        setHasMore(res.data.length > 0)
        setLocalLoading(false)
        dispatch(setLoading(false))
      })
      .catch(e => {
        if (axios.isCancel(e)) return
        setError(true)
        // dispatch(setLoading(false))
      })
    return () => cancel()
  }, [query, pageNumber])

  return { loading, error, feeds, hasMore }
}
