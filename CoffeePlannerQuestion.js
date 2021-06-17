import QuestionOption from '../QuestionOption'
import './index.css'

const CoffeePlannerQuestion = props => {
  const {questionData, getSelectOption, updateUserSelectOption} = props
  const {questionTitle, optionsData, questionType} = questionData
  const userSelectedOptions = getSelectOption(questionType)

  return (
    <li className="question-type-container">
      <h1 className="question-type-heading">{questionTitle}</h1>
      <ul className="coffee-select-container">
        {optionsData.map(questionOption => (
          <QuestionOption
            key={questionOption.id}
            optionsData={questionOption}
            questionType={questionType}
            userSelectedOptions={userSelectedOptions}
            updateUserSelectOption={updateUserSelectOption}
          />
        ))}
      </ul>
    </li>
  )
}

export default CoffeePlannerQuestion
