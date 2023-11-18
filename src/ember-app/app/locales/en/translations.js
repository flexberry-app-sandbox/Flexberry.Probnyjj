import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/en/translations';

import IIS_probnyjjГородLForm from './forms/i-i-s-probnyjj-город-l';
import IIS_probnyjjЗданиеLForm from './forms/i-i-s-probnyjj-здание-l';
import IIS_probnyjjГородEForm from './forms/i-i-s-probnyjj-город-e';
import IIS_probnyjjЗданиеEForm from './forms/i-i-s-probnyjj-здание-e';
import IIS_probnyjjГородModel from './models/i-i-s-probnyjj-город';
import IIS_probnyjjЗданиеModel from './models/i-i-s-probnyjj-здание';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-probnyjj-город': IIS_probnyjjГородModel,
    'i-i-s-probnyjj-здание': IIS_probnyjjЗданиеModel
  },

  'application-name': '_probnyjj',

  forms: {
    loading: {
      'spinner-caption': 'Loading stuff, please wait for a moment...'
    },
    index: {
      greeting: 'Welcome to ember-flexberry test stand!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Menu'
          },
          'user-settings-service-checkbox': {
            caption: 'Use service to save user settings'
          },
          'show-menu': {
            caption: 'Show menu'
          },
          'hide-menu': {
            caption: 'Hide menu'
          },
          'language-dropdown': {
            caption: 'Application language',
            placeholder: 'Choose language'
          }
        },
        login: {
          caption: 'Login'
        },
        logout: {
          caption: 'Logout'
        }
      },

      footer: {
        'application-name': '_probnyjj',
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: '_probnyjj',
          title: '_probnyjj'
        },
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        },
        index: {
          caption: 'Home',
          title: ''
        },
        probnyjj: {
          caption: '_probnyjj',
          title: '_probnyjj',
          'i-i-s-probnyjj-город-l': {
            caption: 'Город',
            title: ''
          },
          'i-i-s-probnyjj-здание-l': {
            caption: 'Здание',
            title: ''
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Save operation succeed',
      'save-success-message': 'Object saved',
      'save-error-message-caption': 'Save operation failed',
      'delete-success-message-caption': 'Delete operation succeed',
      'delete-success-message': 'Object deleted',
      'delete-error-message-caption': 'Delete operation failed'
    },
    'i-i-s-probnyjj-город-l': IIS_probnyjjГородLForm,
    'i-i-s-probnyjj-здание-l': IIS_probnyjjЗданиеLForm,
    'i-i-s-probnyjj-город-e': IIS_probnyjjГородEForm,
    'i-i-s-probnyjj-здание-e': IIS_probnyjjЗданиеEForm
  },

});

export default translations;
