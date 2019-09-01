  {
    path: '/coach',
    component: Layout,
    meta: { title: '教练管理', icon: 'example' },
    children: [
      {
        path: 'index',
        name: 'coach',
        component: () => import('@/views/coach/index'),
        meta: { title: '教练', icon: 'form' }
      }
    ]
  },
  {
    path: '/user',
    component: Layout,
    meta: { title: '人员管理', icon: 'example' },
    children: [
      {
        path: 'index',
        name: 'user',
        component: () => import('@/views/user/index'),
        meta: { title: '人员', icon: 'form' }
      }
    ]
  },
  {
    path: '/course_topic',
    component: Layout,
    meta: { title: '课程主题管理', icon: 'example' },
    children: [
      {
        path: 'index',
        name: 'course_topic',
        component: () => import('@/views/course_topic/index'),
        meta: { title: '课程主题', icon: 'form' }
      }
    ]
  },
  {
    path: '/course',
    component: Layout,
    meta: { title: '课程管理', icon: 'example' },
    children: [
      {
        path: 'index',
        name: 'course',
        component: () => import('@/views/course/index'),
        meta: { title: '课程', icon: 'form' }
      }
    ]
  },
  {
    path: '/class_topic_type',
    component: Layout,
    meta: { title: '课程主题类型管理', icon: 'example' },
    children: [
      {
        path: 'index',
        name: 'class_topic_type',
        component: () => import('@/views/class_topic_type/index'),
        meta: { title: '课程主题类型', icon: 'form' }
      }
    ]
  },
  {
    path: '/member_card',
    component: Layout,
    meta: { title: '会员卡管理', icon: 'example' },
    children: [
      {
        path: 'index',
        name: 'member_card',
        component: () => import('@/views/member_card/index'),
        meta: { title: '会员卡', icon: 'form' }
      }
    ]
  },
  {
    path: '/admin',
    component: Layout,
    meta: { title: '健身房管理员管理', icon: 'example' },
    children: [
      {
        path: 'index',
        name: 'admin',
        component: () => import('@/views/admin/index'),
        meta: { title: '健身房管理员', icon: 'form' }
      }
    ]
  },
  {
    path: '/article',
    component: Layout,
    meta: { title: '健身房文章管理', icon: 'example' },
    children: [
      {
        path: 'index',
        name: 'article',
        component: () => import('@/views/article/index'),
        meta: { title: '健身房文章', icon: 'form' }
      }
    ]
  },
  {
    path: '/banner',
    component: Layout,
    meta: { title: '广告位管理', icon: 'example' },
    children: [
      {
        path: 'index',
        name: 'banner',
        component: () => import('@/views/banner/index'),
        meta: { title: '广告位', icon: 'form' }
      }
    ]
  },
