/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { connect } from 'react-redux';
import InputField from './InputField';
import {
  toggleAggr, changeDegree, changeYear,
  changeGuid, changeEmail, changeName,
}
  from '../reducers/recruitFormReducer';

import '../sass/components/RecruitForm.scss';

const RecruitForm = (props) => {
  const { form } = props;
  const handleSubmit = (e) => {
    e.preventDefault();
    // send the application form
  };

  return (
    <form className="recruit-form" onSubmit={handleSubmit}>
      <InputField
        name="name"
        label="Name"
        type="text"
        value={form.name}
        onChange={props.changeName}
        id="rname"
      />
      <InputField
        name="guid"
        label="GUID"
        type="text"
        value={form.guid}
        onChange={props.changeGuid}
        id="rguid"
      />
      <div className="flex-break" />
      <InputField
        name="email"
        label="Email"
        type="text"
        value={form.email}
        onChange={props.changeEmail}
        id="remail"
      />
      <div className="flex-break" />
      <InputField
        name="degree"
        label="Degree"
        type="text"
        value={form.degree}
        onChange={props.changeDegree}
        id="rdegree"
      />
      <InputField
        name="year_study"
        label="Year of study"
        type="number"
        value={form.year}
        onChange={props.changeYear}
        id="ryos"
      />
      <div className="flex-break" />
      <input type="submit" value="Send" />

    </form>
  );
};

const mapStateToProps = (state) => ({
  form: state.recruitForm,
});

const mapDispatchToProps = {
  toggleAggr,
  changeDegree,
  changeYear,
  changeGuid,
  changeEmail,
  changeName,
};

export default connect(mapStateToProps, mapDispatchToProps)(RecruitForm);
