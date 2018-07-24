/*eslint no-undef: "error"*/
/*eslint-env node*/
import CalderaProcessors from './CalderaProcessors';
import CalderaProcessorsWithState from './CalderaProcessorsWithState';
import {
  processorsStore,
  CALDERA_FORMS_PROCESSORS_STORE_SLUG
} from './state/processorsStore';

import {
  addProcessor,
  newProcessor,
  removeProcessor,
  setFormForProcessor,
  updateProcessor,
  updateProcessorValues,
  updateProcessorConfigFields,
  setProcessorType
} from "./state/actions";

export default  {
  CalderaProcessors,
  CalderaProcessorsWithState,
  processorsStore,
  CALDERA_FORMS_PROCESSORS_STORE_SLUG,
  actions: {
    addProcessor,
    newProcessor,
    removeProcessor,
    setFormForProcessor,
    updateProcessor,
    updateProcessorValues,
    updateProcessorConfigFields,
    setProcessorType
  }
}