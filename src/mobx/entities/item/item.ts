import { types } from 'mobx-state-tree';

export const Item = types.model('Item', {
  id: types.number,
  iconType: types.number,
  title: types.string,
  message: types.string,
  color: types.string,
  width: types.number,
});
