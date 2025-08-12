export async function GET() {
  return Response.json([
    { label: 'Profile', path: '/account/profile' },
    { label: 'Details', path: '/account/details' },
  ]);
}