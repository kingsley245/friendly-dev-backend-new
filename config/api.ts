// export default {
//   rest: {
//     defaultLimit: 25,
//     maxLimit: 100,
//     withCount: true,
//   },
// };

export default ({ env }: { env: any }) => ({
  auth: {
    cookie: {
      secure: env.bool('ADMIN_COOKIE_SECURE', true), // Secure in production
      httpOnly: true,
      sameSite: 'strict' as const, // TypeScript requires 'as const' for literal types
    },
  },
});
