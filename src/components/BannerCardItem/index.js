import './index.css'

const BannerCardItems = props => {
  const {bannerDetails} = props
  const {headerText, description, className} = bannerDetails
  return (
    <li className={`${className} banner-card-item`}>
      <div>
        <h1 className="heading">{headerText}</h1>
        <p className="description">{description}</p>
        <button className="btn btn-primary" type="button">
          Show more
        </button>
      </div>
    </li>
  )
}

export default BannerCardItems
