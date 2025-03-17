import { createClient } from 'next-sanity'

export const client = createClient({
  projectId: t8e4ngk6,
  dataset: bdas,
  apiVersion: "2023-05-03", 
  token: "skcasFAvJwJXCS8O2PxpBFtljK4aDML13z5vIHRFdHTGdsJGUoQfl0q5wooel1emZXppfv6TJbk4EahbixD0HSKi5i81VggGusy3Rdfj1QEFrcF6J9uOvlJHPSWuO3WVo1ie6XVLAi4hrbeYyXacJYtIY9SKdxZgwHKsGILmWIBdeHRVR2IT", 
  useCdn: false,
})

