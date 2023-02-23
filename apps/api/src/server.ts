import strapi from '@strapi/strapi';

const app = strapi({ distDir: './dist' });
app.start();
