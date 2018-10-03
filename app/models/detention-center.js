/* eslint camelcase: [2, {properties: "never"}] */
import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import ValidationEngine from 'ghost-admin/mixins/validation-engine';
//import {inject as service} from '@ember/service';

export default Model.extend(ValidationEngine,{
    validationType: 'detention-center',
    _id: attr('string'),
    name: attr('string')
});
