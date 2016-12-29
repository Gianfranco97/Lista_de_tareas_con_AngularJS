function ControladorTareas($scope){
    $scope.tareas = [{Nombre: 'Hacer esta vaina bien' , Fecha: '28/12/2016' , Estado: false}];
    $scope.agregarTarea = function(){
        $scope.tareas.push({Nombre: $scope.nombre , Fecha: $scope.fecha , Estado: false });
        $scope.nombre = '';
        $scope.fecha = '';
    }
}
