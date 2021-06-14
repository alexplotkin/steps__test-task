import React, { useState } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component'

/* components */
import SingleComment from './single-comment'
import Loader from './loader'
import NoMore from './no-more'

/* utils */
import reqH from '../../utils/request-handler'

/* hooks */
import _useDidMount from '../../hooks/lifecycle/use-did-mount'

/* constants */
import { COMMENTS_API_URL } from '../../constants'

/* styles */
import './styles.scss'

const ENTITY_NAME = 'comments'
const PER_PAGE = 20

const CommentList = () => {

  const [comments, setComments] = useState([])

  const [currentPage, setCurrentPage] = useState(1)
  const [hasMore, setHasMore] = useState(true)

  const fetchComments = () => {
    reqH({
      apiURL: COMMENTS_API_URL,
      url: `/${ENTITY_NAME}`,
      params: {
        _limit: PER_PAGE,
        _page: currentPage,
      },
    }).then((res) => {
      if (!res.data.length) {
        setHasMore(false)
      }

      setComments((prev) => [...prev, ...res.data])

      setCurrentPage((prev) => (prev + 1))
    })
  }

  _useDidMount(() => {
    fetchComments()
  })

  if (!comments.length) {
    return (
      <Loader />
    )
  }

  return (
    <div className="comment-list__wrapper">
      <InfiniteScroll
        dataLength={comments.length}
        next={fetchComments}
        loader={<Loader />}
        hasMore={hasMore}
        endMessage={<NoMore />}
      >
        {comments.map((comment) => (
          <SingleComment
            key={comment.id}
            email={comment.email}
            name={comment.name}
            body={comment.body}
          />
        ))}
      </InfiniteScroll>
    </div>
  )

}

export default CommentList
