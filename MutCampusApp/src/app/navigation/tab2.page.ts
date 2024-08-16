import { Component, ElementRef, ViewChild } from '@angular/core';
import { ModalController } from '@ionic/angular';

declare var google: any;

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  @ViewChild('mapIframe') mapIframe?: ElementRef;
  @ViewChild('searchInput') searchInput?: ElementRef;
  @ViewChild('list') list?: ElementRef;

  private map: any;
  private directionsService: any;
  private directionsRenderer: any;

  constructor(private modalController: ModalController) { }

  ngAfterViewInit() {
    this.mapIframe?.nativeElement;
    this.initMap();
  }

  initMap() {
    const mapElement = this.mapIframe?.nativeElement;
    this.map = new google.maps.Map(mapElement, {
      center: { lat: -29.969804427818424, lng: 30.910702475142774 },
      zoom: 15,
    });

    this.directionsService = new google.maps.DirectionsService();
    this.directionsRenderer = new google.maps.DirectionsRenderer({
      map: this.map,
    });
  }

  searchForBuilding(searchQuery: string) {
    const geocoder = new google.maps.Geocoder();
    geocoder.geocode({ address: searchQuery }, (results, status) => {
      if (status === 'OK') {
        const buildingLocation = results[0].geometry.location;

        // Calculate the directions
        this.directionsService.route({
          origin: this.getUserLocation(),
          destination: buildingLocation,
          travelMode: 'walking',
        }, (response, status) => {
          if (status === 'OK') {
            this.displayDirections(response);
            this.directionsRenderer.setDirections(response);
            
          }
        });
      }
    });
  }

  async getUserLocation() {
    try {
      const position = await new Promise<GeolocationPosition>((resolve, reject) =>
        navigator.geolocation.getCurrentPosition(resolve, reject)
      );
      return {
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      };
    } catch (error) {
      console.error('Error getting user location:', error);
      return Promise.reject('Unable to get user location');
    }
  }
  
  

  displayDirections(response: any) {
    const directionsList = response.routes[0].legs[0].steps;
    this.list && (this.list.nativeElement.innerHTML = '');
    directionsList.forEach((step) => {
      const instruction = document.createElement('p');
      instruction.textContent = step.instructions;
      this.list?.nativeElement.appendChild(instruction);
    });
  }
}