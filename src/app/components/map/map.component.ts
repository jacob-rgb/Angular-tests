import { Component, OnInit } from '@angular/core';
import Map from 'ol/Map';
import View from 'ol/View';
import OSM from 'ol/source/OSM';
import TileLayer from 'ol/layer/Tile';
import Feature from 'ol/Feature.js';
import Point from 'ol/geom/Point.js';
import { Circle as CircleStyle, Fill, Stroke, Style, Text } from 'ol/style.js';
import { Cluster, Vector as VectorSource } from 'ol/source.js';
import { Vector as VectorLayer } from 'ol/layer.js';
import { geoData } from 'src/app/mocks/data.geojson';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
})
export class MapComponent implements OnInit {
  map!: Map;

  constructor() {}

  ngOnInit(): void {
    this.createMap();
    this.createLayerByGeoJsonData(geoData)
  }

  createMap() {
    this.map = new Map({
      view: new View({
        center: [0, 0],
        zoom: 1,
      }),
      layers: [
        new TileLayer({
          source: new OSM(),
        }),
      ],
      target: 'ol-map',
    });
  }

  createLayerByGeoJsonData({ features }: any) {

    const customFeats: any[] = features.map((feat:any) => {
      return new Feature(new Point(feat.coordinates));
    })
    const source = new VectorSource({
      features: customFeats,
    });

    const clusterSource = new Cluster({
      distance: 10,
      minDistance: 10,
      source: source,
    });

    const clusters = new VectorLayer({
      source: clusterSource,
      style: function (feature) {

        const style = new Style({
          image: new CircleStyle({
            radius: 10,
            stroke: new Stroke({
              color: '#fff',
            }),
            fill: new Fill({
              color: '#3399CC',
            }),
          }),
          text: new Text({
            text: 'hola',
            fill: new Fill({
              color: '#fff',
            }),
          }),
        });

        return style;
      },
    });

    this.map.addLayer(clusters);
  }
}
