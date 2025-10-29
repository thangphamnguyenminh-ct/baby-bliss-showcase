import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const CLOUD_NAME = 'dsctq9pxc';

// Cloudinary helper functions với optimized parameters
export const CLOUDINARY_BASE_URL = `https://res.cloudinary.com/${CLOUD_NAME}/image/upload`

export function getFullSizeUrl(img_id: string): string {
  return `${CLOUDINARY_BASE_URL}/q_auto:good,f_auto,c_limit,dpr_auto/${img_id}`
}

export function getThumbSizeUrl(img_id: string, w: number = 200): string {
  return `${CLOUDINARY_BASE_URL}/w_${w},q_auto:good,f_auto,c_limit,dpr_auto/${img_id}`
}

// Thêm lazy loading URL cho better performance
export function getLazyUrl(img_id: string, w: number = 200): string {
  return `${CLOUDINARY_BASE_URL}/w_${w},q_auto:low,f_auto,c_limit,e_blur:300/${img_id}`
}
