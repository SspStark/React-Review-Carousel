import {Component} from 'react'
import './index.css'

class ReviewsCarousel extends Component {
  state = {activeReviewIndex: 0}

  displayActiveReview = review => {
    const {imgUrl, username, companyName, description} = review
    return (
      <div className="review-item">
        <img src={imgUrl} alt={username} />
        <p className="name">{username}</p>
        <p className="company">{companyName}</p>
        <p className="desc">{description}</p>
      </div>
    )
  }

  onClickRightArrow = () => {
    const {activeReviewIndex} = this.state
    const {reviewsList} = this.props
    if (activeReviewIndex < reviewsList.length - 1) {
      this.setState(prevState => ({
        activeReviewIndex: prevState.activeReviewIndex + 1,
      }))
    }
  }

  onClickLeftArrow = () => {
    const {activeReviewIndex} = this.state
    if (activeReviewIndex > 0) {
      this.setState(prevState => ({
        activeReviewIndex: prevState.activeReviewIndex - 1,
      }))
    }
  }

  render() {
    const {reviewsList} = this.props
    const {activeReviewIndex} = this.state
    return (
      <div className="app-container">
        <h1 className="heading">Reviews</h1>
        <div className="carousel-container">
          <button
            type="button"
            data-testId="leftArrow"
            className="arrow"
            onClick={this.onClickLeftArrow}
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
              alt="left arrow"
            />
          </button>
          {this.displayActiveReview(reviewsList[activeReviewIndex])}
          <button
            type="button"
            data-testId="rightArrow"
            className="arrow"
            onClick={this.onClickRightArrow}
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
              alt="right arrow"
            />
          </button>
        </div>
      </div>
    )
  }
}

export default ReviewsCarousel
