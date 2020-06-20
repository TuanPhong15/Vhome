import * as types from '../types';
import langs from '../../languages/langs';

export const setLanguage = lang => {
  for (let i = 0; i < langs.length; i++) {
    langs[i].default.setLanguage(lang);
  }

  return {
    type: types.SET_LANGUAGE,
    payload: lang,
  };
};
