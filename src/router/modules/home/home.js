import MainOne from './mainOne'
import MainTwo from './mainTwo'
const home = {
  path: '/',
  name: 'home',
  redirect: '/mainOne',
  component: () => import('@/views/Home'),
  children: [
    MainOne,
    MainTwo
  ]
}
export default home
