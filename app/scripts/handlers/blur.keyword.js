define(function () {
  return function () {
    if (!$.trim(this.state.keyword)) {
      this.flags.active = false;
    }
  };
});
