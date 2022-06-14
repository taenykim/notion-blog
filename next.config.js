// eslint-disable-next-line @typescript-eslint/no-var-requires
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true'
})

module.exports = withBundleAnalyzer({
  staticPageGenerationTimeout: 300,
  images: {
    domains: [
      'www.notion.so',
      'notion.so',
      'images.unsplash.com',
      'pbs.twimg.com',
      'abs.twimg.com',
      's3.us-west-2.amazonaws.com',
      'transitivebullsh.it'
    ],
    formats: ['image/avif', 'image/webp'],
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;"
  },
  async redirects() {
    return [
      {
        source:
          '/essay/프로그래머스-2020-dev-matching-웹-프론트엔드-개발자(상반기)-후기/',
        destination: '/dev-matching-review',
        permanent: true
      },
      {
        source: 'javascript/oopstudy1/',
        destination: '/oopstudy1',
        permanent: true
      },
      {
        source: 'javascript/oopstudy2/',
        destination: '/oopstudy2',
        permanent: true
      },
      {
        source: 'javascript/nextjs-with-deployment-platform/',
        destination: '/nextjs-deploy',
        permanent: true
      },
      {
        source: 'essay/bf-test-review/',
        destination: '/bf-test-review',
        permanent: true
      },
      {
        source: 'essay/리그-오브-디벨로퍼/',
        destination: '/league-of-developers',
        permanent: true
      },
      {
        source: 'essay/boostcamp-challenge-1/',
        destination: '/boostcamp-challenge-review1',
        permanent: true
      },
      {
        source: 'essay/boostcapm-challenge-2/',
        destination: '/boostcamp-challenge-review2',
        permanent: true
      },
      {
        source: 'essay/boostcamp-challenge-3/',
        destination: '/boostcamp-challenge-review3',
        permanent: true
      },
      {
        source: 'essay/boostcamp-challenge-4/',
        destination: '/boostcamp-challenge-review4',
        permanent: true
      },
      {
        source: 'essay/boostcamp-membership-review/',
        destination: '/boostcamp-membership-review',
        permanent: true
      },
      {
        source: 'project/boilerplate-generator/',
        destination: '/boilerplate-generator',
        permanent: true
      }
    ]
  }
})
