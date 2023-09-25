import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import {
  Activity,
  AddEmail,
  ChangePassword,
  Channels,
  DarkMode,
  EditProfile,
  EmailAddress,
  FlagPost,
  Hyperlink,
  ImagePreview,
  Login,
  MessageDetail,
  Messages,
  NewMessage,
  NewMessagePreview,
  NewPost,
  Notifications,
  PostDetail,
  PostImagePreview,
  PostPreview,
  PostReply,
  Preferences,
  PushNotifications,
  Register,
  Search,
  SelectUser,
  Tags,
  Troubleshoot,
  TwoFactorAuth,
  UserInformation,
  InstanceLoading,
} from '../screens';
import { useTheme } from '../theme';
import { RootStackParamList } from '../types';

import TabNavigator from './TabNavigator';

const RootStack = createStackNavigator<RootStackParamList>();

type RootStackNavigatorProps = {
  initialRouteName?: keyof RootStackParamList | undefined;
};
export default function RootStackNavigator(props: RootStackNavigatorProps) {
  const { initialRouteName } = props;
  const { navHeader, navModal, navNoShadow, shadow } = useTheme();

  return (
    <RootStack.Navigator initialRouteName={initialRouteName}>
      <RootStack.Group
        screenOptions={{
          ...navHeader,
          presentation: 'card',
        }}
      >
        <RootStack.Screen
          name="InstanceLoading"
          component={InstanceLoading}
          options={{ title: '', headerShown: false }}
        />
        <RootStack.Screen
          name="TabNav"
          component={TabNavigator}
          options={{ title: '', headerShown: false }}
        />
        <RootStack.Screen
          name="Activity"
          component={Activity}
          options={{ title: t('Activity') }}
        />
        <RootStack.Screen
          name="AddEmail"
          component={AddEmail}
          options={{ title: t('New Email Address') }}
        />
        <RootStack.Screen
          name="ChangePassword"
          component={ChangePassword}
          options={{ title: t('Change Password') }}
        />
        <RootStack.Screen
          name="EditProfile"
          component={EditProfile}
          options={{ title: '' }}
        />
        <RootStack.Screen
          name="EmailAddress"
          component={EmailAddress}
          options={{ title: t('Email Address') }}
        />
        <RootStack.Screen
          name="ImagePreview"
          component={ImagePreview}
          options={{ headerShown: false }}
        />
        <RootStack.Screen
          name="Login"
          component={Login}
          options={{ title: '' }}
        />
        <RootStack.Screen
          name="Messages"
          component={Messages}
          options={{ title: t('Messages') }}
        />
        <RootStack.Screen
          name="MessageDetail"
          component={MessageDetail}
          options={{ title: t('Message') }}
        />
        <RootStack.Screen
          name="Notifications"
          component={Notifications}
          options={{ title: t('Notifications') }}
        />
        <RootStack.Screen
          name="PostDetail"
          component={PostDetail}
          options={{ title: '' }}
        />
        <RootStack.Screen
          name="Register"
          component={Register}
          options={{ title: t('Register') }}
        />
        <RootStack.Screen
          name="Search"
          component={Search}
          options={{ headerShown: false }}
        />
        <RootStack.Screen
          name="Preferences"
          component={Preferences}
          options={{ title: t('Preferences') }}
        />
        <RootStack.Screen
          name="TwoFactorAuth"
          component={TwoFactorAuth}
          options={{ title: '' }}
        />
        <RootStack.Screen
          name="UserInformation"
          component={UserInformation}
          options={{ title: '' }}
        />
      </RootStack.Group>
      <RootStack.Group
        screenOptions={{ ...navHeader, ...navModal, presentation: 'modal' }}
      >
        <RootStack.Screen
          name="Channels"
          component={Channels}
          options={{ title: t('Channels'), ...navNoShadow, ...navModal }}
          initialParams={{ prevScreen: 'Home' }}
        />
        <RootStack.Screen
          name="FlagPost"
          component={FlagPost}
          options={{ title: t('Flag'), ...navModal }}
        />
        <RootStack.Screen
          name="HyperLink"
          component={Hyperlink}
          options={{ ...navModal }}
        />
        <RootStack.Screen
          name="NewMessage"
          component={NewMessage}
          options={{ title: t('New Message'), ...navModal, ...navNoShadow }}
          initialParams={{ users: [] }}
        />
        <RootStack.Screen
          name="NewMessagePreview"
          component={NewMessagePreview}
          options={{ title: t('New Message'), ...navModal }}
        />
        <RootStack.Screen
          name="NewPost"
          component={NewPost}
          options={{ title: t('New Post'), ...navModal }}
        />
        <RootStack.Screen
          name="PostPreview"
          component={PostPreview}
          options={{ title: t('New Post'), ...navModal }}
        />
        <RootStack.Screen
          name="PostReply"
          component={PostReply}
          options={{ title: '', ...navModal }}
        />
        <RootStack.Screen
          name="SelectUser"
          component={SelectUser}
          options={{ title: t('Select User'), ...navModal, ...navNoShadow }}
        />
        <RootStack.Screen
          name="PostImagePreview"
          component={PostImagePreview}
          options={{ headerShown: false }}
        />
        <RootStack.Screen
          name="Tags"
          component={Tags}
          options={{ title: t('Tags'), ...navModal }}
        />
        <RootStack.Screen
          name="DarkMode"
          component={DarkMode}
          options={{ title: t('Dark Mode'), ...navModal }}
        />
        <RootStack.Screen
          name="Troubleshoot"
          component={Troubleshoot}
          options={{ title: t('Error Details'), headerStyle: shadow }}
        />
        <RootStack.Screen
          name="PushNotificationsPreferences"
          component={PushNotifications}
          options={{ title: t('Push Notification'), ...navModal }}
        />
      </RootStack.Group>
    </RootStack.Navigator>
  );
}
