# altV-better-notify

This Project will be Open-Source because I want to share it so other people can have a Notification System together with an Queue System

It was made by me while i was working on our RP Project nowV.

### Setup

The project uses yarn as an package-manager

It also includes [stoybook](https://storybook.js.org/docs/react/get-started/introduction) to design/develop the notifications faster.
The state managment for active notifications and queued notifications is made with [mobx-state-tree](https://mobx-state-tree.js.org/intro/welcome)

Installing the modules:
`yarn install` or `yarn`

Build the Project:
`yarn build`

You will find the bundled files inside the `public` folder.

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

Notification Color Types:

| Name   |      Color      
|----------|:-------------:
| Orange |  #F88F01 
| Green |    #03A65A   
| Red | #FC2E20 

You can add own color by passing your own HEX color.
Dont pass them with the hash sign

Notification Icon Types:

| Name   |      Number      
|----------|:-------------:
| Fail |  0 
| Success |    1   
| Warning | 2 

You can add more Notification-Icon-Types at your own inside the Project folder under:
```src/assets/```

Add them inside: ```src/components/atoms/Icon``` inside the index.tsx file to the array at [Line-16](https://github.com/LorianAtashi01/altV-better-notify/blob/4e0d34458595667524a940a1845ea27ff19d2037/src/components/atoms/Icons/index.tsx#L16)

Visual Icons:

<svg width="78" height="78" viewBox="0 0 78 78" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M47.8057 67.6794C48.1346 67.4706 48.4935 67.3124 48.8667 67.2006C63.012 62.9621 73.3202 49.8448 73.3202 34.32C73.3202 15.3656 57.9546 0 39.0002 0C20.0458 0 4.68018 15.3656 4.68018 34.32C4.68018 47.8227 12.478 59.5042 23.816 65.1068C23.8288 65.1132 23.8236 65.1326 23.8093 65.1315C23.8002 65.1308 23.7932 65.1396 23.796 65.1483L26.904 74.9903C27.6949 77.4949 30.644 78.5705 32.8616 77.1631L47.8057 67.6794Z" fill="#AF2D2D"/>
<path d="M48.8137 27.6379C49.6421 26.8095 49.6421 25.4664 48.8137 24.638L48.3622 24.1865C47.5338 23.3581 46.1907 23.3581 45.3623 24.1865L39.0002 30.5486L32.6381 24.1865C31.8097 23.3581 30.4666 23.3581 29.6382 24.1865L29.1867 24.638C28.3583 25.4664 28.3583 26.8095 29.1867 27.6379L35.5488 34L29.1867 40.362C28.3583 41.1904 28.3583 42.5336 29.1867 43.362L29.6382 43.8134C30.4666 44.6419 31.8097 44.6419 32.6381 43.8134L39.0002 37.4514L45.3623 43.8134C46.1907 44.6418 47.5338 44.6419 48.3622 43.8134L48.8137 43.362C49.6421 42.5336 49.6421 41.1904 48.8137 40.362L42.4516 34L48.8137 27.6379Z" fill="white"/>
</svg>
