export interface ImageGridProps {
    children: React.ReactNode;
    maxWidth?: '5xl' | '7xl';
    gridGap?: '0' | '5' | '10';
    cols?: '2' | '3' | '4';
}
export declare const ImageGridWrapper: ({ children, maxWidth, gridGap, cols }: ImageGridProps) => import("react/jsx-runtime").JSX.Element;
export declare const ImageGrid: (({ children, maxWidth, gridGap, cols }: ImageGridProps) => import("react/jsx-runtime").JSX.Element) & {
    Item: ({ children, colSpan, rowSpan, title, content, link }: import('./ImageGridItem').ImageGridItemProps) => import("react/jsx-runtime").JSX.Element;
};