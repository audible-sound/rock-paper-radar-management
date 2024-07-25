import React from 'react'
import AuthorCard from '../ui/AuthorCard'
import UtilsBar from '../ui/UtilsBar'

import bg from "../../assets/images/Wavy-pic.jpg"

const Posts = () => {

    const dummyData = [{
        image: bg,
        title: "the walk of faith",
        description: "lorem ipsum dfe efsfdafasfa sdfas fsafsdfas dssdfsf",
        username: "Lucas Monroe",
        date: "12/3/2028",
        tags: ["Fashion", "Bitcoin", "Macademia", "Sunshine", "Rainbows"],
        link: ""
    }]


    return (
        <div>
            <UtilsBar />
            <div className='grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 bg-opacity-50 '>
                {dummyData.map(({ image, title, description, username, date, tags, link }) => {
                    return (<AuthorCard
                        image={image}
                        title={title}
                        description={description}
                        username={username}
                        date={date}
                        tags={tags}
                        link={link}
                        hoverable
                    />)
                }

                )}
            </div>
        </div>

    )
}

export default Posts
