# altV-better-notify

Notification System done in React(Typescript) including a Queue System

This Project will be Open-Source because I want to share it so other people can have a Notification System together with an Queue System

It was made by me while i was working on our RP Project nowV.

Design Pattern: Atomic Design Methodology

### Showcase
https://gyazo.com/c34cf70d6393299e0eb3b448f0804c24

### Setup

The project uses yarn as an package-manager

It also includes [stoybook](https://storybook.js.org/docs/react/get-started/introduction) to design/develop the notifications faster.
The state managment for active notifications and queued notifications is made with [mobx-state-tree](https://mobx-state-tree.js.org/intro/welcome)

Installing the modules:
`yarn install` or `yarn`

Build the Project:
`yarn build`

You will find the bundled files inside the `public` folder.

If you want to play arround on the browser with the project, make a copy the `environment.example.ts` file and change the surface string to `browser`

### Usage
You can send a notifications from the server or the client:

client example
```js
alt.emit('notify:sendMessage', {iconType: 0, title: 'notification', message: 'this is a notification send from the client', color: 'F88F01', width: 244, duration: 3000})
```

server example
```js
alt.emitClient('notify:sendMessage', {iconType: 0, title: 'notification', message: 'this is a notification send from the client', color: 'F88F01', width: 244, duration: 3000})
```
### please note: 244 will be the perfect width but you can change it if you want</strong>
### please note: duration has to be in miliseconds</strong>

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

