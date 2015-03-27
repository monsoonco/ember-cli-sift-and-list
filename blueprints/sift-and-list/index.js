module.exports = {
  normalizeEntityName: function() {},
  afterInstall: function(options) {
    return this.addBowerPackageToProject('sifter');
    // Perform extra work here.
  }
};
