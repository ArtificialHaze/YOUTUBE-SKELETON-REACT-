import React from 'react'

const Filter = () => {

    
  return (
    <div className='filter d-flex align-items-center'>
        <div className="single-filter">
            <span className="filter-item pointer active">
                All
            </span>
        </div>
        <div className="single-filter">
            <span className="filter-item pointer">
                Mixes
            </span>
        </div>
        <div className="single-filter">
            <span className="filter-item pointer">
                Music
            </span>
        </div>
        <div className="single-filter">
            <span className="filter-item pointer">
                Live
            </span>
        </div>
        <div className="single-filter">
            <span className="filter-item pointer">
                Gaming
            </span>
        </div>
        <div className="single-filter">
            <span className="filter-item pointer">
                Computer
            </span>
        </div>
        <div className="single-filter">
            <span className="filter-item pointer">
                Programming
            </span>
        </div>
        <div className="single-filter">
            <span className="filter-item pointer">
                SAMSUNG
            </span>
        </div>
        <div className="single-filter">
            <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false" className="style-scope yt-icon pointer" style={{width:'20px',height:'20px',margin:'0px 20px'}}><g mirror-in-rtl="" className="style-scope yt-icon"><path d="M9.4,18.4l-0.7-0.7l5.6-5.6L8.6,6.4l0.7-0.7l6.4,6.4L9.4,18.4z" className="style-scope yt-icon"></path></g></svg>
        </div>
    </div>
  )
}

export default Filter