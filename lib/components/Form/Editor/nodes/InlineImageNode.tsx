import type {
  DOMConversionMap,
  DOMConversionOutput,
  DOMExportOutput,
  LexicalNode,
  NodeKey,
  SerializedLexicalNode,
  Spread,
} from 'lexical'

import { $applyNodeReplacement, DecoratorNode } from 'lexical'
import { Suspense } from 'react'
import InlineImageComponent from './InlineImageComponent'
import { IsDomAvailable } from '../utils/domAvailability'

export type Position = 'left' | 'right' | 'full' | undefined

export interface InlineImagePayload {
  altText: string
  caption?: string
  height?: number
  key?: NodeKey
  src: string
  width?: number
  position?: Position
}

export interface UpdateInlineImagePayload {
  src?: string
  altText?: string
  position?: Position
  caption?: string
  width?: number | 'inherit'
  height?: number | 'inherit'
}

function convertInlineImageElement(domNode: Node): null | DOMConversionOutput {
  if (domNode instanceof HTMLImageElement) {
    const { alt: altText, src, width, height } = domNode
    const node = $createInlineImageNode({ altText, height, src, width })
    return { node }
  }
  return null
}

export type SerializedInlineImageNode = Spread<
  {
    altText: string
    caption: string
    height?: number | 'inherit'
    src: string
    width?: number | 'inherit'
    position?: Position
  },
  SerializedLexicalNode
>

export class InlineImageNode extends DecoratorNode<JSX.Element> {
  __src: string
  __altText: string
  __width: 'inherit' | number
  __height: 'inherit' | number
  __caption: string
  __position: Position

  static getType(): string {
    return 'inline-image'
  }

  static clone(node: InlineImageNode): InlineImageNode {
    return new InlineImageNode(
      node.__src,
      node.__altText,
      node.__position,
      node.__width,
      node.__height,
      node.__caption,
      node.__key,
    )
  }

  static importJSON(serializedNode: SerializedInlineImageNode): InlineImageNode {
    const { altText, height, width, caption, src, position } = serializedNode

    const parsedHeight = typeof height === 'number' ? height : undefined
    const parsedWidth = typeof width === 'number' ? width : undefined

    const node = $createInlineImageNode({
      altText,
      height: parsedHeight,
      src,
      width: parsedWidth,
      position,
      caption,
    })

    return node
  }

  static importDOM(): DOMConversionMap | null {
    return {
      img: () => ({
        conversion: convertInlineImageElement,
        priority: 0,
      }),
    }
  }

  constructor(
    src: string,
    altText: string,
    position: Position,
    width?: 'inherit' | number,
    height?: 'inherit' | number,
    caption?: string,
    key?: NodeKey,
  ) {
    super(key)
    this.__src = src
    this.__altText = altText
    this.__width = width || 'inherit'
    this.__height = height || 'inherit'
    this.__caption = caption || ''
    this.__position = position
  }

  exportDOM(): DOMExportOutput {
    if (IsDomAvailable) {
      const figure = document.createElement('figure')
      const img = document.createElement('img')
      img.setAttribute('src', this.__src)
      img.setAttribute('alt', this.__altText)
      img.setAttribute('width', this.__width.toString())
      img.setAttribute('height', this.__height.toString())

      figure.className = this.__position ? `image-position image-position--${this.__position}` : `image-position`
      figure.appendChild(img)

      if (this.__caption) {
        const figcaption = document.createElement('figcaption')
        figcaption.textContent = this.__caption
        figure.appendChild(figcaption)
      }

      return { element: figure }
    }
    return { element: null }
  }

  exportJSON(): SerializedInlineImageNode {
    return {
      altText: this.getAltText(),
      caption: this.__caption,
      height: this.__height === 'inherit' ? 0 : this.__height,
      src: this.getSrc(),
      type: 'inline-image',
      version: 1,
      width: this.__width === 'inherit' ? 0 : this.__width,
      position: this.__position,
    }
  }

  getSrc(): string {
    return this.__src
  }

  setSrc(src: string): void {
    const writable = this.getWritable()
    writable.__src = src
  }

  getAltText(): string {
    return this.__altText
  }

  setAltText(altText: string): void {
    const writable = this.getWritable()
    writable.__altText = altText
  }

  setWidthAndHeight(width: 'inherit' | number, height: 'inherit' | number): void {
    const writable = this.getWritable()
    writable.__width = width
    writable.__height = height
  }

  getCaption() {
    return this.__caption
  }

  setCaption(caption: string) {
    const writable = this.getWritable()
    writable.__caption = caption
  }

  getPosition(): Position {
    return this.__position
  }

  setPosition(position: Position): void {
    const writable = this.getWritable()
    writable.__position = position
  }

  update(payload: UpdateInlineImagePayload): void {
    const writable = this.getWritable()
    const { src, altText, position, caption } = payload
    if (src !== undefined) {
      writable.__src = src
    }
    if (altText !== undefined) {
      writable.__altText = altText
    }
    if (caption !== undefined) {
      writable.__caption = caption
    }
    if (position !== undefined) {
      writable.__position = position
    }
  }

  createDOM(): HTMLElement {
    if (IsDomAvailable) {
      const div = document.createElement('div')
      const className = `image-position image-position--${this.__position}`
      if (className !== undefined) {
        div.className = className
      }
      return div
    }

    const fallbackDiv = {
      tagName: 'div',
      className: '',
      style: {},
      attributes: {},
      appendChild: () => {},
      removeChild: () => {},
    } as unknown as HTMLElement

    return fallbackDiv
  }

  updateDOM(prevNode: InlineImageNode, dom: HTMLElement): false {
    const position = this.__position
    if (position !== prevNode.__position) {
      const className = `image-position image-position--${position}`
      if (className !== undefined) {
        dom.className = className
      }
    }
    return false
  }

  decorate(): JSX.Element {
    return (
      <Suspense fallback={null}>
        <InlineImageComponent
          src={this.__src}
          altText={this.__altText}
          nodeKey={this.getKey()}
          caption={this.__caption}
        />
      </Suspense>
    )
  }
}

export function $createInlineImageNode({
  altText,
  position,
  height,
  src,
  width,
  caption,
  key,
}: InlineImagePayload): InlineImageNode {
  return $applyNodeReplacement(new InlineImageNode(src, altText, position, width, height, caption, key))
}

export function $isInlineImageNode(node: LexicalNode | null | undefined): node is InlineImageNode {
  return node instanceof InlineImageNode
}
