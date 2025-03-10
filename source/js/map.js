
function init() {
    let map = new ymaps.Map('map', {
        center: [55.713295434756574,37.51002380151365],
        margin: [130, 130, 130, 130],
        zoom: 11,
        behaviors: ['multiTouch', 'drag', 'scrollZoom']
    });

    let placemark = new ymaps.Placemark([55.751481, 37.592219], {}, {
        iconLayout: 'default#image',
        iconImageHref: './images/placemark.png',
        iconImageSize: [57, 57],
        iconImageOffset: [-40, -40]
    });

    map.controls.remove('geolocationControl'); // удаляем геолокацию
    map.controls.remove('searchControl'); //удаляем поиск
    map.controls.remove('trafficControl'); // удаляем контроль трафика
    map.controls.remove('typeSelector'); // удаляем тип
    map.controls.remove('fullscreenControl'); // удаляем кнопку перехода в полноэкранный режим
    map.controls.remove('zoomControl'); // удаляем контрол зуммирования
    map.controls.remove('rulerControl'); // удаляем контрол правил  
    map.controls.remove('routeEditor');

    map.geoObjects.add(placemark);

    if (/iPhone|iPad|iPod|Android/i.test(navigator.userAgent)) {
        map.behaviors.disable('drag');
        map.behaviors.enable('multiTouch'); 
    }
}

ymaps.ready(init);