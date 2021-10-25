import { environment } from '../constants/environment';

const on = (EventName: string, AFunction: any) => {
  environment.surface === 'AltV'
    ? // @ts-ignore
      alt.on(EventName, AFunction) //eslint-disable-line no-undef
    : holderFunction();
};

const off = (EventName: string, AFunction: any) => {
  environment.surface === 'AltV'
    ? // @ts-ignore
      alt.off(EventName, AFunction) //eslint-disable-line no-undef
    : holderFunction();
};

const emit = (EventName: string, ...Parameters: any[]) => {
  environment.surface === 'AltV'
    ? // @ts-ignore
      alt.emit(EventName, ...Parameters) //eslint-disable-line no-undef
    : holderFunction();
};

const holderFunction = () => {
  console.log(environment.surface);
};

const altVConfig = {
  on,
  off,
  emit,
};

export default altVConfig;
