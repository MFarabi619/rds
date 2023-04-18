import React from 'react'
import { FigureVideo } from './Figure.Video'
import { styles, figureSize } from './Figure.Styles'

export interface FigureProps {
  children: React.ReactNode
  caption?: string
  size?: 'small' | 'medium' | 'large' | 'full'
  isRound?: boolean
  isCircle?: boolean
}

export const FigureWrapper = ({ children, caption, isRound, isCircle, size = 'medium' }: FigureProps) => {
  const roundedCorners = isRound ? styles.rounded : ''
  const fullCircle = isCircle ? styles.circle : ''

  return (
    <figure className={`cu-figure ${styles.figure} ${figureSize[size]}`}>
      <div className={`${styles.container} ${roundedCorners} ${fullCircle}`}>
        {children}
        {caption && <figcaption className={styles.caption}>{caption}</figcaption>}
      </div>
    </figure>
  )
}

export const Figure = Object.assign(FigureWrapper, {
  Video: FigureVideo,
})
