import { ScreenLayout } from "@/src/components/ui/layout";
import { Tabs } from "@/src/components/ui/navigations";
import { Text, View } from "react-native";

export default function Home() {
  return (
    <ScreenLayout>
      <Tabs
        defaultTab="home"
        items={[
          {
            tabPrefix: "home",
            tabTitle: "Home",
            tabContent: (
              <View>
                <Text>sadasd</Text>
              </View>
            ),
          },
          {
            tabPrefix: "profile",
            tabTitle: "Profile",
            tabContent: (
              <View>
                <Text>xxxx</Text>
              </View>
            ),
          },
        ]}
      />
    </ScreenLayout>
  );
}
