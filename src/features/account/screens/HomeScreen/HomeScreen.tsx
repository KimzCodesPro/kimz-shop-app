import { userPlaceholder } from "@/assets/images";
import { UserGreeting } from "@/components/ui/display";
import { Button, RadioGroup, SwitchGroup } from "@/components/ui/inputs";
import { ScreenLayout } from "@/components/ui/layout";
import { TopBar } from "@/components/ui/navigations";
import { BottomSheet, Modal } from "@/components/ui/overlay";
import { View } from "react-native";
import { NavigationList, ThemeRadioGroup } from "./components";
import styles from "./homeScreenStyles";
import useHomeScreen from "./useHomeScreen";

const HomeScreen = () => {
  const {
    t,
    pageNavigationList,
    logoutConfirm,
    setLogoutConfirm,
    languageOptions,
    selectedLanguage,
    onSelectLanguage,
    languageBottomSheetRef,
    themeBottomSheetRef,
    themeOptions,
    selectedTheme,
    onSelectTheme,
    notificationsBottomSheetRef,
    notificationOptions,
    onToggleNotification,
  } = useHomeScreen();

  return (
    <>
      <ScreenLayout
        scrollable
        hasTabBar
        renderTopBar={() => <TopBar title={t("account_account")} />}
      >
        <UserGreeting
          size="lg"
          imgSrc={userPlaceholder}
          userName="Kareem Nour"
          meta="kareem@gmail.com"
        />
        {/* row navigation list  */}
        <NavigationList navigationList={pageNavigationList} />
      </ScreenLayout>
      {/* language bottom sheet */}
      <BottomSheet
        ref={languageBottomSheetRef}
        bottomSheetProps={{ snapPoints: ["25%"] }}
        title={t("account_language")}
      >
        <BottomSheet.Content>
          <RadioGroup
            options={languageOptions}
            selectedValue={selectedLanguage}
            onValueChange={onSelectLanguage}
          />
        </BottomSheet.Content>
      </BottomSheet>
      {/* theme bottom sheet */}
      <BottomSheet
        ref={themeBottomSheetRef}
        bottomSheetProps={{ snapPoints: ["40%"] }}
        title={t("account_theme")}
      >
        <BottomSheet.Content>
          <ThemeRadioGroup
            options={themeOptions}
            selectedValue={selectedTheme}
            onValueChange={onSelectTheme}
          />
        </BottomSheet.Content>
      </BottomSheet>
      {/* notifications bottom sheet */}
      <BottomSheet
        ref={notificationsBottomSheetRef}
        bottomSheetProps={{ snapPoints: ["20%"] }}
        title={t("account_notifications")}
      >
        <BottomSheet.Content>
          <SwitchGroup
            options={notificationOptions}
            onValueChange={onToggleNotification}
          />
        </BottomSheet.Content>
      </BottomSheet>
      {/* logout dialog */}
      <Modal title={t("account_logoutConfirm")} visible={logoutConfirm}>
        <View style={styles.logoutModalContent}>
          <Button
            title={t("common_cancel")}
            onPress={() => setLogoutConfirm(false)}
          />
          <Button
            variant="danger"
            title={t("account_logout")}
            onPress={() => setLogoutConfirm(false)}
          />
        </View>
      </Modal>
    </>
  );
};

export default HomeScreen;
