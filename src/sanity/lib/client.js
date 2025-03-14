import { createClient } from 'next-sanity'

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: "2023-05-03", // Use the latest API version
  token: process.env.NEXT_PUBLIC_SANITY_API_TOKEN, // This should be a server-side env variable in production
  useCdn: false, // We need to use the API directly for mutations
})

