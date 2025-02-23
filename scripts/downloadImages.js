// scripts/downloadImages.js
import axios from 'axios';
import { existsSync, mkdirSync, createWriteStream } from 'fs';
import { join } from 'path';

import data from '../src/app/[locale]/puerto/dataAlojaFoz.json';
const imagesDir = join(__dirname, '../public/images/hotels');

// Asegurarse de que el directorio existe
if (!existsSync(imagesDir)) {
  mkdirSync(imagesDir, { recursive: true });
}

const downloadImage = async (url, destination) => {
  const response = await axios({
    url,
    responseType: 'stream',
  });
  return new Promise((resolve, reject) => {
    response.data
      .pipe(createWriteStream(destination))
      .on('finish', () => resolve(destination))
      .on('error', reject);
  });
};

const main = async () => {
  for (const hotel of data) {
    if (hotel.photos && hotel.photos.length > 0) {
      const hotelPhotosDir = join(imagesDir, hotel.name.toLowerCase().replace(/\s+/g, '-'));
      if (!existsSync(hotelPhotosDir)) {
        mkdirSync(hotelPhotosDir, { recursive: true });
      }
      const photosToDownload = hotel.photos.slice(0, 3); // Tomar solo 2 o 3 fotos
      for (const [index, photo] of photosToDownload.entries()) {
        try {
          const imgPath = join(hotelPhotosDir, `photo-${index + 1}.jpg`);
          await downloadImage(photo.name, imgPath);
          console.log(`Descargada imagen ${index + 1} para ${hotel.displayName.text}`);
        } catch (error) {
          console.error(`Error al descargar la imagen para ${hotel.displayName.text}:`, error);
        }
      }
    }
  }
  console.log('Descarga de imágenes completada.');
};

main().catch(console.error);