'use strict';

module.exports = {
  site: {
    siteMetadata: {
      url: 'http://localhost',
      title: 'Test title',
      subtitle: 'Test subtitle',
      copyright: 'Test copyright',
      disqusShortname: '',
      postsPerPage: 4,
      skills: [
        {
          label: 'JavaScript',
          slug: 'javascript',
          title: 'The Swiss Army knife of software development.',
          description:
            'This incredibly important little buddy allows me to do everything from crafting experiences and defining behavior for the web to writing and running interactive servers.',
        },
      ],
      stints: [
        {
          label: 'Test',
          slug: 'test',
          designation: 'Senior Test Engineer',
          epoch: 'July 2020 - present',
          highlights: ['Write tested code mf.'],
        },
      ],
      menu: [
        {
          label: 'Test label 1',
          path: '/test/1/',
        },
        {
          label: 'Test label 2',
          path: '/test/2/',
        },
        {
          label: 'Test label 3',
          path: '/test/3/',
        },
      ],
      author: {
        name: 'Test name',
        photo: '/test.jpg',
        bio: 'Test bio',
        contacts: {
          email: '#',
          telegram: '#',
          twitter: '#',
          github: '#',
          rss: '#',
          vkontakte: '#',
        },
      },
    },
  },
};
