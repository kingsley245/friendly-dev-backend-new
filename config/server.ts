export default ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  app: {
    keys: env.array('APP_KEYS'), // Ensure APP_KEYS is set in Render
  },
  url: env('APP_URL'), // Rely on Render env variable, no fallback
  proxy: {
    koa: true, // Trust Render's proxy headers
  },
  admin: {
    url: '/admin', // Admin panel URL
  },
});
