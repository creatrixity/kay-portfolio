'use strict';

module.exports = {
  url: 'https://kaymathew.com',
  pathPrefix: '/',
  title: 'Kay Mathew Blog',
  subtitle: 'The personal space of Kay',
  copyright: '© 2019 All rights reserved.',
  disqusShortname: '',
  postsPerPage: 4,
  googleAnalyticsId: 'UA-73379983-2',
  useKatex: false,
  menu: [
    {
      label: 'Articles',
      path: '/'
    },
    {
      label: 'About me',
      path: '/about'
    }
  ],
  author: {
    name: 'Caleb "Kay" Mathew',
    photo: '/photo.jpg',
    bio:
      // eslint-disable-next-line quotes
      `Hi there! I'm a Nigerian software engineer obsessed with building better experiences for users one keystroke at a time.`,
    contacts: {
      email: 'kay@kaymathew.com',
      twitter: '@creatrixity',
      github: 'creatrixity',
      linkedin: 'creatrixity'
    }
  }
};
