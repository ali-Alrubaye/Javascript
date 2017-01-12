var EmApp = EmApp || {};

EmApp.Emp = [{ name: 'Ali' }, { name: 'Aveen' }, { name: 'Bo' }, { name: 'Dj' }, { name: 'Bakr' }, { name: 'Tom' }];
var result = '';
$('button#Emp').on('click', function () {
    $.each(EmApp.Emp, function (key, value) {
        result += value.name + '<br>';
        $('div#divEmp').html(result);
    });
});

EmApp.Car = [{ bil: 'BMW' }, { bil: 'Toyota' }, { bil: 'Mercedes' }, { bil: 'Nissan' }, { bil: 'Kia' }, { bil: 'Mazda' }];

var c = '';
$('button#car').on('click', function () {
    $.each(EmApp.Car, function (key, value) {
        c += value.bil + '<br>';
        $('div#car').html(c)
    })
})