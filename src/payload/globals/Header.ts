import type { GlobalConfig } from 'payload';

import { loggedIn } from '@/payload/access/loggedIn';
import { publishedOr } from '@/payload/access/publishedOr';
import { admins } from '@/payload/access/admins';

export const Header: GlobalConfig = {
  access: {
    read: publishedOr(loggedIn),
    update: admins,
  },
  fields: [
    {
      name: 'navItems',
      label: 'Einträge in der Hauptnavigation',
      fields: [
        {
          name: 'pages',
          label: 'Verlinkte Seite',
          relationTo: 'pages',
          type: 'relationship',
        },
      ],
      maxRows: 3,
      type: 'array',
    },
  ],
  slug: 'header',
};
