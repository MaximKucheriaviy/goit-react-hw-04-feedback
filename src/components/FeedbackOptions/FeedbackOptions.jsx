import PropTypes from "prop-types";
import { ButtonList } from "./FeedbackOptions.styled"


export const FeedbackOptions = ({onLeaveFeedback, options}) => {
    return(
        <ButtonList>
            {options.map(item => 
            <li key={item}>
                <button type="button" onClick={() => {onLeaveFeedback(item)}} style={{textTransform: "capitalize"}}>{item}</button>
            </li>)}
        </ButtonList>
    )
}


FeedbackOptions.propTypes = {
    onLeaveFeedback: PropTypes.func,
    options: PropTypes.arrayOf(PropTypes.string)
}