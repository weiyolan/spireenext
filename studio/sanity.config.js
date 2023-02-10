import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'
import { dashboardTool } from "@sanity/dashboard";
import { netlifyWidget } from "sanity-plugin-dashboard-widget-netlify";

export default defineConfig({
  name: 'spiree',
  title: 'spiree',
  // basePath:'/studio',

  projectId: 'woi2spy9',
  dataset: 'production',

  plugins: [deskTool(), visionTool(), dashboardTool({
      widgets: [
        netlifyWidget({
            title: 'My Netlify deploys',
            sites: [
              {
                title: 'Sanity Studio',
                apiId: 'xxxxx-yyyy-zzzz-xxxx-yyyyyyyy',
                buildHookId: 'xxxyyyxxxyyyyxxxyyy',
                name: 'sanity-gatsby-blog-20-studio',
              },
              {
                title: 'Website',
                apiId: 'yyyyy-xxxxx-zzzz-xxxx-yyyyyyyy',
                buildHookId: 'yyyyxxxxxyyyxxdxxx',
                name: 'sanity-gatsby-blog-20-web',
                url: 'https://my-sanity-deployment.com',
              }
            ]
        })
      ]
    })
  ],

  schema: {
    types: schemaTypes,
  },
})
