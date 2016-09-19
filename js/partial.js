
var expectObjItems = function(expectedItems, key) {
  // select an element or elemnts from repeater
  element.all(by.repeater(key + ' in objs').column(key + '.name')).then(function(arr) {
    arr.forEach(function(wd, i) { //params
      expect(wd.getText()).toMatch(expectedItems[i]);
    });
  });
};

it('should search across all fields when filtering with a string', function() {
  //The it(...) function defines a test case .


  var searchText = element(by.model('searchText')); //will be found in html
  searchText.clear();
  searchText.sendKeys('x');
  expectObjItems(['Desk', 'CD', 'CoffePot'], 'obj');

  searchText.clear();
  searchText.sendKeys('0');
  expectObjItems(['Book', 'ToolBox'], 'obj');
});
