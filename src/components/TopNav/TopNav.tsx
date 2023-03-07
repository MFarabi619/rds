import { Disclosure } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'
import React from 'react'
import shield from '../../assets/cu-shield.svg'
import { Avatar, UserInfoType } from '../Avatar/Avatar'
import { DropDown, DropDownItemProps } from '../DropDown/DropDown'
import { Link } from '../Link/Link'
import { Search } from '../Search/Search'

export interface LinkProps {
  title: string
  link: string
  active: boolean
}

export interface mobileLoginProps {
  title: string
  link?: string
  onClick?: (event: React.MouseEvent<MouseEvent | HTMLAnchorElement>) => void
}

export interface TopNavProps {
  title: string
  logoUrl?: string
  brand?: string
  login?: React.ReactNode
  hasSearch?: boolean
  sourceData?: any
  children?: React.ReactNode
  sticky?: boolean
  navLinks?: LinkProps[]
  mobileLinks?: LinkProps[]
  userMenuItems?: any
  userInfo?: UserInfoType
  searchOn?: string
  mobileLogin?: mobileLoginProps
}

export const TopNav = ({
  children,
  logoUrl,
  title,
  brand,
  hasSearch,
  sourceData,
  searchOn,
  navLinks,
  mobileLinks,
  userMenuItems,
  userInfo,
  sticky,
  login,
  mobileLogin,
}: TopNavProps) => {
  const brandLogo = brand ? (
    <div className="flex flex-shrink-0 items-center">
      <h1 className="sr-only"> {title} </h1>
      <img className="h-16 w-auto" src={brand} alt={title} />
    </div>
  ) : (
    <div className="flex flex-shrink-0 items-center">
      <img className="h-10 w-auto" src={shield} alt="Carleton Shield" />
      <h1 className="flex flex-shrink-0 items-center pl-3 pr-2 text-2xl font-semibold">{title}</h1>
    </div>
  )

  return (
    <Disclosure
      as="nav"
      className={` ${
        sticky ? 'sticky' : ''
      } not-prose  relative top-0 z-50 border-t-2 border-cu-red bg-white px-6 shadow-md lg:px-8`}
      id="topNav"
    >
      {({ open }) => (
        <>
          <div className="mx-auto flex h-20 max-w-7xl gap-6">
            {/* Logo  */}
            <div className="flex flex-shrink-0 items-center hover:text-cu-red">
              <Link href={logoUrl ? logoUrl : '/'}>{brandLogo}</Link>
            </div>

            {/* mobile Menu open Button  */}
            <div className="flex items-center lg:hidden">
              <div className="absolute right-4 ml-4">
                {hasSearch && sourceData && (
                  <div className="inline-flex items-center p-2 ">
                    <Search sourceData={sourceData} searchOn={searchOn} />
                  </div>
                )}

                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-cu-red-500">
                  <span className="sr-only">main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
            </div>

            {/* navigation Links  */}
            <ul className="hidden lg:flex lg:flex-1 lg:gap-6">
              {navLinks &&
                navLinks.map((item, index) => (
                  <li
                    key={index}
                    className={`inline-flex items-center border-b-2  px-1 pt-1 text-sm font-medium text-cu-black-800 hover:border-cu-red hover:text-cu-red ${
                      item.active ? 'border-cu-red text-cu-red' : 'border-transparent'
                    }`}
                  >
                    <Link href={item.link}>{item.title}</Link>
                  </li>
                ))}
            </ul>

            {/* Login , search and Other Childrens  */}

            <div className="hidden lg:flex lg:items-center lg:gap-6">
              {/* search */}
              {/* this will just search on title in database , we need to extend it to add other props search on to top nav  */}
              {hasSearch && sourceData && (
                <div className="inline-flex items-center ">
                  <Search sourceData={sourceData} searchOn={searchOn} />
                </div>
              )}
              {children}

              {/* Login */}
              {!userInfo && login}
              {userInfo && !userMenuItems && <Avatar user={userInfo} size="xs" rounded="full" />}
              {userInfo && userMenuItems && (
                <DropDown listItems={userMenuItems} menuAlign="right">
                  <Avatar user={userInfo} size="xs" rounded="full" />
                </DropDown>
              )}
            </div>
          </div>
          {/* Mobile Menu  */}
          {/* active state on mobile */}

          <Disclosure.Panel className="-mx-2 sm:-mx-4 lg:-mx-8 lg:hidden">
            {({ close }) => (
              <>
                <div className="space-y-1 pt-2 pb-3">
                  {mobileLinks &&
                    mobileLinks.map((item, index) => (
                      <Disclosure.Button
                        as="div"
                        key={index}
                        className={`block border-l-4  py-2 pl-3 pr-4 text-base font-medium text-cu-black-800 hover:border-cu-black-200 hover:bg-gray-50 hover:text-cu-red ${
                          item.active
                            ? 'border-l-4 border-cu-red bg-gradient-to-r from-cu-red-50 to-white'
                            : 'border-transparent'
                        }`}
                      >
                        <Link href={item.link}>
                          {/* TODO: error reported here https://itsjira.carleton.ca/browse/WSDEV-2392 */}
                          {/* <span onClick={() => close()}>{item.title}</span> */}
                        </Link>
                      </Disclosure.Button>
                    ))}

                  {/* login button */}
                  {!userInfo && mobileLogin && (
                    <>
                      {/* mobileLogin */}
                      <Disclosure.Button
                        as="div"
                        className={`block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-cu-black-800 hover:border-cu-black-200 hover:bg-gray-50 hover:text-cu-red `}
                      >
                        <Link
                          href={mobileLogin.link ? mobileLogin.link : ''}
                          onClick={(e: any) => {
                            mobileLogin.onClick && e.preventDefault()
                            mobileLogin.onClick && mobileLogin.onClick(e)
                            close()
                          }}
                        >
                          {mobileLogin.title}
                        </Link>
                      </Disclosure.Button>
                    </>
                  )}
                </div>

                {/* userInfo */}
                {userInfo && (
                  <div className="border-t border-gray-200 pt-4 pb-3">
                    <div className="flex items-center px-4">
                      <div className="flex-shrink-0">
                        <Avatar user={userInfo} size="xs" rounded="full" />
                      </div>
                      <div className="ml-3">
                        <div className="text-base font-medium text-gray-800">
                          {userInfo.firstName + ' ' + userInfo.lastName}
                        </div>
                      </div>
                    </div>
                    <div className="mt-3 space-y-1">
                      {userMenuItems &&
                        userMenuItems.map((item: DropDownItemProps, index: any) => (
                          <Disclosure.Button
                            key={index}
                            as="div"
                            className={`block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-cu-black-800 hover:border-cu-black-200 hover:bg-gray-50 hover:text-cu-red `}
                          >
                            <Link
                              href={item.href ? item.href : ''}
                              onClick={(e) => {
                                item.onClick && e.preventDefault()
                                item.onClick && item.onClick(e)
                                close()
                              }}
                            >
                              {item.title}
                            </Link>
                          </Disclosure.Button>
                        ))}
                    </div>
                  </div>
                )}
              </>
            )}
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}
