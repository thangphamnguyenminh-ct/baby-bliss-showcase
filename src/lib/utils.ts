import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const CLOUD_NAME = 'dkknneufa';

// Cloudinary helper functions
export const CLOUDINARY_BASE_URL = `https://res.cloudinary.com/${CLOUD_NAME}/image/upload`

export function getFullSizeUrl(img_id: string): string {
  return `${CLOUDINARY_BASE_URL}/q_auto,f_auto/${img_id}`
}

export function getThumbSizeUrl(img_id: string, w: number = 200): string {
  return `${CLOUDINARY_BASE_URL}/w_${w},f_auto/${img_id}`
}
