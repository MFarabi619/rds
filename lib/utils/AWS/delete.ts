import { DeleteObjectCommand } from '@aws-sdk/client-s3'
import { client } from './helper'

const deleteObject = async (fileName: string) => {
  const bucket = import.meta.env.VITE_S3_BUCKET
  const command = new DeleteObjectCommand({ Bucket: bucket, Key: fileName })
  return client.send(command)
}

/**
 * Deletes an image file from AWS S3.
 *
 * @param {string} fileName - The name (key) of the file to be deleted from AWS S3.
 * @returns {Promise<boolean>} - A promise that resolves to `true` if the deletion is successful.
 * @throws {Error} - Throws an error if the deletion fails.
 */
export const deleteImage = async (fileName: string): Promise<boolean> => {
  try {
    await deleteObject(fileName)
    return true
  } catch (error) {
    console.error(error)
    throw new Error('Failed to delete file')
  }
}
