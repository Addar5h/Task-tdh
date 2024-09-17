import React from 'react'


const Milestones = () => {
  return (
    <div className="empowering-progress">
    <h2>EMPOWERING PROGRESS</h2>
    <p>
      Explore the statistics that define Tenali Double Horse's journey. From
      years of excellence to a growing customer base, discover the metrics
      that highlight our commitment to quality and growth.
    </p>
    <div className="stats-container">
      
      <div className="stat-item">
          <img src="Eclipse-1.png" className="icon" alt="Experience Icon" />
        <span className='numb'>18+</span>
        <p>YEARS OF EXPERIENCE</p>
      </div>

      <div className="stat-item">
        <img src="Eclipse-2.png" className="icon" alt="Countries Icon" />
        <span className='numb'>12</span>
        <p>TOTAL COUNTRIES</p>
      </div>

      <div className="stat-item">
        <img src="Eclipse-3.png" className="icon" alt="States Icon" />
        <span className='numb'>18</span>
        <p>STATES</p>
      </div>

      <div className="stat-item">
        <img src="Eclipse-4.png" className="icon" alt="Products Icon" />
        <span className='numb'>21+</span>
        <p>PRODUCTS</p>
      </div>
    </div>
  </div>
  )
}

export default Milestones
