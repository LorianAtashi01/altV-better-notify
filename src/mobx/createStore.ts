import { types } from 'mobx-state-tree';

import { Item } from './entities/item/item';

export function createStore() {
  const Store = types
    .model('Store', {
      active: types.optional(types.array(Item), []),
      queue: types.optional(types.array(Item), []),
    })
    .actions((self) => ({
      pushActive(data: any) {
        self.active.push(data);
      },
      pushQueue(data: any) {
        self.queue.push(data);
      },
      removeActive(id: number) {
        //@ts-ignore
        self.active = self.active.filter((e: any) => e.id !== id);
      },
      getShiftedQueue() {
        let pushItem = self.queue.shift();
        return JSON.stringify(pushItem);
      },
    }));

  const store = Store.create({
    active: [],
    queue: [],
  });

  return store;
}
