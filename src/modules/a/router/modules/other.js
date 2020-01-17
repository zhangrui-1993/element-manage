const InnerLayout = () => import( /* webpackChunkName:'innerLayout' */ '@/layouts/innerLayout');
const Print = () => import( /* webpackChunkName:'print' */ '@/modules/a/pages/other/print');
const Excel = () => import( /* webpackChunkName:'excel' */ '@/modules/a/pages/other/excel');
const HtmlToCanvas = () => import( /* webpackChunkName:'htmlToCanvas' */ '@/modules/a/pages/other/htmlToCanvas');
const AMap = () => import( /* webpackChunkName:'aMap' */ '@/modules/a/pages/other/aMap');
const DragDialog = () => import( /* webpackChunkName:'dragDialog' */ '@/modules/a/pages/other/dragDialog');
const Carousel = () => import( /* webpackChunkName:'carousel' */ '@/modules/a/pages/other/carousel');
const ComponentDemo = () => import( /* webpackChunkName:'componentDemo' */ '@/modules/a/pages/other/componentDemo');
const Copy = () => import( /* webpackChunkName:'copy' */ '@/modules/a/pages/other/copy');
const FileToBase64 = () => import( /* webpackChunkName:'fileToBase64' */ '@/modules/a/pages/other/fileToBase64');

const route = {
  name: 'Other',
  path: '/other',
  component: InnerLayout,
  meta: {
    title: '其他功能',
    icon: 'other'
  },
  children: [{
    name: 'Excel',
    path: '/other/excel',
    component: Excel,
    meta: {
      title: 'excel',
    }
  }, {
    name: 'AMap',
    path: '/other/aMap',
    component: AMap,
    meta: {
      title: '地图',
    }
  }, {
    name: 'Print',
    path: '/other/print',
    component: Print,
    meta: {
      title: '打印',
    }
  }, {
    name: 'DragDialog',
    path: '/other/dragDialog',
    component: DragDialog,
    meta: {
      title: '拖拽Dialog',
    }
  },
  //  {
  //   name: 'Carousel',
  //   path: '/other/carousel',
  //   component: Carousel,
  //   meta: {
  //     title: '轮播图',
  //   }
  // },
   {
    name: 'ComponentDemo',
    path: '/other/componentDemo',
    component: ComponentDemo,
    meta: {
      title: '小组件',
    }
  }, {
    name: 'Copy',
    path: '/other/copy',
    component: Copy,
    meta: {
      title: '快捷复制',
    }
  }, {
    name: 'HtmlToCanvas',
    path: '/other/htmlToCanvas',
    component: HtmlToCanvas,
    meta: {
      title: 'htmlToCanvas',
    }
  }, {
    name: 'FileToBase64',
    path: '/other/fileToBase64',
    component: FileToBase64,
    meta: {
      title: 'fileToBase64',
    }
  }]
}

export default route;
