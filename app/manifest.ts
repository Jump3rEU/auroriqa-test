export default function manifest() {
  return {
    name: 'Auroriqa - Prémiová Webová Agentura',
    short_name: 'Auroriqa',
    description: 'Navrhujeme a vyvíjíme moderní webové stránky, aplikace a digitální produkty',
    start_url: '/',
    display: 'standalone',
    background_color: '#0f172a',
    theme_color: '#10b981',
    icons: [
      {
        src: '/icon-192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/icon-512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  }
}
