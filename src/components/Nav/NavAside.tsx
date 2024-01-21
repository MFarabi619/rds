import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'
import { NavMenuItemWrapperStyles, navMenuItemStyles } from './Nav.Styles'
import { Avatar, UserInfoType } from './../Avatar/Avatar'
import { NavSubMenu } from './NavSubMenu'
import ImenuItem from './NavInterface'

export const styles = {
  listItemLink: `text-[15px] md:text-base font-medium text-cu-black-600 hover:text-cu-red`,
}

export interface NavAsideProps {
  menu?: ImenuItem[]
  LoggedInUser?: false
  LoggedOutUser?: false
  LoggedMenu?: null
  userNoImage?: null
}

export interface NavAsideLoggedInProps {
  menu?: ImenuItem[]
  LoggedInUser?: false
  LoggedOutUser: true
  LoggedMenu?: null
  userNoImage?: null
}

export interface NavAsideLoggedOutProps {
  menu?: ImenuItem[]
  LoggedInUser: true
  LoggedOutUser?: false
  LoggedMenu: ImenuItem[]
  userNoImage: UserInfoType
}

export const NavAside = ({
  menu,
  LoggedInUser,
  LoggedOutUser,
  LoggedMenu,
  userNoImage,
}: NavAsideProps | NavAsideLoggedInProps | NavAsideLoggedOutProps) => {
  return (
    <div className="flex items-center gap-5 ml-auto nav__aside sm:gap-6">
      <MagnifyingGlassIcon className="w-5 h-5 text-cu-black-400" />
      <ul className="flex items-center gap-5 py-1 pl-5 border-l border-solid sm:gap-6 sm:pl-6 border-cu-black-100">
        {menu &&
          menu.map((menuItem: ImenuItem, index: number) => (
            <li key={index} className="block">
              <a href={menuItem.href} className={styles.listItemLink}>
                {menuItem.title}
              </a>
            </li>
          ))}
        {LoggedOutUser && (
          <li>
            <a href="/" className={styles.listItemLink}>
              Login
            </a>
          </li>
        )}
        {LoggedInUser ? (
          LoggedMenu ? (
            <li className={NavMenuItemWrapperStyles.menuWrapper}>
              <span className={navMenuItemStyles.navItemWrapper} data-menu-item="profile">
                <a href="/" className={navMenuItemStyles.navParentItem}>
                  <Avatar user={userNoImage} size="xs" rounded="full" />
                </a>
              </span>
              <NavSubMenu submenu={LoggedMenu} isSubMenu={true} isInnerSubMenu={false} id="profile" />
            </li>
          ) : (
            <li>
              <a href="/" className={styles.listItemLink}>
                Logout
              </a>
            </li>
          )
        ) : (
          <></>
        )}
      </ul>
    </div>
  )
}

NavAside.displayName = 'Nav.Aside'
