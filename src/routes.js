import React from 'react'
import {Route, IndexRoute} from 'react-router'
import App from './App'
import SimpleForm from './components/forms/SimpleForm'
import AutoCompleteForm from './components/forms/AutoCompleteForm';
import InitializationFormContainer from './components/forms/Initialization/InitializationFormContainer'
import CustomEventsForm from './components/forms/CustomEventsForm'
import FieldSync from './components/forms/FieldSync'
import ReducerForm from './components/forms/ReducerForm'
import ValidationForm from './components/forms/ValidationForm'
import AsyncValidationForm from './components/forms/AsyncValidationForm'
import FieldArrayForm from './components/forms/FieldArrayForm'
import Selectors from './components/forms/Selectors'
import Actions from './components/forms/Actions'

const routes = (
  <Route path='/' component={App}>
    <IndexRoute component={SimpleForm} />
    <Route path='autocomplete' component={AutoCompleteForm} />
    <Route path='initialization' component={InitializationFormContainer} />
    <Route path='custom-events' component={CustomEventsForm} />
    <Route path='field-sync' component={FieldSync} />
    <Route path='reducer' component={ReducerForm} />
    <Route path='validation' component={ValidationForm} />
    <Route path='async-validation' component={AsyncValidationForm} />
    <Route path='field-array' component={FieldArrayForm} />
    <Route path='selectors' component={Selectors} />
    <Route path='actions' component={Actions} />
  </Route>
)

export default routes
