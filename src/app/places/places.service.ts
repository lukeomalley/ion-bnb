import { Injectable } from '@angular/core';
import { Place } from './places.model';

@Injectable({
  providedIn: 'root',
})
export class PlacesService {
  private places: Place[] = [
    new Place(
      '4',
      'Hotel Garni Snalterhof',
      'Simple rooms and free breakfast in a circa-1673 inn with ski-in/ski-out service',
      'https://r-cf.bstatic.com/images/hotel/max1024x768/131/131057504.jpg',
      225
    ),
    new Place(
      '1',
      'Mountain Getaway',
      'Hygge mountain cottage perfect for two',
      'https://cdn.vox-cdn.com/thumbor/-ZqGLsBGR192WGjdmnldoxSCABc=/0x0:675x450/1200x800/filters:focal(284x171:392x279)/cdn.vox-cdn.com/uploads/chorus_image/image/63399426/norway4.0.jpg',
      250
    ),
    new Place(
      '2',
      'Loose Recluse',
      'Relaxing mountain home for a famiy. Perfect for a Christmas escape',
      'https://gallery.streamlinevrs.com/pmt_common/unit_gallery/00/03/88/image_155577593.jpeg',
      175
    ),
    new Place(
      '3',
      'Beach Bungalow',
      'Cozy beach bungalow with a ocean view',
      'https://cdn.pixabay.com/photo/2017/07/29/15/15/maldives-2551755_960_720.jpg',
      125
    ),
    new Place(
      '5',
      'Hotel Mont Blanc',
      'The must address to visit in the valley of Chamonix. This elegant establishment has all the comfort and services for an agreeable stay.',
      'https://media-cdn.tripadvisor.com/media/photo-w/0d/5a/f9/fd/hotel-mont-blanc.jpg',
      225
    ),
    new Place(
      '6',
      'Mont Tremblant Hotel',
      'A 3-minute walk from ski lifts, this upscale hotel in the Laurentian Mountains',
      'https://cache.marriott.com/marriottassets/marriott/YMYWI/ymywi-exterior-7757-hor-feat.jpg?interpolation=progressive-bilinear&downsize=1180px:*',
      205
    ),
    new Place(
      '7',
      'Hotel Pra Tlusel',
      'A 3-minute walk from ski lifts, this upscale hotel in the Laurentian Mountains',
      'http://www.valgardena-web.com/hotel_val_gardena/fotos/info@pratlusel.com/big/_AG61624klein_big.jpg',
      325
    ),
    new Place(
      '8',
      'Fairmont Chateau Lake Louise',
      'Posh lakefront hotel with multiple dining options & outdoor activities, plus an indoor pool & a spa.',
      'https://images.trvl-media.com/hotels/1000000/30000/22600/22503/a4e0d0a3_z.jpg',
      400
    ),
  ];

  getPlaces() {
    return [...this.places];
  }

  getPlace(id: string) {
    return this.places.find(place => place.id === id);
  }
}
