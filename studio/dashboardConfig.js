export default {
  widgets: [
    // {
    //   name: 'sanity-tutorials',
    //   options: {
    //     templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
    //   }
    // },
    { name: 'structure-menu' },
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
                  buildHookId: '631ef01b6633896bcc4221a4',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-mqws242h',
                  apiId: 'b78558c3-23a4-4679-84a2-e6e77aa19c24'
                },
                {
                  buildHookId: '631ef01c20301d6fc5bc0aa0',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-kv7wmaju',
                  apiId: 'a1db4023-bdee-461b-9380-23a4ab07df9a'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/kalo69/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-kv7wmaju.netlify.app', category: 'apps' }
        ]
      }
    },
    {
      name: 'document-list',
      options: { title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page'] },
      layout: { width: 'medium' }
    },
    { name: 'project-users', layout: { height: 'auto' } }
  ]
}
