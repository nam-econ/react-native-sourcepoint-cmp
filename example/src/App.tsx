import React from 'react'
import { SafeAreaView, View, Button, Text, ScrollView } from 'react-native'
import { SPConsentManager } from "react-native-sourcepoint-cmp";

const config = {
  accountId: 22,
  propertyId: 999,
  propertyName: "mobile.multicampaign.demo",
  gdprPMId: "488393",
  ccpaPMId: "509688"
}

const consentManager = new SPConsentManager(
  config.accountId,
  config.propertyId,
  config.propertyName
);

export default function App() {
  const [userData, setUserData] = React.useState<{}>({});

  React.useEffect(() => {
    // it's important to wrap `onFinished` and `loadMessage` in a
    // useEffect hook so they only get called once.
    consentManager.onFinished(() => {
      consentManager.getUserData().then(setUserData);
    })
    consentManager.loadMessage();
    consentManager.getUserData().then(setUserData);
  }, []);

  return (
    <SafeAreaView>
      <View>
        <Button title="Load Messages" onPress={() => {
          consentManager.loadMessage();
        }}/>
        <Button title="Load GDPR PM" onPress={() => {
          consentManager.loadGDPRPrivacyManager(config.gdprPMId);
        }}/>
        <Button title="Load CCPA PM" onPress={() => {
          consentManager.loadCCPAPrivacyManager(config.ccpaPMId);
        }}/>
        <Button title="Clear All" onPress={() => {
          consentManager.clearLocalData()
          consentManager.getUserData().then(setUserData)
        }}/>
      </View>
      <ScrollView>
        <ScrollView horizontal={true}>
          <Text>
            {JSON.stringify(userData, undefined, ' ')}
          </Text>
        </ScrollView>
      </ScrollView>
    </SafeAreaView>
  );
}
