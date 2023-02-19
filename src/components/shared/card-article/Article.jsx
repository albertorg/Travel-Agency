import React from 'react'
import { Link } from 'react-router-dom'
import { BiUserCircle } from 'react-icons/bi'
import { VscCommentDiscussion } from 'react-icons/vsc'
import './styles.css'

export const Article = ({news}) => {

    const { image, title } = news;

    return (
        <div className='article_container' >
            <div className='imgArticle_container'>
                <img src={require(`../../../assets/blog/${image}`)} alt={title} />
                <div className='creation-date'>
                    <span>28</span>
                    <span>feb</span>
                </div>
                <Link to='/' className='effect-hover'></Link>
            </div>

            <div className='infoArticle_conatiner'>
                
                <div className="metaInfo">
                    <div className="autorMeta">
                        <BiUserCircle className='mata-icon'/>
                        <span>Admin</span>
                    </div>
                    <div className="autorMeta">
                        <VscCommentDiscussion className='mata-icon' />
                        <span>2 Comments</span>
                    </div>
                </div>

                <div className='articleTitle_info'>
                    <Link to='/'>
                        <h3>{title}</h3>
                    </Link>  
                </div>
            </div>
        </div>
    )
}
