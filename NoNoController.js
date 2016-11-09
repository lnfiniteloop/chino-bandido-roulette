var app = angular.module("myApp", []);

app.controller('NoNoController', function($scope) {
  $scope.orderEnabled = false;
  $scope.easyOrder = '';

  $scope.noOpts = [{
    'meat': 'Carnitas',
    'desc': 'mild, slow-cooked shredded pork sauteed with onion, tomato and cilantro.',
    'id': '1'
  }, {
    'meat': 'Chile Relleno',
    'desc': 'fresh anaheim chile stuffed with two kinds of cheese, crispy breaded exterior.',
    'id': '2'
  }, {
    'meat': 'Chinese BBQ Pork',
    'desc': 'sliced, sweet roast pork.',
    'id': '3'
  }, {
    'meat': 'Egg Foo Yung',
    'desc': 'fresh egg ommelet with bean sprouts, white and green onions, green peas and bar-b-q pork. (vegetarian also available) served with creamy mushroom-chicken gravy.',
    'id': '4'
  }, {
    'meat': 'Gringo Chicken',
    'desc': 'grilled chicken breast with chopped tomatoes, green onions in a butter-garlic sauce',
    'id': '5'
  }, {
    'meat': 'Hengrenade Chicken',
    'desc': 'grilled, skinless chicken with smoky, spicy flavor, milder than jerk chicken.',
    'id': '6'
  }, {
    'meat': 'Jade Red Chicken',
    'desc': 'lightly coated, deep-fried chicken glazed with slightly spicy sweet sauce. different and habit-forming.',
    'id': '7'
  }, {
    'meat': 'Jenred Pork',
    'desc': 'lightly coated, deep-fried pork glazed with slightly spicy sweet sauce.',
    'id': '8'
  }, {
    'meat': 'Jerk Chicken',
    'desc': 'grilled, skinless chicken that has been marinated with seasonings and some of the hottest peppers in the world. spicy peppers, but with no after-effects.',
    'id': '9'
  }, {
    'meat': 'Emerald Chicken',
    'desc': 'tender grilled, skinless chicken breast served with fresh ginger/green onion sauce. for the tenderfoot or the old master.',
    'id': '10'
  }, {
    'meat': 'Teriyaki Chicken',
    'desc': 'grilled, skinless chicken breast basted with our own teriyaki sauce.',
    'id': '11'
  }, {
    'meat': 'Pollo Diablo',
    'desc': 'lightly coated, deep-fried chicken with garlic, onions, and red hot peppers. not for the tenderfoot. if you\'re from iowa, you probably can\'t handle it.',
    'id': '13'
  }, {
    'meat': 'Machaca',
    'desc': 'shredded beef with garlic, onion, tomato and cilantro.',
    'id': '14'
  }];

  $scope.deliveryMs = [
    'Plain',
    'Burrito',
    'Quesadilla'
  ];

  $scope.beans = [
    'Black Beans',
    'Refried Beans'
  ];

  $scope.rices = [
    'Plain Fried Rice',
    'Pork Fried Rice',
    'Chicken Fried Rice',
    'Jerk Fried Rice',
    'White Rice'
  ];

  $scope.noChoices = [];

  $scope.check = function(value) {
    var idx = $scope.noChoices.indexOf(value);

    if (idx > -1) {
      $scope.noChoices.splice(idx, 1);
    } else {
      $scope.noChoices.push(value);
    }

    var meatCount = 0;
    var delCount = 0;
    var beanCount = 0;
    var riceCount = 0;

    for (i = 0; i < $scope.noOpts.length; i++) {
      if ($scope.noChoices.indexOf($scope.noOpts[i].meat) >= 0) {
        meatCount++;
      }
    }

    for (j = 0; j < $scope.deliveryMs.length; j++) {
      if ($scope.noChoices.indexOf($scope.deliveryMs[j]) >= 0) {
        delCount++;
      }
    }

    for (k = 0; k < $scope.beans.length; k++) {
      if ($scope.noChoices.indexOf($scope.beans[k]) >= 0) {
        beanCount++;
      }
    }

    for (l = 0; l < $scope.rices.length; l++) {
      if ($scope.noChoices.indexOf($scope.rices[l]) >= 0) {
        riceCount++;
      }
    }

    if ((meatCount > 3) || (delCount > 2) || (beanCount > 1) || (riceCount > 2)) {
      $scope.orderEnabled = true;
    } else {
      $scope.orderEnabled = false;
    }

  };

  $scope.getOrder = function() {
    
    var rando = 0
    
    do {
      rando = Math.floor(Math.random() * $scope.noOpts.length);
      $scope.meatChoice1 = $scope.noOpts[rando].meat;
      var mc1id = $scope.noOpts[rando].id;
    } while ($scope.noChoices.indexOf($scope.meatChoice1) >= 0)

    do {
      var dc1;
      rando = Math.floor(Math.random() * $scope.deliveryMs.length)
      $scope.deliveryChoice1 = $scope.deliveryMs[rando];
      switch($scope.deliveryChoice1){
        case 'Quesadilla':
          dc1 = 'Q';
          break;
        case 'Burrito':
          dc1 = 'B';
          break;
        default:
          dc1 = '';
          break;
      }
    } while ($scope.noChoices.indexOf($scope.deliveryChoice1) >= 0)

    do {
      rando = Math.floor(Math.random() * $scope.noOpts.length);
      $scope.meatChoice2 = $scope.noOpts[rando].meat;
      var mc2id = $scope.noOpts[rando].id;
    } while (($scope.noChoices.indexOf($scope.meatChoice2) >= 0) || ($scope.meatChoice2 == $scope.meatChoice1))

    do {
      var dc2;
      rando = Math.floor(Math.random() * $scope.deliveryMs.length)
      $scope.deliveryChoice2 = $scope.deliveryMs[Math.floor(rando)];
      switch($scope.deliveryChoice2){
        case 'Quesadilla':
          dc2 = 'Q';
          break;
        case 'Burrito':
          dc2 = 'B';
          break;
        default:
          dc2 = '';
          break;
      }
    } while ($scope.noChoices.indexOf($scope.deliveryChoice2) >= 0)

    do {
      var bc;
      $scope.beansChoice = $scope.beans[Math.floor(Math.random() * $scope.beans.length)];
      switch($scope.beansChoice){
        case 'Black Beans':
          bc = 'BLK';
          break;
        case 'Refried Beans':
          bc = 'REF';
          break;
      }
    } while ($scope.noChoices.indexOf($scope.beansChoice) >= 0)

    do {
      var rc;
      $scope.riceChoice = $scope.rices[Math.floor(Math.random() * $scope.rices.length)];
      switch($scope.riceChoice){
        case 'Plain Fried Rice':
          rc = 'PLFR';
          break;
        case 'Pork Fried Rice':
          rc = 'PKFR';
          break;
        case 'Chicken Fried Rice':
          rc = 'CFR';
          break;
        case 'Jerk Fried Rice':
          rc = 'JKFR';
          break;
        case 'White Rice':
          rc = 'W';
          break;
      }
    } while ($scope.noChoices.indexOf($scope.riceChoice) >= 0)

    if ($scope.deliveryChoice1 == 'Plain') {
      $scope.deliveryChoice1 = '';
    }

    if ($scope.deliveryChoice2 == 'Plain') {
      $scope.deliveryChoice2 = '';
    }

    $scope.easyOrder = '(' + mc1id + dc1  + ' & ' + mc2id + dc2 + ' ' + bc + ' ' + rc + ')';

  };

});