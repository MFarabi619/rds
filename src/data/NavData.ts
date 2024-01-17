export const NavDataSingle = [
  {
    href: '/link-1',
    title: 'Link1',
  },
  {
    href: '/link-2',
    title: 'Link2',
    submenu: [
      {
        href: '/link-2.1',
        title: 'Link2.1',
        submenu: [
          {
            href: '/link-2.1.1',
            title: 'Link2.1.1',
          },
          {
            href: '/link-2.1.2',
            title: 'Link2.1.2',
            submenu: [
              {
                href: '/link-2.1.1',
                title: 'Link2.2.1',
              },
              {
                href: '/link-2.1.2',
                title: 'Link2.3.2',
                submenu: [
                  {
                    href: '/link-2.1.1',
                    title: 'Link2.4.1',
                  },
                  {
                    href: '/link-2.1.2',
                    title: 'Link2.5.2',
                  },
                  {
                    href: '/link-2.1.3',
                    title: 'Link2.6.3',
                  },
                ],
              },
              {
                href: '/link-2.1.3',
                title: 'Link2.1.3',
              },
            ],
          },
          {
            href: '/link-2.1.3',
            title: 'Link2.1.3',
          },
        ],
      },
      {
        href: '/link-2.2',
        title: 'Link2.2',
      },
      {
        href: '/link-2.3',
        title: 'Link2.3',
      },
    ],
  },
  {
    href: '/link-3',
    title: 'Link3',
  },
  {
    href: '/link-4',
    title: 'Link4',
    submenu: [
      {
        href: '/link-4.1',
        title: 'Link4.1',
      },
      {
        href: '/link-4.2',
        title: 'Link4.2',
      },
      {
        href: '/link-4.3',
        title: 'Link4.3',
      },
    ],
  },
  {
    href: '/link-5',
    title: 'Link5',
  },
  {
    href: '/link-6',
    title: 'Link6',
  },
]

export const NavAsideData = [
  {
    href: 'https://futurefunder.carleton.ca/',
    title: 'Give',
  },
  {
    href: 'https://admissions.carleton.ca/apply/',
    title: 'Apply',
  },
]

export const NavAsideLoggedInOptions = [
  {
    href: '/profile',
    title: 'Profile',
  },
  {
    href: '/',
    title: 'Log OUT',
  },
]
