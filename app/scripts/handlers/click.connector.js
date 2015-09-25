define(function () {
  return function () {
    this.$emit(this.name, this.value);
  };
});
