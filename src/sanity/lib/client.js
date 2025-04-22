import { createClient } from 'next-sanity'

export const client = createClient({
  projectId: "t8e4ngk6",
  dataset: "bdas",
  apiVersion: "2023-05-03", 
  token:"skdtE59ewIrZSCcLeiWSGp790F9Qwj6djkaQ40PpRLHtScMilFN6Q3SsefbV43z2dEY1y6TXwC74wGMNBPJzlE7kMRAD11BFTNjV8Q5TN77Zot3Fwg8sVI9HEgWrfXaPjwts9iNQXBZuk5ZVJh1te6ODvIo72MtL9BztDHlqlLyc1dcQtSTs",
  useCdn: false,
})

