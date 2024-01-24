import { navMenuItemStyles } from './Nav.Styles'
import ImenuItem from './NavInterface'
export interface menuItemProps {
  menuItem: ImenuItem
  isSubMenu: boolean
  isInnerSubMenu: boolean
  id: string
}

const convertToSlug = (text: string) => {
  return text
    .toLowerCase()
    .replace(/[^\w ]+/g, '')
    .replace(/ +/g, '-')
}

export const NavMenuItem = ({ menuItem, isSubMenu, isInnerSubMenu, id }: menuItemProps) => {
  return (
    <span className={navMenuItemStyles.navItemWrapper} data-menu-item={convertToSlug(id)} aria-expanded="false">
      <a
        href={menuItem.href}
        className={
          (menuItem.submenu && !isInnerSubMenu
            ? navMenuItemStyles.navParentItem +
              ' ' +
              navMenuItemStyles.navArrow +
              ' ' +
              navMenuItemStyles.navParentArrow
            : '') +
          ` ` +
          navMenuItemStyles.navItem +
          ` ` +
          (isSubMenu ? navMenuItemStyles.subMenuItem : '')
        }
      >
        <span className={menuItem.title.length > 25 ? 'cu-nav__parent-inner' : ''}>{menuItem.title}</span>

        {menuItem.submenu && !isInnerSubMenu ? (
          <button className={`hidden ` + navMenuItemStyles.innerSubNavToggler + ' ' + navMenuItemStyles.navArrow}>
            <span className="sr-only">Click to open inner submenu</span>
          </button>
        ) : (
          <></>
        )}
      </a>

      {menuItem.submenu && isInnerSubMenu ? (
        <button
          className={isInnerSubMenu ? navMenuItemStyles.innerSubNavToggler + ' ' + navMenuItemStyles.navArrow : ''}
          aria-expanded="false"
        >
          <span className="sr-only">Click to open inner submenu</span>
        </button>
      ) : (
        <></>
      )}
    </span>
  )
}

NavMenuItem.displayName = 'Nav.NavMenuItem'
