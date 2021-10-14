import PropTypes from 'prop-types';
import Form from '../Form';
import Contacts from '../Contacts';
import { TitleH1, SectionStyle } from './Section.styled';
import { Notify } from 'notiflix';

Notify.init({ position: 'center-top' });

function Section({ title, component, doAddContact }) {
  return (
    <SectionStyle>
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
