import { memo } from 'react'

import { newsText } from '../../utils/newsText'

import './News.scss'

interface NewsProps {
    title: string,
    description: string
};

function News({ title, description }: NewsProps) {
    return (
        <div className="news">
            <h2> {title} </h2>
            <h6> {description} </h6>

            <div>
                {newsText}
            </div>
        </div>
    )
}

export default memo(News)
