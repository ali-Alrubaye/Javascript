
var EmApp = EmApp || {};

EmApp.Emp = [{ name: 'Ali', car: true }, { name: 'Aveen', car: true }, { name: 'Bo', car: false }, { name: 'Dj', car: false }, { name: 'Bakr', car: false }, { name: 'Tom', car: true}];

EmApp.Car = [{ bil: 'BMW' }, { bil: 'Toyota' }, { bil: 'Mercedes' }, { bil: 'Nissan' }, { bil: 'Kia' }, { bil: 'Mazda' }];

var c = '';
$('button#btncar').on('click', function () {
    $.each(EmApp.Car, function (key, value) {
        c += value.bil + '<br>';
        $('div#car').html(c);
    });
});

$(document).ready(function () {
    'use strict';
    var bool = false;
    var c = '';
    $('button#btnEmp').on('click', function () {
        $.each(EmApp.Emp, function (key, value) {
            
            if (value.car) {
                c += value.name + '<br>';
                bool = true;
            }
        });
            doWork(bool).then(function () {
                $('div#divEmp').html(c);
            }, function () {
                //alert("Totally unawesome ... Inside Fail method");
            }).always(function () {
                alert("bearbetning klar!");
            });
          
       
    });
});

function doWork(bool) {
    var dfd = $.Deferred();
    if (bool) {
        
        dfd.resolve();
    } else {
        
        dfd.reject();
    }
    return dfd.promise();
}