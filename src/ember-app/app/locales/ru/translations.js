import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/ru/translations';

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
      'spinner-caption': 'Данные загружаются, пожалуйста подождите...'
    },
    index: {
      greeting: 'Добро пожаловать на тестовый стенд ember-flexberry!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Меню'
          },
          'user-settings-service-checkbox': {
            caption: 'Использовать сервис сохранения пользовательских настроек'
          },
          'show-menu': {
            caption: 'Показать меню'
          },
          'hide-menu': {
            caption: 'Скрыть меню'
          },
          'language-dropdown': {
            caption: 'Язык приложения',
            placeholder: 'Выберите язык'
          }
        },
        login: {
          caption: 'Вход'
        },
        logout: {
          caption: 'Выход'
        }
      },

      footer: {
        'application-name': '_probnyjj',
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: '_probnyjj',
          title: '_probnyjj'
        },
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        },
        index: {
          caption: 'Главная',
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
      'save-success-message-caption': 'Сохранение завершилось успешно',
      'save-success-message': 'Объект сохранен',
      'save-error-message-caption': 'Ошибка сохранения',
      'delete-success-message-caption': 'Удаление завершилось успешно',
      'delete-success-message': 'Объект удален',
      'delete-error-message-caption': 'Ошибка удаления'
    },
    'i-i-s-probnyjj-город-l': IIS_probnyjjГородLForm,
    'i-i-s-probnyjj-здание-l': IIS_probnyjjЗданиеLForm,
    'i-i-s-probnyjj-город-e': IIS_probnyjjГородEForm,
    'i-i-s-probnyjj-здание-e': IIS_probnyjjЗданиеEForm
  },

});

export default translations;
