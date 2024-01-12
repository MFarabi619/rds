import { navMenuItemStyles } from './Nav.Styles'
import { NavMenuItemWrapper } from './NavMenuItemWrapper'
import ImenuItem from './NavInterface'
export interface navMenuProps {
  menu: ImenuItem[]
}

export const NavMenu = ({ menu }: navMenuProps) => {
  return (
    <>
      <div className={navMenuItemStyles.navBarWrapper}>
        <ul className={navMenuItemStyles.navBar}>
          {menu.map((menuItem: ImenuItem, index: number) => (
            <NavMenuItemWrapper key={index} menuItem={menuItem} isSubMenu={false} isInnerSubMenu={false}/>
          ))}
        </ul>
      </div>
    </>
  )
}

NavMenu.displayName = 'Nav.Menu'
