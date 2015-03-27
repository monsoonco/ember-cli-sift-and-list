module.exports = {
  description: 'Sift and List Component',
  afterInstall: function(options) {
    return this.addBowerPackageToProject('sifter');
    // Perform extra work here.
  }
};
