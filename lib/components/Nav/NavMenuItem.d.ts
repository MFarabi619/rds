import ImenuItem from './NavInterface';
export interface menuItemProps {
    menuItem: ImenuItem;
    isSubMenu: boolean;
    isInnerSubMenu: boolean;
    id: string;
}
export declare const NavMenuItem: {
    ({ menuItem, isSubMenu, isInnerSubMenu, id }: menuItemProps): import('../../../node_modules/react/jsx-runtime').JSX.Element;
    displayName: string;
};
