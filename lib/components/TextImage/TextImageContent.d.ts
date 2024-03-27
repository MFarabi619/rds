import React from '../../../node_modules/react';
export interface TextImageContentProps {
    children?: React.ReactNode;
    title?: string;
    headerType?: 'h1' | 'h2';
    isCenter?: boolean;
}
export interface TextImageMediaProps {
    imageUrl?: string;
    contentWidth?: number;
    imageZoom?: number;
    angle?: 'left' | 'dual' | 'none';
    flipX?: boolean;
    focalPointX?: string;
    focalPointY?: string;
    hasMobileImage?: boolean;
}
export declare const TextImageContent: {
    ({ children, title, headerType, isCenter, imageUrl, contentWidth, imageZoom, angle, flipX, focalPointX, focalPointY, hasMobileImage, }: TextImageContentProps & TextImageMediaProps): import('../../../node_modules/react/jsx-runtime').JSX.Element;
    displayName: string;
};