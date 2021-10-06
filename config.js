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
  skills: [
    {
      label: 'JavaScript',
      slug: 'javascript',
      title: 'The Swiss Army knife of software development.',
      description:
        'This incredibly important little buddy allows me to do everything from crafting experiences and defining behavior for the web to writing and running interactive servers.',
    },
    {
      label: 'React',
      slug: 'react',
      title: 'The Super Renderer.',
      description:
        'This fantastic piece of technology allows me to build snappy and interactive user interfaces (UI). Its declarative nature means I can just specify what to expect without having to fiddle with the underbelly of the beast (DOM management)',
    },
    {
      label: 'Node.js',
      slug: 'nodejs',
      title: 'The V6 engine.',
      description: 'Allows me to spin up servers that can handle a crazy amount of requests at the same damn time.',
    },
    {
      label: 'Typescript',
      slug: 'typescript',
      title: "What's life without safety?",
      description:
        'If JavaScript is a raging bull then TypeScript is its Matador. This allows me to introduce a little sanity to JavaScript by way of type safety.',
    },
    {
      label: 'Python',
      slug: 'python',
      title: 'An early love.',
      description: 'Allows me to work with data easily and make it available on the web.',
    },
    {
      label: 'Rust',
      slug: 'rust',
      title: 'Pedal to bare metal',
      description: 'Highly performant systems language that allows me to write truly error-free memory-safe code',
    },
  ],
  menu: [
    {
      label: 'Home',
      path: '/',
    },
    {
      label: 'About',
      path: '/#about',
    },
    {
      label: 'Skills',
      path: '/#skills',
    },
    {
      label: 'Experience',
      path: '/#experience',
    },
    {
      label: 'Contact',
      path: '/#contact',
    },
  ],
  author: {
    name: 'Caleb "Kay" Mathew',
    photo: '/photo.jpg',
    resumeUrl: 'https://docs.google.com/document/d/1T861s71C4eXj0rjKwumr2G84uAog7m9f5CaQ1spF3EY/edit?usp=sharing',
    bio:
      // eslint-disable-next-line quotes
      `Hi there! I'm a Nigerian software engineer obsessed with building better experiences for users one keystroke at a time.`,
    contacts: {
      email: 'kay@kaymathew.com',
      twitter: '@creatrixity',
      github: 'creatrixity',
      linkedin: 'creatrixity',
    },
  },
};
