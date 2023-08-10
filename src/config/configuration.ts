export default () => ({
  PORT: parseInt(process.env.PORT, 10) || 4000,
  FE_URL_LOCAL: process.env.FE_URL_LOCAL || 'http://localhost:3000',
  FE_URL_DEV: process.env.FE_URL_DEV || '',
  FE_URL_PROD: process.env.FE_URL_PROD || '',
  TEST: process.env.TEST || 'TEST',
});
