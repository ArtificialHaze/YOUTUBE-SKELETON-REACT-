import React from 'react'

const SingleVideo = ({thumbImage,profileImage,title,channelName,views,timestamps,videoDuration}) => {
  return (
    <div className='col-4'>
        <div className="thumbnail relative">
            <img src={thumbImage} alt={title} className='thumbnail-image pointer' style={{width:'100%'}} />
            <span className="videosDurations absolute">
                {videoDuration}
            </span>
            <div className="description d-flex">
                <div className="profileImage">
                    <img src={profileImage} alt={title} className='channel-image pointer'/>
                </div>
                <div className="title d-flex align-items-center justify-content-center">
                    <span className="channelName">
                        {channelName}
                    </span>
                    <div className="time-description">
                       <span className="views">
                        {views}
                       </span>
                       <span className="time-stamps">
                        {timestamps}
                       </span>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SingleVideo