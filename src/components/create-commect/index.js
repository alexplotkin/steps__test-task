import React, { useState } from 'react'

/* utils */
import reqH from '../../utils/request-handler'

/* constants */
import { STEPS_API_URL } from '../../constants'

/* styles */
import './styles.scss'

const CreateComment = () => {

  const [comment, setComment] = useState('')

  const handleSend = () => {
    if (!comment.length) {
      return
    }

    reqH({
      apiURL: STEPS_API_URL,
      url: '/test/testAssignComment',
      method: 'POST',
      data: {
        comment: comment,
      },
    }).then(() => {
      setComment('')
    }).finally(() => { // tmp (just because of api does not working)
      setComment('')
    })
  }

  return (
    <div className="create-comment__wrapper">

      <textarea
        className="create-comment__input"
        placeholder="Enter your comment"
        value={comment}
        onChange={(e) => setComment(e.target.value)}
      />
      <button className="create-comment__submit" onClick={handleSend} disabled={!comment.length}>
        Send
      </button>

    </div>
  )
}

export default CreateComment
