const lodash = require('./lodash.js')

exports.activate = function() {
    // Do work when the extension is activated
}

exports.deactivate = function() {
    // Clean up state before the extension is deactivated
}


nova.commands.register("case-transformation.snakeCase", (editor) => {
  result = lodash.snakeCase(editor.selectedText);
  editor.edit((textEdit) => {
    textEdit.replace(editor.selectedRange, result);
  });
});


nova.commands.register("case-transformation.camelCase", (editor) => {
  result = lodash.camelCase(editor.selectedText);
  editor.edit((textEdit) => {
    textEdit.replace(editor.selectedRange, result);
  });
});

nova.commands.register("case-transformation.kebabCase", (editor) => {
  result = lodash.kebabCase(editor.selectedText);
  editor.edit((textEdit) => {
    textEdit.replace(editor.selectedRange, result);
  });
});