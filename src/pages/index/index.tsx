import { appStore } from '~/stores/app'

export default function Index() {
  return (
    <div>
      <div>这里是index</div>
      <div>
        这里是全局状态：
        {JSON.stringify(appStore)}
      </div>
      <div class="text-red-500">
        这里是unocss
      </div>
      <div>
        这里是路由跳转
        <a href="/about">about</a>
      </div>
    </div>
  )
}
