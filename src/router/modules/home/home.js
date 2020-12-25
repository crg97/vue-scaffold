import MainOne from './mainOne'
import MainTwo from './mainTwo'
const home = {
  path: '/',
  name: 'home',
  component: () => import('@/views/Home'),
  children: [
    MainOne,
    MainTwo
  ]
}
export default home
