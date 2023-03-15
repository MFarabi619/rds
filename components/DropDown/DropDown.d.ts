import React from 'react';
export interface DropDownItemProps {
    title: string | React.ReactNode;
    icon?: any;
    href?: string;
    onClick?: (event: React.MouseEvent<MouseEvent | HTMLAnchorElement>) => void;
}
export interface DropDownProps {
    children?: React.ReactNode;
    buttonText?: string;
    renderAs?: 'button' | 'div';
    menuAlign?: 'left' | 'right';
    listItems: DropDownItemProps[];
}
export declare const DropDown: ({ children, buttonText, renderAs, listItems, menuAlign, }: DropDownProps) => JSX.Element;
//# sourceMappingURL=DropDown.d.ts.map