import { Component, OnInit } from '@angular/core';
import mapboxgl from 'mapbox-gl';  // Correct way to import with allowSyntheticDefaultImports enabled

@Component({
  selector: 'app-tab2',
  templateUrl: './tab2.page.html',
  styleUrls: ['./tab2.page.scss'],
})
export class Tab2Page implements OnInit {
  map: mapboxgl.Map | undefined;

  constructor() {
    mapboxgl.accessToken = 'YOUR_MAPBOX_ACCESS_TOKEN';
  }

  ngOnInit() {
    this.loadMap();
  }

  loadMap() {
    this.map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [30.9107, -29.9698],
      zoom: 18
    });

    new mapboxgl.Marker()
      .setLngLat([30.9107, -29.9698])
      .setPopup(new mapboxgl.Popup().setHTML('<h3>Student Center</h3>'))
      .addTo(this.map);
  }
}
