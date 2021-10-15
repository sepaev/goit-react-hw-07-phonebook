import PropTypes from 'prop-types';
import Form from '../Form';
import Contacts from '../Contacts';
import { TitleH1, SectionStyle } from './Section.styled';
import { Notify } from 'notiflix';
import css from './Section.module.css';

Notify.init({ position: 'center-top' });

function Section({ title, component }) {
  const sectionClassName = component === 'Form' ? css.form_section : css.contacts_section;
  <TitleH1>{title}</TitleH1>;
  return (
    <SectionStyle className={sectionClassName}>
      <TitleH1>{title}</TitleH1>
      {component === 'Form' && <Form />}
      {component === 'Contacts' && <Contacts />}
    </SectionStyle>
  );
}

export default Section;

Section.propTypes = {
  title: PropTypes.string.isRequired,
  component: PropTypes.string.isRequired,
};
