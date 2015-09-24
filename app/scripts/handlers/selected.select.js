define([
  'handlers/mouseleave.select'
], function (mouseleave) {
  return function () {
    this.$emit(this.event_name, this.item);
    mouseleave.call(this);
  };
});
