// Web Worker
importScripts('https://storage.googleapis.com/workbox-cdn/releases/5.1.2/workbox-sw.js');
workbox.routing.registerRoute(new RegExp("[\s\S]*"), new workbox.strategies.NetworkFirst());
