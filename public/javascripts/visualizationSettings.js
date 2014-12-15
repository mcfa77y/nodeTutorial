var app = app||angular.module('sequenceBundleApp', []);
app.controller('vsCtrl', ['$scope', function($scope) {
  $scope.settings = [
    { key: "DATA FORMAT",
     attributes: [
       { key: "Amino Acids", value: true, type: "checkbox"},
       { key: "DNA", value: false, type: "checkbox"},
       { key: "RNA", value: false, type: "checkbox"}] },

    { key: "Y-AXIS SETTINGS",
     attributes: [
       { key: "ORGANIZE RESIDUES IN LEDGEND BY THEIR: ", value: ['Hydrophobicity', 'Alphabetical', 'Thermal stability', 'Molecular weight', 'Default'], type: "selection"} ] },

    { key: "GAPS",
     attributes: [
       { key: "RENDERING: ", value: ["CONTOUR", "DISCONNECTED"], type: "selection"} ] },

    { key: "GRID SETTINGS",
     attributes: [
       { key: "COLUMN WIDTH IS", value: 80, type: "number"},
       { key: "ROW HEIGHT IS", value: 30, type: "number"},
       { key: "SHOW VERTICAL GRID LINES", value: true, type: "checkbox"},
       { key: "SHOW ROW SHADING", value: true, type: "checkbox"} ] },


    { key:"BUNDLE SETTINGS",
     attributes: [
       { key: "HEIGHT OF BUNDLES", value: 20, type: "number"},
       { key: "RESIDUE COLUMN WIDTH PERCENT", value: 60, type: "number"},
       { key: "RADIUS CURVE", value: 10, type: "number"},
       { key: "HIDE RESIDUES CONSERVED LESS THAN", value: 0, type: "number"},
       { key: "LINE COLOR", value: ["NAVY BLUE", "MARINE PINK", "ARMY GREEN"], type: "selection"}
     ] },


    { key: "CONSENSUS",
     attributes: [
       { key: "SHOW CONSENSUS SEQUENCE", value: true, type: "checkbox"} ] }];

  $scope.isSelection = function(foo) {
    return foo.type.indexOf('selection')>=0;
  };

}]);




