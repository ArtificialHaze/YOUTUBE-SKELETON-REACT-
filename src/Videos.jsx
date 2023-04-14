import React from 'react'
import Filter from './Filter'
import SingleVideo from './SingleVideo'

const Videos = () => {
  return (
    <div className='videos'>
        <Filter/>
        <div className="row">
            <SingleVideo thumbImage={""} profileImage={""} title={""} channelName={""} views={""} timestamps={""} videoDuration={""}/>
        </div>
    </div>
  )
}

export default Videos