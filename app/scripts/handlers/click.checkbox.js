define(function () {
  return function () {
    var item = this.item;

    item.checked = !item.checked;
    this.$emit(this.id, item);
  };
});
