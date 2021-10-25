import React from 'react';
import { MobXProviderContext } from 'mobx-react';

export function useStore() {
  return React.useContext(MobXProviderContext).store;
}
