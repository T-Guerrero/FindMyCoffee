import { Fragment, useState, useEffect } from 'react';
import Form from './Form';
import styled from 'styled-components';

const Ratings = (props) => {
  return (
   <Fragment>
     <Form place={props.place} />
   </Fragment>
  )
};

export default Ratings;