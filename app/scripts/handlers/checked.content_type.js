define(function () {
  return function () {
    this.item.checked = !this.item.checked;
    this.$emit('lnc.state.content_type', this.item);
  };
});
