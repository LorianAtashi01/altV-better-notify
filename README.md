# altV-better-notify

This Project will be Open-Source because I want to share it so other people can have a Notification System together with an Queue System

It was made by me while i was working on our RP Project nowV.

### Setup

The project uses yarn as an package-manager

It also includes [stoybook](https://storybook.js.org/docs/react/get-started/introduction) to design/develop the notifications faster.
The state managment for active notifications and queued notifications is made with [mobx-state-tree](https://mobx-state-tree.js.org/intro/welcome)

`yarn install` or `yarn` to install node_modules


### Usage
You can send a notifications from the server or the client:

client example
```js
alt.emit('notify:sendMessage', {iconType: 0, title: 'notification', message: 'this is a notification send from the client', color: 'F88F01', width: 0})
```

server example
```js
alt.emitClient('notify:sendMessage', {iconType: 0, title: 'notification', message: 'this is a notification send from the client', color: 'F88F01', width: 0})
```
