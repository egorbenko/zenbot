// show: meta.label -> name
// name: component name
// meta.label: display label

// lazy loading Components
const Chartjs = resolve => require(['../pages/settings/Chartjs.vue'], resolve)

export default [
  {
    name: 'Dashboard',
    path: '/',
    meta: {
      icon: 'fa-tachometer'
    },
    component: require('../pages/dashboard')
  },
  {
    name: 'Settings',
    path: '/settings',
    meta: {
      icon: 'fa-cog',
      expanded: false
    },
    component: require('../pages/settings'),

    // children: [
    //   {
    //     name: 'Chartjs',
    //     path: 'chartjs',
    //     component: Chartjs
    //   }
    // ]
  }
]
