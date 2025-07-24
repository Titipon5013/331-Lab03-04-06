
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'


// Modern minimal top bar (YouTube/Google Drive style)
NProgress.configure({
  showSpinner: false,
  trickleSpeed: 200,
  minimum: 0.1
})

const style = document.createElement('style')
style.innerHTML = `
#nprogress {
  pointer-events: none;
}
#nprogress .bar {
  background: #1a73e8 !important;
  position: fixed;
  z-index: 9999;
  top: 0;
  left: 0;
  width: 100%;
  height: 3px !important;
  box-shadow: none !important;
}
#nprogress .peg {
  display: none !important;
}
`
document.head.appendChild(style)

export default {
  install(app, { router }) {
    router.beforeEach((to, from, next) => {
      NProgress.start()
      next()
    })
    router.afterEach(() => {
      NProgress.done()
    })
  }
}
