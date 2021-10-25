import { types } from 'mobx-state-tree';

import { Active } from './entities/active/active';
import { Queue } from './entities/queue/queue';

export function createStore() {
  const Store = types
    .model('Store', {
      active: types.optional(types.array(Queue), []),
      queue: types.optional(types.array(Queue), []),
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
