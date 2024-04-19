import { View, Text } from 'react-native'
import { createDrawerNavigator } from '@react-navigation/drawer'
import DashboardScreen from '../screen/DashboardScreen'
import { metrics } from '../utils/metrics'
import CustomDrawer from '../components/drawer/CustomDrawer'
import { colors } from '../utils/colors'
import TasksIcon from '../assets/icons/TasksIcon'
import { headerStyles, marginConsts } from '../utils/constValues'
import PostsIcon from '../assets/icons/PostsIcon'
import AlbumIcon from '../assets/icons/AlbumIcon'
import Header from '../components/common/Header'
import { DrawerStackParams } from './NavigationTypes'
import PostDetailScreen from '../screen/Post/PostDetailScreen'

const Drawer = createDrawerNavigator<DrawerStackParams>()

const Home = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        drawerType: metrics.screenWidth >= 768 ? 'permanent' : 'front',
        drawerActiveBackgroundColor: colors.background.purple,
        drawerLabelStyle: {
          color: colors.text.purple,
          marginLeft: -marginConsts.medium,
          fontWeight: '700',
        },
        header: props => Header(props),
        sceneContainerStyle: {
          backgroundColor: colors.background.white,
        },
      }}
      drawerContent={props => <CustomDrawer {...props} />}>
      <Drawer.Screen name='Dashboard' component={DashboardScreen} options={{ drawerIcon: ({}) => <TasksIcon fill={colors.text.purple} size={30} /> }} />
      <Drawer.Screen name='Posts' component={DashboardScreen} options={{ drawerIcon: ({}) => <PostsIcon fill={colors.text.purple} size={30} /> }} />
      <Drawer.Screen name='PostDetail' component={PostDetailScreen} options={{ drawerIcon: ({}) => <AlbumIcon fill={colors.text.purple} size={30} /> }} />
      <Drawer.Screen name='Albums' component={PostDetailScreen} options={{ drawerIcon: ({}) => <AlbumIcon fill={colors.text.purple} size={30} /> }} />
    </Drawer.Navigator>
  )
}

export default Home