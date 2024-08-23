import { S3Client } from '@aws-sdk/client-s3'

const region = import.meta.env.VITE_AWS_REGION
const accessKeyId = import.meta.env.VITE_AWS_ACCESS_KEY_ID
const secretAccessKey = import.meta.env.VITE_AWS_SECRET_ACCESS_KEY

export const client = new S3Client({
  region,
  credentials: {
    accessKeyId,
    secretAccessKey,
  },
})
