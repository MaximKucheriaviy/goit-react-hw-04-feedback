import PropTypes from "prop-types";


export const Statistics = ({good, neutral, bad, total, positivePercentage}) => {
    return(
    <ul>
        <li>
            <p>Good: <span>{good}</span></p>
        </li>
        <li>
            <p>Neutral: <span>{neutral}</span></p>
        </li>
        <li>
            <p>Bad: <span>{bad}</span></p>
        </li>
        <li>
            <p>Total: <span>{total}</span></p>
        </li>
        <li>
            <p>Positive feedback: <span>{positivePercentage}%</span></p>
        </li>
    </ul>
    )
}


Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positivePercentage: PropTypes.number.isRequired,
}