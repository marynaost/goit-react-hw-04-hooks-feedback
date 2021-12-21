import s from './Section.module.scss';
import PropTypes from 'prop-types';

function Section({ title, children }) {
  return (
    <section className={s.section}>
      {title && <h2>{title}</h2>}
      {children}
    </section>
  );
}

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.any,
};

export default Section;
