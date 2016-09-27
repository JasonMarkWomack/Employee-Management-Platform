var expectObjItems = function(expectedItems, key) { //params
  element.all(by.repeater(key + ' in objs').column(key + '.name')).then(function(arr) {
    arr.forEach(function(wd, i) { ///params
      expect(wd.getText()).toMatch(expectedItems[i]);
    });
  });
};

it('should search across all fields when filtering with a string', function() {
  var searchText = element(by.model('searchText'));
  searchText.clear();
  searchText.sendKeys('y');
  expectObjItems(['Will', 'Tina', 'Mary'], 'obj');

  searchText.clear();
  searchText.sendKeys('1');
  expectObjItems(['Bonny', 'Al'], 'obj');
});
