'use strict';

const assert = require('assert');
const processNote = require('../../../../src/services/note/hooks/process-note.js');

describe('note processNote hook', function() {
  it('hook can be used', function() {
    const mockHook = {
      type: 'before',
      app: {},
      params: {},
      result: {},
      data: {}
    };

    processNote()(mockHook);

    assert.ok(mockHook.processNote);
  });
});
