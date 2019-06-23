export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5d0f819149b1b13dca478caa',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-5qodj1mf',
                  apiId: 'cea07777-6b74-4acc-853c-5ffd26233ca0'
                },
                {
                  buildHookId: '5d0f819168dcbbd71eb9a47a',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-ncey83ew',
                  apiId: '35c07aeb-064a-4c11-99e2-81a69eb40430'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/theleolife/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-ncey83ew.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
