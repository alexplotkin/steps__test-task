import React from 'react'
import PropTypes from 'prop-types'

/* styles */
import './styles.scss'

const SingleComment = ({ email, name, body }) => {
  return (
    <div className="single-comment__wrapper">
      <div className="single-comment__header">
        <img
          className="single-comment__avatar"
          src="https://via.placeholder.com/50"
          alt="user"
        />

        <div className="single-comment__content__bio">
          <div className="single-comment__content__email">
            email: {email}
          </div>
          <div className="single-comment__content__name">
            name: {name}
          </div>
        </div>
      </div>

      <div className="single-comment__content__body">
        {body}
      </div>
    </div>
  )
}

SingleComment.propTypes = {
  email: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
}

export default SingleComment
