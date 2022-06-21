export function getRouteName(pathname) {
  if (pathname.startsWith('/admin/movies')) {
    return 'Filmy';
  }

  if (pathname.startsWith('/admin/screen-rooms')) {
    return 'Sale kinowe';
  }

  if (pathname.startsWith('/admin/shows')) {
    return 'Seanse';
  }

  if (pathname.startsWith('/show')) {
    return 'Seans';
  }

  if (pathname === '/') {
    return 'Repertuar';
  }

  return 'Kino';
}