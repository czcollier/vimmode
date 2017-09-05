'use babel';

import VimmodeMessageDialog from './vimmode-message-dialog';

module.exports = {

  activate() {
    inkdrop.components.registerClass(VimmodeMessageDialog);
    inkdrop.layouts.addComponentToLayout('modals', 'VimmodeMessageDialog');
    inkdrop.getActiveEditor().codeMirror.setOption('KeyMap', 'vim');
  },

  deactivate() {
    inkdrop.layouts.removeComponentFromLayout('modals', 'VimmodeMessageDialog');
    inkdrop.components.deleteClass(VimmodeMessageDialog);
  }

};
