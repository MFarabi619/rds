import React from 'react'
import { PageHeadersPeople } from './PageHeadersPeople'
import { PageHeadersEvent } from './PageHeadersEvent'

export interface PageHeadersProps {
  children?: React.ReactNode
  as?: 'h1' | 'h2' | 'h3'
  header: string
  content?: string
  size?: keyof typeof headerSize
  isCenter?: boolean
  pronoun?: string
  noUnderline?: boolean
}

const headerSize = {
  xs: `text-lg md:text-xl lg:text-2xl lg:leading-[2rem]`,
  sm: `text-xl md:text-2xl lg:text-3xl lg:leading-[2.5rem]`,
  md: `text-2xl md:text-3xl lg:text-4xl lg:leading-[3rem]`,
  lg: `text-3xl md:text-4xl lg:text-5xl lg:leading-[3.5rem]`,
}

export const PageHeadersWrapper = ({
  children,
  as = 'h1',
  header,
  content,
  size = 'lg',
  isCenter,
  noUnderline = false,
  pronoun,
}: PageHeadersProps) => {
  const HeaderComponent = as

  // Set spacing for header with underline
  let headerPadding
  let headerMargin
  let contentStyle

  switch (size) {
    case 'xs':
      headerPadding = 'pb-4'
      headerMargin = 'mb-6'
      contentStyle = 'prose-md md:prose-lg'
      break
    case 'sm':
      headerPadding = 'pb-5'
      headerMargin = 'mb-6'
      contentStyle = 'prose-md md:prose-lg'
      break
    case 'md':
      headerPadding = 'pb-6'
      headerMargin = 'mb-10'
      contentStyle = 'prose-lg md:prose-xl'
      break
    case 'lg':
      headerPadding = 'pb-8'
      headerMargin = 'mb-10'
      contentStyle = 'prose-lg md:prose-xl'
      break
    default:
      headerPadding = 'pb-8'
      headerMargin = 'mb-10'
      contentStyle = 'prose-lg md:prose-xl'
      break
  }

  // Truncate content if it's longer than 250 characters
  const truncatedContent = content && content.length > 250 ? `${content.substring(0, 250)}...` : content

  const hasUnderline = !noUnderline
    ? `relative after:absolute after:w-10 after:h-px after:bottom-0 after:bg-cu-red ${headerPadding} ${headerMargin}`
    : headerMargin

  const centerText = isCenter ? 'text-center mx-auto' : ''
  const centerUnderline =
    isCenter && !noUnderline ? `${hasUnderline} after:left-1/2 after:-ml-5` : `${hasUnderline} after:left-px`

  return (
    <>
      <HeaderComponent
        className={`${headerSize[size]} font-semibold text-cu-black-700 not-prose ${centerText} ${centerUnderline}`}
      >
        {header}{' '}
        {pronoun && <span className="text-xl font-light lowercase lg:text-3xl text-cu-black-500">({pronoun})</span>}
      </HeaderComponent>
      {truncatedContent && <p className={`${contentStyle} ${centerText}`}>{truncatedContent}</p>}
      {children}
    </>
  )
}

export const PageHeaders = Object.assign(PageHeadersWrapper, {
  People: PageHeadersPeople,
  Event: PageHeadersEvent,
})
