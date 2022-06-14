import { siteConfig } from './lib/site-config'

export default siteConfig({
  // the site's root Notion page (required)
  rootNotionPageId: '2108577be69442c68797d27019ba2529',

  // if you want to restrict pages to a single notion workspace (optional)
  // (this should be a Notion ID; see the docs for how to extract this)
  rootNotionSpaceId: null,

  // basic site info (required)
  name: 'Learn in Public',
  domain: 'taeny.dev',
  author: 'taenykim',

  // open graph metadata (optional)
  description: 'Learn in Public',

  // social usernames (optional)
  twitter: '',
  github: '',
  linkedin: '',
  // newsletter: '#', // optional newsletter URL
  // youtube: '#', // optional youtube channel name or `channel/UCGbXXXXXXXXXXXXXXXXXXXXXX`

  // default notion icon and cover images for site-wide consistency (optional)
  // page-specific values will override these site-wide defaults
  defaultPageIcon: null,
  defaultPageCover: null,
  defaultPageCoverPosition: 0.5,

  // Utteranc.es comments via GitHub issue comments (optional)
  utterancesGitHubRepo: 'taenykim/taeny.dev',

  // whether or not to enable support for LQIP preview images (optional)
  isPreviewImageSupportEnabled: true,

  // whether or not redis is enabled for caching generated preview images (optional)
  // NOTE: if you enable redis, you need to set the `REDIS_HOST` and `REDIS_PASSWORD`
  // environment variables. see the readme for more info
  isRedisEnabled: false,

  // map of notion page IDs to URL paths (optional)
  // any pages defined here will override their default URL paths
  // example:
  //
  pageUrlOverrides: {
    '/project/boilerplate-generator': '853ad7df654c4e1fb203e23b56f8efc6',
    '/essay/boostcamp-membership-review': '0ac0e91ec75449038e65b84fb40ef83e',
    '/essay/boostcamp-challenge-4': 'efa678b8c47343dbae50fb064ceacef5',
    '/essay/boostcamp-challenge-3': '2020-3-151f1bee90e64e1e9b779ce689f5bbfc',
    '/essay/boostcapm-challenge-2': '2020-2-e679c94e6db64b2e83ede4eb54608541',
    '/essay/boostcamp-challenge-1': '2020-1-aecb07655da94a009ca1fc8bbdba9a45',
    '/essay/리그-오브-디벨로퍼':
      'League-of-Developers-84d5e023f8bf43609d2c449cea6001b1',
    '/essay/bf-test-review': 'BF-TEST-72cc237198634a93affe9c721b54736e',
    '/javascript/oopstudy2':
      'MVC-MVVM-FLUX-OOP-Study-2-a4d3828c5dff4285bea6002553732d78',
    '2020-Dev-Matching-df38b564a87f4703b05863c6245eabb3':
      'nextJS-Netlify-Vercel-Github-page-70a845811c3141598c45695c775edd90',
    '/javascript/oopstudy1': 'OOP-Study-1-af78d1802cc04144851c3b3ca8a8f235',
    '/essay/프로그래머스-2020-dev-matching-웹-프론트엔드-개발자(상반기)-후기':
      '2020-Dev-Matching-df38b564a87f4703b05863c6245eabb3'
  },
  // pageUrlOverrides: null,

  // whether to use the default notion navigation style or a custom one with links to
  // important pages
  // navigationStyle: 'default'
  navigationStyle: 'custom',
  navigationLinks: [
    {
      title: 'About',
      pageId: '83a95850c4414fe6adbdf566ffb5a86b'
    },
    {
      title: 'Posts',
      pageId: 'f3f2eab6fe8d4009af8d9ebd180df3cb'
    }
  ]
})
