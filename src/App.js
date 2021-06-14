import React from 'react'

import 'normalize.css'

/* components */
import CreateComment from './components/create-commect'
import CommentList from './components/comment-list'

/* styles */
import './App.scss'

const App = () => {
  return (
    <div className="app__wrapper">
      <div className="app__inner container">

        <h1>
          Comments App
        </h1>

        <CreateComment />

        <CommentList />

      </div>
    </div>
  )
}

export default App
