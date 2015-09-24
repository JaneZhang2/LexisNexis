define([
  'handlers/mouseleave.select'
], function (mouseleave) {
  return function () {
    this.$emit(this.id, this.item);
    mouseleave.call(this);
  };
});
