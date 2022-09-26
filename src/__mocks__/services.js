import { v4 as uuid } from 'uuid';

export const services = [
  {
    id: uuid(),
    createdAt: '27/03/2019',
    description: 'Dropbox is a file hosting service that offers cloud storage, file synchronization, a personal cloud.',
    media: '/static/images/products/product_1.png',
    title: 'GBWU900554',
    subtitle: 'Agent v0.9.5.2575',
    uptime: '7.32 hrs',
    healthy: true,
    totalDownloads: 594
  },
  {
    id: uuid(),
    createdAt: '31/03/2019',
    description: 'Medium is an online publishing platform developed by Evan Williams, and launched in August 2012.',
    media: '/static/images/products/product_2.png',
    title: 'GBWU900923',
    subtitle: 'Agent v0.9.5.2575',
    uptime: '0 hrs',
    healthy: false,
    totalDownloads: 0
  },
  {
    id: uuid(),
    createdAt: '03/04/2019',
    description: 'Slack is a cloud-based set of team collaboration tools and services, founded by Stewart Butterfield.',
    media: '/static/images/products/product_3.png',
    title: 'GBWU90076886',
    subtitle: 'Agent v0.9.5.2575',
    uptime: '2.12 hrs',
    healthy: true,
    totalDownloads: 857
  },
  {
    id: uuid(),
    createdAt: '04/04/2019',
    description: 'Lyft is an on-demand transportation company based in San Francisco, California.',
    media: '/static/images/products/product_4.png',
    title: 'GBWU70036654',
    subtitle: 'Controller v0.9.5.2575',
    uptime: '7.33 hrs',
    healthy: true,
    totalDownloads: 406
  },
  {
    id: uuid(),
    createdAt: '04/04/2019',
    description: 'GitHub is a web-based hosting service for version control of code using Git.',
    media: '/static/images/products/product_5.png',
    title: 'GBWU73006654',
    subtitle: 'Node v0.9.5.2575',
    uptime: '24.75 hrs',
    healthy: true,
    totalDownloads: 835
  },
  {
    id: uuid(),
    createdAt: '04/04/2019',
    description: 'Squarespace provides software as a service for website building and hosting. Headquartered in NYC.',
    media: '/static/images/products/product_6.png',
    title: 'GBWU70036654',
    subtitle: 'Node v0.9.5.2575',
    uptime: '0 hrs',
    healthy: false,
    totalDownloads: 0
  }
];
