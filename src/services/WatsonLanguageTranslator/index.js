import axios from 'axios';
import { URL } from './credentials';

const getTranslationPortugueseToEnglish = text => {
  axios({
    method: 'post',
    url: `${URL}/v3/translate?version=2018-05-01`,
    data: {
      text,
      model_id: 'pt-en',
    },
    headers: {
      'Content-Type': 'application/json',
    },
  });
};

export default getTranslationPortugueseToEnglish;
