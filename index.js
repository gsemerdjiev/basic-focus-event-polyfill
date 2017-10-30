(function() {
  // critically in Phantom JS it is an object so can't be used as a constructor.
  if (typeof FocusEvent !== 'function') {
    window.FocusEvent = function(eventType, init) {
      
      var focusEvent = document.createEvent('Event');
      focusEvent.initUIEvent(
        eventType,
        false,
        false,
        window,
        init.detail
      );
      focusEvent.key = init.key;

      return focusEvent;
    }
  }
})();
