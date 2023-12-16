import React from 'react'
import './article.css'

const Article = ({imgURL , date , title}) => {
  return (
    <div className='gpt3_blog-container_article'>
      <div className="gpt3_blog-container_article-image">
        <img src={imgURL} />
      </div>
      <div className="gpt3_blog-container_article-content">
        <div>
          <p>{date}</p>
          <h3>{title}</h3>
        </div>
        <p>Read full article</p>
      </div>
    </div>
  )
}

export default Article
