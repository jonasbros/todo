import { repository } from '~/repository/Repository.js';

export default ({ store }, inject) => {
  inject('repository', repository(store));
};
