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
                  buildHookId: '5e2ac2491599ca09cfaf1218',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-jmxkzkmf',
                  apiId: '98c4ccdd-5784-4bab-b863-8ce795a53e42'
                },
                {
                  buildHookId: '5e2ac2496e7f9bb4e868b9b5',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-bwd6su6v',
                  apiId: '33b15679-44a4-4625-9234-754b6be001c6'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/shtolcers/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-bwd6su6v.netlify.com', category: 'apps'}
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
