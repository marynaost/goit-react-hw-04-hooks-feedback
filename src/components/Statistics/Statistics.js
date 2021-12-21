import PropTypes from 'prop-types';
import s from './Statistics.module.scss';
function Statistics({ good, neutral, bad, total, positivePercent }) {
  return (
    <ul className={s.item}>
      <li className={s.list}>Good: {good}</li>
      <li className={s.list}>Neutral: {neutral}</li>
      <li className={s.list}>Bad: {bad}</li>
      <li className={s.list}>Total: {total}</li>
      <li className={s.list}>Positive feedback: {positivePercent}%</li>
    </ul>
  );
}

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercent: PropTypes.number.isRequired,
};

export default Statistics;
