// public/sw.js
self.addEventListener('install', event => {
  console.log('[SW] Install event');
  // Kích hoạt ngay lập tức
  console.log("test")
  self.skipWaiting();
});

self.addEventListener('activate', event => {
  console.log('[SW] Activate event');
  // Xóa cache cũ nếu cần
  event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', event => {
  console.log('[SW] Fetch event:', event.request.url);
  // Có thể thêm logic cache ở đây
  event.respondWith(fetch(event.request));
});
