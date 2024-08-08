import { Component, OnInit } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation/ngx';

declare var google: any;

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
})
export class Tab2Page implements OnInit {
  map: any;
  userMarker: any;
  buildings: Array<{ name: string, lat: number, lng: number }> = [
    { name: 'Student Center', lat: -29.970, lng: 30.911 },
    { name: 'D1 Lab', lat: -29.971, lng: 30.912 },
    { name: 'Semme Hall', lat: -29.972, lng: 30.913 },
    { name: 'Main Gate', lat: -29.973, lng: 30.914 },
    { name: 'SRC Office', lat: -29.974, lng: 30.915 },
    { name: 'North Campus', lat: -29.975, lng: 30.916 },
  ];

  constructor(private geolocation: Geolocation) {}

  ngOnInit() {
    this.initMap();
  }

  initMap() {
    const location = { lat: -29.969804427818424, lng: 30.910702475142774 };
    this.map = new google.maps.Map(document.getElementById("map"), {
      center: location,
      zoom: 15,
    });

    this.geolocation.getCurrentPosition().then((position) => {
      const userLocation = {
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      };

      this.userMarker = new google.maps.Marker({
        position: userLocation,
        map: this.map,
        title: "You are here",
      });

      this.map.setCenter(userLocation);
    });
  }

  findBuilding() {
    const request = {
      query: this.buildings,
      location: this.map.getCenter(),
      radius: '500',
    };

    const service = new google.maps.places.PlacesService(this.map);
    service.findPlaceFromQuery(request, (results, status) => {
      if (status === google.maps.places.PlacesServiceStatus.OK && results) {
        const place = results[0];
        const placeLocation = {
          lat: place.geometry.location.lat(),
          lng: place.geometry.location.lng(),
        };

        const directionsService = new google.maps.DirectionsService();
        const directionsRenderer = new google.maps.DirectionsRenderer();
        directionsRenderer.setMap(this.map);

        const directionsRequest = {
          origin: this.userMarker.getPosition(),
          destination: placeLocation,
          travelMode: google.maps.TravelMode.WALKING,
        };

        directionsService.route(directionsRequest, (response, status) => {
          if (status === 'OK') {
            directionsRenderer.setDirections(response);
          }
        });

        new google.maps.Marker({
          position: placeLocation,
          map: this.map,
          title: place.name,
        });
      } else {
        alert("Building not found!");
      }
    });
  }
}
