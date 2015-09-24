define([
  'handlers/mouseleave.select'
], function (mouseleave) {
  return function () {
    this.$emit('keyword_scope', this.item);
    mouseleave.call(this);
  };
});
