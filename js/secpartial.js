var expectObjItems = function(expectedItems, key) {
  element.all(by.repeater(key + ' in objs').column(key + '.name')).then(function(arr) {
    arr.forEach(function(wd, i) {
      expect(wd.getText()).toMatch(expectedItems[i]);
    });
  });
};

it('should search across all fields when filtering with a string', function() {
  var searchText = element(by.model('searchText'));
  searchText.clear();
  searchText.sendKeys('m');
  expectObjItems(['Table', 'Movie', 'Baseball'], 'obj');

  searchText.clear();
  searchText.sendKeys('76');
  expectObjItems(['TV', 'Ax'], 'obj');
});
