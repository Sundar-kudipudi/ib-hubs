import {Component} from 'react'
import CoffeePlannerQuestion from '../CoffeePlannerQuestion'

import './index.css'

class CoffeePlanner extends Component {
  state = {
    showSummary: false,
    selectedCoffeePlan: ['', '', '', '', ''],
  }

  setShowSummary = value => {
    this.setState({showSummary: value})
  }

  updateUserSelectOption = (questionType, userSelectedOptions) => {
    const {selectedCoffeePlan} = this.state
    const {coffeePlannerData} = this.props
    const questionIndex = coffeePlannerData.findIndex(
      coffeePlan => questionType === coffeePlan.questionType,
    )

    const newSelectedCoffeePlan = [...selectedCoffeePlan]
    newSelectedCoffeePlan[questionIndex] = userSelectedOptions
    this.setState({selectedCoffeePlan: [...newSelectedCoffeePlan]})
    this.setShowSummary(false)
  }

  userSelectedOptions = questionType => {
    const {coffeePlannerData} = this.props
    const {selectedCoffeePlan} = this.state
    const questionIndex = coffeePlannerData.findIndex(
      coffeeQuestion => questionType === coffeeQuestion.questionType,
    )
    return selectedCoffeePlan[questionIndex]
  }

  showSummary = value => {
    this.setState({showSummary: value})
  }

  isAllOptionsSelected = () => {
    const {selectedCoffeePlan} = this.state

    return selectedCoffeePlan.filter(plan => plan === '').length === 0
  }

  createMyPlan = () => {
    this.setShowSummary(true)
  }

  getSummary = () => {
    const {selectedCoffeePlan, showSummary} = this.state
    if (showSummary) {
      return (
        <div className="summary-container">
          {this.isAllOptionsSelected() ? (
            <p className="summary">
              I Drink my coffee as
              <span className="selected-value"> {selectedCoffeePlan[0]}</span>,
              with a
              <span className="selected-value"> {selectedCoffeePlan[1]} </span>
              type of bean.
              <span className="selected-value"> {selectedCoffeePlan[2]} </span>
              of{' '}
              <span className="selected-value">
                {' '}
                {selectedCoffeePlan[3]}
              </span>{' '}
              ground, sent to me
              <span className="selected-value"> {selectedCoffeePlan[4]}</span>.
            </p>
          ) : (
            <div className="summary-container">
              <p className="summary">
                Kindly select options for all the questions.
              </p>
            </div>
          )}
        </div>
      )
    }
    return null
  }

  render() {
    const {coffeePlannerData} = this.props

    return (
      <div className="main-container">
        <div className="banner-container">
          <div className="banner-description-container">
            <h1 className="banner-heading">Create a Plan</h1>
            <p className="banner-description">
              We offer an assortment of the best artesian coffees from the globe
              delivered fresh to the door create your plan with this
            </p>
          </div>
        </div>
        <div className="questions-container">
          <ul className="coffee-option-container">
            {coffeePlannerData.map(coffeeQuestion => (
              <CoffeePlannerQuestion
                getSelectOption={this.userSelectedOptions}
                key={coffeeQuestion.id}
                questionData={coffeeQuestion}
                updateUserSelectOption={this.updateUserSelectOption}
              />
            ))}
          </ul>
        </div>
        <div className="button-container">
          <button
            className="create-plan-button"
            type="button"
            onClick={this.createMyPlan}
          >
            Create my plan
          </button>
        </div>
        {this.getSummary()}
      </div>
    )
  }
}

export default CoffeePlanner
