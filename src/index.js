import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import {RenderGroup} from "@caldera-labs/components";

/**
 * Testing components
 */
let selectFieldValue = 'html';
const selectFieldConfig = {
  'id': 'cf-something-select-id',
  'type': 'file',
  'label': 'Content type',
  'description': 'Choose content type, default is HTML',
  options: [
    {
      label: 'HTML',
      value: 'html'
    },
    {
      label: 'Plain Text',
      value: 'plain'
    }
  ],
  value: selectFieldValue,
  onValueChange: function(newValue){
    selectFieldValue = newValue
  }
};

const configFields = [
  selectFieldConfig
];

ReactDOM.render(
  <RenderGroup
    configFields={configFields}
    onBlur={(fI) => {console.log(fI)}}
  />,
  document.getElementById('root')
);

