export const headerLinks = [
    {
      label: 'Acasa',
      route: '/',
    },
    {
      label: 'Creaza Event',
      route: '/events/create',
    },
    {
      label: 'Profilul meu',
      route: '/profile',
    },
  ]
  
  export const eventDefaultValues = {
    title: '',
    description: '',
    location: '',
    imageUrl: '',
    startDateTime: new Date(),
    endDateTime: new Date(),
    categoryId: '',
    price: '',
    isFree: false,
    url: '',
  }