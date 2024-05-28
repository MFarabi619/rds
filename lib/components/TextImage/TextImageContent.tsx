import React from 'react'
import { styles, mediaStyles } from './TextImage.Styles'
import { proseGroups } from '../../utils/globalClasses'

export interface TextImageContentProps {
  children?: React.ReactNode
  title?: string
  headerType?: 'h1' | 'h2'
  isCenter?: boolean
}

export interface TextImageMediaProps {
  imageUrl?: string
  contentWidth?: number
  imageZoom?: number
  focalPointX?: string
  focalPointY?: string
  hasMobileImage?: boolean
}

export const TextImageContent = ({
  children,
  title,
  headerType = 'h2',
  isCenter,
  imageUrl,
  contentWidth = 50,
  imageZoom = 0,
  focalPointX = '50',
  focalPointY = '50',
  hasMobileImage,
}: TextImageContentProps & TextImageMediaProps) => {
  const contentPadding = imageUrl ? 'md:py-4' : ''
  const verticallyCenter = isCenter ? 'justify-center' : ''

  // Image options
  let hasImage
  let noImageOnMobile
  let inlineContentStyles
  let inlineImageStyles

  if (imageUrl) {
    hasImage = mediaStyles.mediaBgImage || ''
    noImageOnMobile = hasMobileImage ? '' : 'hidden lg:block'

    if (hasImage) {
      inlineContentStyles = {
        flex: `0 0 ${contentWidth}%`,
      }

      inlineImageStyles = {
        backgroundImage: `url(${imageUrl})`,
        backgroundPosition: `${focalPointX}% ${focalPointY}%`,
        transform: `scale(1.${imageZoom})`,
      }
    }
  }

  return (
    <>
      <div
        className={`${styles.contentWrapper} ${contentPadding} ${verticallyCenter} ${
          headerType === 'h1'
            ? `cu-textimage-as-h1 ${proseGroups.largeLight}`
            : `cu-textimage-as-h2 ${proseGroups.text}`
        }`}
        style={inlineContentStyles}
      >
        {title && headerType === 'h1' && <h1 className={`${styles.headerOne} ${styles.underline}`}>{title}</h1>}
        {title && headerType === 'h2' && <h2 className={`${styles.headerTwo} ${styles.underline}`}>{title}</h2>}
        {/* {validatedChildren} */}
        {children}
      </div>

      {imageUrl && (
        <div className={`${mediaStyles.mediaWrapper} ${noImageOnMobile}`}>
          <div className={`${mediaStyles.mediaBgImage}`} style={inlineImageStyles}></div>
        </div>
      )}
    </>
  )
}

TextImageContent.displayName = 'TextImage.Content'
