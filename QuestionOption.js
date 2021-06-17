import './index.css'

const QuestionOption = props => {
  const {
    optionsData,
    updateUserSelectOption,
    userSelectedOptions,
    questionType,
  } = props
  const {optionTitle, description} = optionsData

  const optionSelected = () => {
    updateUserSelectOption(questionType, optionTitle)
  }

  const isOptionSelected = optionTitle === userSelectedOptions
  const selectedOptionButtonClassName = isOptionSelected
    ? 'question-option select'
    : 'question-option'

  const selectedOptionHeadingClassName = isOptionSelected
    ? 'option-heading selectHeading'
    : 'option-heading'

  const selectedOptionParaClassName = isOptionSelected
    ? 'option-description selectHeading'
    : 'option-description'

  const SelectedImageURL = isOptionSelected ? (
    <img
      className="cup-image"
      src="https://assets.ccbp.in/frontend/react-js/coffee-planner-white-cup-img.png"
      alt="white cup"
    />
  ) : (
    <img
      className="cup-image"
      src="https://assets.ccbp.in/frontend/react-js/coffee-planner-blue-cup-img.png"
      alt="blue cup"
    />
  )

  return (
    <li className="option-list-container">
      <div>
        <button
          className={selectedOptionButtonClassName}
          type="button"
          onClick={optionSelected}
        >
          <span className={selectedOptionHeadingClassName}>{optionTitle}</span>
          {SelectedImageURL}
          <span className={selectedOptionParaClassName}>{description}</span>
        </button>
      </div>
    </li>
  )
}

export default QuestionOption
