import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import notifee, { AndroidImportance, TriggerType, TimestampTrigger } from '@notifee/react-native';
import { useEffect } from 'react';

notifee.onBackgroundEvent(async ({ type, detail }) => {
  console.log('onBackgroundEvent', type, detail);
});



export default function App() {
  useEffect(() => {
    const createTriggerNotification = async () => {
      const channelId = await notifee.createChannel({
        id: 'default',
        name: 'Default Channel',
        importance: AndroidImportance.HIGH,
      });

      await notifee.requestPermission()
    
      const trigger: TimestampTrigger = {
        type: TriggerType.TIMESTAMP,
        timestamp: Date.now() + 5000,
      };
    
      // Create the notification
      await notifee.createTriggerNotification(
        {
          title: 'Notification Title',
          body: 'Click me to open the app!',
          android: {
            channelId,
            pressAction: {
              id: 'default',
              launchActivity: 'default',
            },
          },
        },
        trigger,
      );
    }
    createTriggerNotification();
  }, []);

  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
