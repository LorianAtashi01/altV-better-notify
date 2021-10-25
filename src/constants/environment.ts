export const environment = {
  /*
   *   surface will handle the function: on() & emit()
   *   if sufrace has the value "AltV" it will set the functions to altV events
   *   if surface has the value "Web" it will set the functions to normal JS/TS functions
   *   this handled like that because of not letting the console cry about "alt.on & alt.emit are not functions"
   */
  surface: 'Browser', // surface will handle the functions on() & emit() if they should be an altV event or a normal function
};
