import React from 'react'
import { Link } from 'react-router-dom'
import { Article } from '../../../shared/card-article/Article'
import './styles.css'

const array = [1, 2, 3]

export const Articles = () => {
    return (
        <section className='articles-section'>

            <div className=" main_container">

                <div className='postTitle-area'>
                    <div className="titles_container">
                        <span className="section-tagline left-text">From the blog</span>
                        <h2 className="section-title left-text">Latest Blog Articles</h2>
                    </div>
                    <button name='all posts' className='btn-viewAll'>
                        <Link to='/'>View all posts</Link>
                    </button>
                </div>
                

                <div className='cardsArticles_container'>
                    {
                        array.map(i => (
                            <Article />
                        ))
                    }
                </div>

            </div >

        </section>
    )
}
