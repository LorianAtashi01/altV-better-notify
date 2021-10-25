import { types } from 'mobx-state-tree';

export const Active = types.model('Active', {
  id: types.number,
  iconType: types.number,
  title: types.string,
  message: types.string,
  color: types.string,
  width: types.number,
});
