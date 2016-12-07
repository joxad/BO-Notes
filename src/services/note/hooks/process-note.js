'use strict';

// src/services/note/hooks/process-note.js
//
// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/hooks/readme.html

const defaults = {};

module.exports = function(options) {
  options = Object.assign({}, defaults, options);

  return function(hook) {
    hook.processNote = true;
    // The authenticated user
    const user = hook.params.user;
    const title = hook.data.title;
    const content = hook.data.content;
    hook.data = {
      title : title,
      content :  content,
      createdAt: new Date().getTime()
    };
  };

};
