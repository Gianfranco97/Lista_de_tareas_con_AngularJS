var app = angular.module('ListaDeTareas', []);
            app.controller('ControladorTareas', function($scope){
                $scope.tareas = [];
                $scope.agregarTarea = function(){
                    var fecha = new Date();
                    $scope.tareas.push({Nombre: $scope.formData.nombre , Fecha: fecha , Estado: false });
                    $scope.formData.nombre = '';
                }
                $scope.eliminar = function(){
                    var tareasViejas = $scope.tareas;
                    $scope.tareas = [];
                    angular.forEach(tareasViejas, function(tarea){
                        if(!tarea.Estado){
                            $scope.tareas.push(tarea);
                        }
                    });
                }
                $scope.restantes = function(){
                    var TareasTotales = $scope.tareas.length,
                        TareasFaltantes = TareasTotales;
                    angular.forEach($scope.tareas, function(tarea){
                        if(tarea.Estado){
                            TareasFaltantes--;
                        }
                    });
                    return TareasFaltantes;
                }
            });