import React, { useEffect, useState } from 'react';
import * as WebFont from 'webfontloader';
import altVConfig from './utils/altconfig';
import { observer } from 'mobx-react';
import { useStore } from './mobx/useStores';
import './App.css';

import Notify from './components/organisms/Notify';
import { environment } from './constants/environment';

const App = observer(() => {
  const store = useStore();

  const handleClick = () => {
    let notification = {
      iconType: 0,
      title: 'notification.title',
      message: 'notification.message',
      color: '03A65A',
      width: 244,
      duration: 3000,
    };

    showNotifications(notification);
  };

  const timeoutNotification = async (notification: any) => {
    store.pushActive(notification);
    setTimeout(() => {
      store.removeActive(notification.id);
      if (store.queue.length > 0 && store.active.length < 4) {
        timeoutNotification(JSON.parse(store.getShiftedQueue()));
      }
    }, notification.duration);
  };

  const showNotifications = async (notification: any) => {
    notification = {
      id: notification.id,
      iconType: notification.iconType,
      title: notification.title,
      message: notification.message,
      color: notification.color,
      width: notification.width,
      duration: 3000,
    };

    if (store.active.length > 3) {
      store.pushQueue(notification);
    } else {
      timeoutNotification(notification);
    }
  };

  useEffect(() => {
    //Load the fonts
    WebFont.load({
      google: {
        families: ['Poppins'],
      },
    });

    if (!('alt' in window)) return;
    altVConfig.on('notify:ShowNotification', showNotifications);

    return () => {
      return altVConfig.off('notify:ShowNotification', showNotifications);
    };
  }, []);

  return (
    <div className='App'>
      {environment.surface !== 'AltV' ? (
        <button onClick={handleClick}>klick mich</button>
      ) : null}
      {store.active.map((notification: any) => {
        return (
          <Notify
            key={notification.id}
            iconType={notification.iconType}
            title={notification.title}
            message={notification.message}
            color={notification.color}
            width={notification.width}
          />
        );
      })}
    </div>
  );
});

export default App;
