var platform = new H.service.Platform({
    'apikey': 'Ckm16JPPUpDrdSGXmNJLEtu_Gydb3loB5Dsw5bkhimg'
});

var hasMapLoadedOnce = false;
var showDelivered = true;
var individualParcel = "select";
var icons_obj = {
    "ekart": '../static/assets/images/amazon.png',
    "dhl-global-mail": '../static/assets/images/dhl.png'
};
var response;

function getData() {
    fetch('http://127.0.0.1:8000/api/track-courier')
        .then(res => res.json())
        .then(response => {
            for(var i=0; i<response.length; i++) {
                var icon = new H.map.Icon(icons_obj[response[i].data.tracking.slug])
                addIntoCoordinates(response[i], icon);
            }
        })
        .catch(e => console.log(e));
}
getData();




// var response = {
//     "meta": {
//         "code": 200
//     },
//     "data": {
//         "tracking": {
//             "id": "5dea8dce3d63825a10355e41",
//             "created_at": "2019-12-06T17:20:14+00:00",
//             "updated_at": "2019-12-06T17:20:21+00:00",
//             "last_updated_at": "2019-12-06T17:20:21+00:00",
//             "tracking_number": "FMPC0649433710",
//             "slug": "ekart",
//             "active": false,
//             "android": [],
//             "custom_fields": null,
//             "customer_name": null,
//             "delivery_time": 3,
//             "destination_country_iso3": "IND",
//             "courier_destination_country_iso3": "IND",
//             "emails": [],
//             "expected_delivery": null,
//             "ios": [],
//             "note": null,
//             "order_id": null,
//             "order_id_path": null,
//             "origin_country_iso3": "IND",
//             "shipment_package_count": 1,
//             "shipment_pickup_date": "2019-11-26T13:11:00",
//             "shipment_delivery_date": "2019-11-29T13:11:00",
//             "shipment_type": null,
//             "shipment_weight": null,
//             "shipment_weight_unit": null,
//             "signed_by": "IliyasAttarwala",
//             "smses": [],
//             "source": "web",
//             "tag": "Delivered",
//             "subtag": "Delivered_001",
//             "subtag_message": "Delivered",
//             "title": "FMPC0649433710",
//             "tracked_count": 1,
//             "last_mile_tracking_supported": true,
//             "language": null,
//             "unique_token": "deprecated",
//             "checkpoints": [{
//                 "slug": "ekart",
//                 "city": null,
//                 "created_at": "2019-12-06T17:20:16+00:00",
//                 "location": "New Delhi, India",
//                 "country_name": "India",
//                 "message": "Shipment Created",
//                 "country_iso3": "IND",
//                 "tag": "InfoReceived",
//                 "subtag": "InfoReceived_001",
//                 "subtag_message": "Info Received",
//                 "checkpoint_time": "2019-11-26T18:41:00+05:30",
//                 "coordinates": [],
//                 "state": null,
//                 "zip": null
//             }, {
//                 "slug": "ekart",
//                 "city": null,
//                 "created_at": "2019-12-06T17:20:16+00:00",
//                 "location": "New Delhi, India",
//                 "country_name": "India",
//                 "message": "Dispatched to Bamnoli Sort Centre",
//                 "country_iso3": "IND",
//                 "tag": "InTransit",
//                 "subtag": "InTransit_001",
//                 "subtag_message": "In Transit",
//                 "checkpoint_time": "2019-11-26T18:43:00+05:30",
//                 "coordinates": [],
//                 "state": null,
//                 "zip": null
//             }, {
//                 "slug": "ekart",
//                 "city": null,
//                 "created_at": "2019-12-06T17:20:16+00:00",
//                 "location": "New Delhi, India",
//                 "country_name": "India",
//                 "message": "Pickup From Seller",
//                 "country_iso3": "IND",
//                 "tag": "InTransit",
//                 "subtag": "InTransit_001",
//                 "subtag_message": "In Transit",
//                 "checkpoint_time": "2019-11-27T18:36:00+05:30",
//                 "coordinates": [],
//                 "state": null,
//                 "zip": null
//             }, {
//                 "slug": "ekart",
//                 "city": null,
//                 "created_at": "2019-12-06T17:20:16+00:00",
//                 "location": "New Delhi, India",
//                 "country_name": "India",
//                 "message": "Received at EKL_Bamnoli1",
//                 "country_iso3": "IND",
//                 "tag": "InTransit",
//                 "subtag": "InTransit_001",
//                 "subtag_message": "In Transit",
//                 "checkpoint_time": "2019-11-28T00:00:00+05:30",
//                 "coordinates": [],
//                 "state": null,
//                 "zip": null
//             }, {
//                 "slug": "ekart",
//                 "city": null,
//                 "created_at": "2019-12-06T17:20:16+00:00",
//                 "location": "New Delhi, India",
//                 "country_name": "India",
//                 "message": "Received at Bamnoli Sort Centre",
//                 "country_iso3": "IND",
//                 "tag": "InTransit",
//                 "subtag": "InTransit_001",
//                 "subtag_message": "In Transit",
//                 "checkpoint_time": "2019-11-28T00:00:00+05:30",
//                 "coordinates": [],
//                 "state": null,
//                 "zip": null
//             }, {
//                 "slug": "ekart",
//                 "city": null,
//                 "created_at": "2019-12-06T17:20:16+00:00",
//                 "location": "New Delhi, India",
//                 "country_name": "India",
//                 "message": "Received at Bamnoli Sort Centre",
//                 "country_iso3": "IND",
//                 "tag": "InTransit",
//                 "subtag": "InTransit_001",
//                 "subtag_message": "In Transit",
//                 "checkpoint_time": "2019-11-28T01:25:00+05:30",
//                 "coordinates": [],
//                 "state": null,
//                 "zip": null
//             }, {
//                 "slug": "ekart",
//                 "city": null,
//                 "created_at": "2019-12-06T17:20:16+00:00",
//                 "location": "Kheda, India",
//                 "country_name": "India",
//                 "message": "Dispatched to Motherhub_AHD",
//                 "country_iso3": "IND",
//                 "tag": "InTransit",
//                 "subtag": "InTransit_001",
//                 "subtag_message": "In Transit",
//                 "checkpoint_time": "2019-11-28T05:42:00+05:30",
//                 "coordinates": [],
//                 "state": null,
//                 "zip": null
//             }, {
//                 "slug": "ekart",
//                 "city": null,
//                 "created_at": "2019-12-06T17:20:16+00:00",
//                 "location": "Kheda, India",
//                 "country_name": "India",
//                 "message": "Received at Motherhub_AHD",
//                 "country_iso3": "IND",
//                 "tag": "InTransit",
//                 "subtag": "InTransit_001",
//                 "subtag_message": "In Transit",
//                 "checkpoint_time": "2019-11-29T01:19:00+05:30",
//                 "coordinates": [],
//                 "state": null,
//                 "zip": null
//             }, {
//                 "slug": "ekart",
//                 "city": null,
//                 "created_at": "2019-12-06T17:20:16+00:00",
//                 "location": "Ahmedabad, India",
//                 "country_name": "India",
//                 "message": "Dispatched to CGRoad Hub",
//                 "country_iso3": "IND",
//                 "tag": "InTransit",
//                 "subtag": "InTransit_001",
//                 "subtag_message": "In Transit",
//                 "checkpoint_time": "2019-11-29T03:31:00+05:30",
//                 "coordinates": [],
//                 "state": null,
//                 "zip": null
//             }, {
//                 "slug": "ekart",
//                 "city": null,
//                 "created_at": "2019-12-06T17:20:16+00:00",
//                 "location": "Ahmedabad, India",
//                 "country_name": "India",
//                 "message": "Received at CGRoad Hub",
//                 "country_iso3": "IND",
//                 "tag": "InTransit",
//                 "subtag": "InTransit_001",
//                 "subtag_message": "In Transit",
//                 "checkpoint_time": "2019-11-29T07:19:00+05:30",
//                 "coordinates": [],
//                 "state": null,
//                 "zip": null
//             }, {
//                 "slug": "ekart",
//                 "city": null,
//                 "created_at": "2019-12-06T17:20:16+00:00",
//                 "location": "Ahmedabad, India",
//                 "country_name": "India",
//                 "message": "Out For Delivery",
//                 "country_iso3": "IND",
//                 "tag": "OutForDelivery",
//                 "subtag": "OutForDelivery_001",
//                 "subtag_message": "Out for Delivery",
//                 "checkpoint_time": "2019-11-29T09:31:00+05:30",
//                 "coordinates": [],
//                 "state": null,
//                 "zip": null
//             }, {
//                 "slug": "ekart",
//                 "city": null,
//                 "created_at": "2019-12-06T17:20:16+00:00",
//                 "location": "Ahmedabad, India",
//                 "country_name": "India",
//                 "message": "Delivered",
//                 "country_iso3": "IND",
//                 "tag": "Delivered",
//                 "subtag": "Delivered_001",
//                 "subtag_message": "Delivered",
//                 "checkpoint_time": "2019-11-29T18:41:00+05:30",
//                 "coordinates": [],
//                 "state": null,
//                 "zip": null
//             }],
//             "subscribed_smses": [],
//             "subscribed_emails": [],
//             "return_to_sender": false,
//             "order_promised_delivery_date": null,
//             "delivery_type": null,
//             "pickup_location": null,
//             "pickup_note": null,
//             "tracking_account_number": null,
//             "tracking_origin_country": null,
//             "tracking_destination_country": null,
//             "tracking_key": null,
//             "tracking_postal_code": null,
//             "tracking_ship_date": null,
//             "tracking_state": null
//         }
//     }
// };

var language = "en-US";
var strokeColorArray = ["red", "cyan", "black", "yellow", "green", "blue"];
var ic = new H.map.Icon('../static/assets/images/amazon.png');
var icon_truck = new H.map.Icon('../static/assets/images/truck.png');
var ic2 = new H.map.Icon('../static/assets/images/dhl.png');
var coordinates = [];


// Obtain the default map types from the platform object:
var defaultLayers = platform.createDefaultLayers();

var router = platform.getRoutingService();

var geocoder = platform.getGeocodingService();

// Instantiate (and display) a map object:
var map = new H.Map(
    document.getElementById('mapContainer'),
    defaultLayers.vector.normal.map,
    {
        zoom: 10,
        center: { lat: 28.60, lng: 77.10 }
    }
);

var individualMap = new H.Map(
    document.getElementById('individualMapContainer'),
    defaultLayers.vector.normal.map,
    {
        zoom: 10,
        center: { lat: 28.60, lng: 77.10 }
    }
);

var mapRef = map;
var uiMap = H.ui.UI.createDefault(map, defaultLayers, language), uiIndividualMap;
var uiRef = uiMap;

function updateLanguage({ value }) {
    language = value;
    let defaultLayers = platform.createDefaultLayers({
        lg: language.substring(0,2)
    });
      // Set the normal map variant of the vector map type
    mapRef.setBaseLayer(defaultLayers.vector.normal.map);
    uiRef = H.ui.UI.createDefault(mapRef, defaultLayers, language);
}
updateLanguage({ value: "en-US" });

async function addIntoCoordinates(response, ic) {
    console.log(response);
    var coordinateItem = {
        company: response.data.tracking.slug,
        latlng: [],
        icon: ic,
        group: null
    };
    for(var i=0;i<response.data.tracking.checkpoints.length;i++) {
        var temp = response.data.tracking.checkpoints[i];
        await $.ajax({
            url: 'https://geocoder.api.here.com/6.2/geocode.json',
            type: 'GET',
            dataType: 'jsonp',
            jsonp: 'jsoncallback',
            data: {
              searchtext: response.data.tracking.checkpoints[i].location,
              app_id: 'YOujCWydP6aC6v7ZwN77',
              app_code: 'cIKjyJnRTZdS0yksXOIwYg'
            },
            success: function (data) {
                coordinateItem.latlng.push({
                    lat: data.Response.View[0].Result[0].Location.DisplayPosition.Latitude.toString(),
                    lng: data.Response.View[0].Result[0].Location.DisplayPosition.Longitude.toString(),
                    desc: temp.message,
                    tag: temp.subtag_message,
                    time: timeDifference(Date.now(),Date.parse(temp.checkpoint_time))
                });
            }
        });
    }
    coordinates.push(coordinateItem);
    showAll();
    renderIndividualSelectors(coordinateItem);
}



var mapEvents = new H.mapevents.MapEvents(map);
var mapEventsIndividual = new H.mapevents.MapEvents(individualMap);
map.addEventListener('tap', function(evt) {
    var coord = map.screenToGeo(evt.currentPointer.viewportX,
        evt.currentPointer.viewportY);
    for(var i=0;i< coordinates.length;i++) {
        var contentInBubble = "";
        for(var j=0;j<coordinates[i].latlng.length;j++) {
            if((coordinates[i].latlng[j].lat.substring(0,3) === coord.lat.toString().substring(0,3)) && (coordinates[i].latlng[j].lng.substring(0,3) === coord.lng.toString().substring(0,3))) {
                contentInBubble += "<div class='info-card'><h3>" + coordinates[i].latlng[j].tag + "</h3>" + "<p>" + coordinates[i].latlng[j].desc + "</p><p>" + coordinates[i].latlng[j].time + "</p></div>";
            }
        }
        if(contentInBubble !== "") {
            var bubble = new H.ui.InfoBubble({ lng: coord.lng, lat: coord.lat }, {
                content: contentInBubble
            });
            uiMap.addBubble(bubble);
        }
    }
});

individualMap.addEventListener('tap', function(evt) {
    var coord = individualMap.screenToGeo(evt.currentPointer.viewportX,
        evt.currentPointer.viewportY);
    for(var i=0;i< coordinates.length;i++) {
        var contentInBubble = "";
        for(var j=0;j<coordinates[i].latlng.length;j++) {
            if((coordinates[i].latlng[j].lat.substring(0,3) === coord.lat.toString().substring(0,3)) && (coordinates[i].latlng[j].lng.substring(0,3) === coord.lng.toString().substring(0,3))) {
                contentInBubble += "<div class='info-card'><h3>" + coordinates[i].latlng[j].tag + "</h3>" + "<p>" + coordinates[i].latlng[j].desc + "</p><p>" + coordinates[i].latlng[j].time + "</p></div>";
            }

        }
        if(contentInBubble !== "") {
            var bubble = new H.ui.InfoBubble({ lng: coord.lng, lat: coord.lat }, {
                content: contentInBubble
            });
            uiIndividualMap.addBubble(bubble);
        }
    }
});
window.addEventListener('resize', () => {
    mapRef.getViewPort().resize()
});
var behavior = new H.mapevents.Behavior(mapEvents);
var behaviorIndividual = new H.mapevents.Behavior(mapEventsIndividual);

function renderIndividualSelectors(coord) {
    var option = $("<option></option>");
    $(option).val(coord.company);
    $(option).html(coord.company.toUpperCase());
    $("#individualParcel").append(option);
}

function showOnMap({ value }) {
    if(value === "showIndividual") {
        document.querySelector('#mapContainer').style.display = "none";
        updateMapRoutes({ value: "select" });
        document.querySelector('#individualMapContainer-w').style.display = "block";
        if(!hasMapLoadedOnce) {
            individualMap = new H.Map(
                document.getElementById('individualMapContainer-w'),
                defaultLayers.vector.normal.map,
                {
                    zoom: 10,
                    center: { lat: 28.60, lng: 77.10 }
                }
            );
            hasMapLoadedOnce = true;
            setupIndividualBehaviours();
        }
        mapRef = individualMap;
        uiIndividualMap = H.ui.UI.createDefault(individualMap, defaultLayers, language);
        uiRef = uiIndividualMap;
        updateLanguage({value:language});
        document.querySelector('.individual-parcel').style.display = "block";
    } else {
        mapRef = map;
        uiRef = uiMap;
        updateLanguage({value:language});
        document.querySelector('#individualMapContainer-w').style.display = "none";
        showAll();
        document.querySelector('#mapContainer').style.display = "block";
        document.querySelector('.individual-parcel').style.display = "none";
    }
}

showOnMap({ value: "showAll" });


function setupIndividualBehaviours() {
    var mapEventsIndividual = new H.mapevents.MapEvents(individualMap);
    window.addEventListener('resize', () => {
        individualMap.getViewPort().resize();
    });
    var behaviorIndividual = new H.mapevents.Behavior(mapEventsIndividual);
    individualMap.addEventListener('tap', function(evt) {
        var coord = individualMap.screenToGeo(evt.currentPointer.viewportX,
            evt.currentPointer.viewportY);
        for(var i=0;i< coordinates.length;i++) {
            var contentInBubble = "";
            for(var j=0;j<coordinates[i].latlng.length;j++) {
                if((coordinates[i].latlng[j].lat.substring(0,3) === coord.lat.toString().substring(0,3)) && (coordinates[i].latlng[j].lng.substring(0,3) === coord.lng.toString().substring(0,3))) {
                    contentInBubble += "<div class='info-card'><h3>" + coordinates[i].latlng[j].tag + "</h3>" + "<p>" + coordinates[i].latlng[j].desc + "</p><p>" + coordinates[i].latlng[j].time + "</p></div>";
                }
    
            }
            if(contentInBubble !== "") {
                var bubble = new H.ui.InfoBubble({ lng: coord.lng, lat: coord.lat }, {
                    content: contentInBubble
                });
                uiIndividualMap.addBubble(bubble);
            }
        }
    });
}

function showAll() {
    coordinates.forEach(coord => {
        showRoute(coord.latlng, coord.icon, coord.company,strokeColorArray[Math.floor(Math.random()*strokeColorArray.length)]);
    });
}

function timeDifference(current, previous) {

    var msPerMinute = 60 * 1000;
    var msPerHour = msPerMinute * 60;
    var msPerDay = msPerHour * 24;
    var msPerMonth = msPerDay * 30;
    var msPerYear = msPerDay * 365;

    var elapsed = current - previous;

    if (elapsed < msPerMinute) {
         return Math.floor(elapsed/1000) + ' seconds ago';   
    }

    else if (elapsed < msPerHour) {
         return Math.floor(elapsed/msPerMinute) + ' minutes ago';   
    }

    else if (elapsed < msPerDay ) {
         return Math.floor(elapsed/msPerHour ) + ' hours ago';   
    }

    else if (elapsed < msPerMonth) {
        return 'approximately ' + Math.floor(elapsed/msPerDay) + ' day' + (Math.floor(elapsed/msPerDay) === 1 ? '' : 's') + ' ago';   
    }

    else if (elapsed < msPerYear) {
        return 'approximately ' + Math.floor(elapsed/msPerMonth) + ' month' + (Math.floor(elapsed/msPerMonth) === 1 ? '' : 's')  + ' ago';   
    }

    else {
        return 'approximately ' + Math.floor(elapsed/msPerYear) + ' year' + (Math.floor(elapsed/msPerYear) === 1 ? '' : 's') + ' ago';   
    }
}

function showRoute(latLngArray, icon, company, color="cyan") {
    var routing = [], count = 0;
    for(var i=0; i< latLngArray.length-1;i++){
        var loc = {
            'mode': 'fastest;car',
            // The start point of the route:
            'waypoint0': `geo!${latLngArray[i].lat},${latLngArray[i].lng}`,
            // The end point of the route:
            'waypoint1': `geo!${latLngArray[i+1].lat},${latLngArray[i+1].lng}`,
            // To retrieve the shape of the route we choose the route
            // representation mode 'display'
            'representation': 'display',
        }
        routing.push(loc);
    }
    var group = new H.map.Group({
        data: company,
    });
    var onResult = function(result) {
        count++;
        var route,
        routeShape,
        startPoint,
        endPoint,
        linestring;
        if(result.response.route) {
        // Pick the first route from the response:
        route = result.response.route[0];
        // Pick the route's shape:
        routeShape = route.shape;
      
        // Create a linestring to use as a point source for the route line
        linestring = new H.geo.LineString();
      
        // Push all the points in the shape into the linestring:
        routeShape.forEach(function(point) {
        var parts = point.split(',');
        linestring.pushLatLngAlt(parts[0], parts[1]);
        });
      
        // Retrieve the mapped positions of the requested waypoints:
        startPoint = route.waypoint[0].mappedPosition;
        endPoint = route.waypoint[1].mappedPosition;
      
        // Create a polyline to display the route:
        // var routeLine = new H.map.Polyline(linestring, {
        // style: { strokeColor: color, lineWidth: 3 }
        // });
        // Create an outline for the route polyline:
    var routeOutline = new H.map.Polyline(linestring, {
        style: {
        lineWidth: 5,
        strokeColor: color,
        lineTailCap: 'arrow-tail',
        lineHeadCap: 'arrow-head'
        }
    });
    // Create a patterned polyline:
    var routeArrows = new H.map.Polyline(linestring, {
        style: {
        lineWidth: 5,
        fillColor: color,
        strokeColor: 'rgba(255, 255, 255, 1)',
        lineDash: [0, 1],
        lineTailCap: 'arrow-tail',
        lineHeadCap: 'arrow-head' }
        }
    );
    // create a group that represents the route line and contains
    // outline and the pattern
    var routeLine = new H.map.Group();
    routeLine.addObjects([routeOutline, routeArrows]);
        
        // Create a marker for the start point:
        var startMarker = new H.map.Marker({
        lat: startPoint.latitude,
        lng: startPoint.longitude
        }, {
            icon: icon
        });
      
        // Create a marker for the end point:
        var endMarker = new H.map.Marker({
        lat: endPoint.latitude,
        lng: endPoint.longitude
        }, {
            icon: count === routing.length ? icon: icon
        });
        group.addObjects([routeLine, startMarker, endMarker]);
      
        // Set the map's viewport to make the whole route visible:
       // mapRef.getViewModel().setLookAtData({bounds: routeLine.getBoundingBox()});
        }
      };
    var companyIndex = coordinates.findIndex(coord => coord.company === company);
    coordinates[companyIndex].group = group;
    mapRef.addObject(group);
    for(var i =0;i<routing.length;i++) {
        router.calculateRoute(routing[i], onResult, function(error) {
            alert(error.message);
        });
    }
}

async function updateMapRoutes({ value }) {
    try {
        var options = document.getElementById('individualParcel');
        for(var i=0;i<options.length;i++) {
            if(options[i].value !== "select" && options[i].value !== value) {
                var companyGroup = coordinates.find(x => x.company === options[i].value);
                if(companyGroup.group && companyGroup.group !== null) {
                    await mapRef.removeObject(companyGroup.group);
                    coordinates[coordinates.findIndex(x => x.company === options[i].value)].group = null;
                }
            } else if(options[i].value !== "select" && options[i].value === value) {
                var checkedItem = coordinates.filter(item => {
                    return item.company === value;
                });
                if(checkedItem) {
                    showRoute(checkedItem[0].latlng, checkedItem[0].icon, value ,strokeColorArray[Math.floor(Math.random()*strokeColorArray.length)]);
                }
            }   
        }
    } catch(e) {
        console.log(e);
    }
}

