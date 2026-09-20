import { avatarSample } from "@/assets/images";
import { UserGreeting } from "@/components/ui/display";
import {
  Button,
  ImageRadioGroup,
  RadioGroup,
  SwitchGroup,
} from "@/components/ui/inputs";
import { ScreenLayout } from "@/components/ui/layout";
import { TopBar } from "@/components/ui/navigations";
import { BottomSheet, Modal } from "@/components/ui/overlay";
import { View } from "react-native";
import styles from "./accountScreenStyles";
import { NavigationList } from "./components";
import useAccountScreen from "./useAccountScreen";

const AccountScreen = () => {
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
  } = useAccountScreen();

  return (
    <>
      <ScreenLayout
        scrollable
        hasTabBar
        renderTopBar={() => <TopBar title={t("account_title")} />}
      >
        <UserGreeting
          size="lg"
          imgSrc={avatarSample}
          userName="Kareem Nour"
          meta="kareem@gmail.com"
        />
        {/* row navigation list  */}
        <NavigationList navigationList={pageNavigationList} />
      </ScreenLayout>
      {/* language bottom sheet */}
      <BottomSheet
        ref={languageBottomSheetRef}
        bottomSheetProps={{ snapPoints: ["28%"] }}
        title={t("account_rowLanguage")}
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
        bottomSheetProps={{ snapPoints: ["41%"] }}
        title={t("account_rowTheme")}
      >
        <BottomSheet.Content>
          <ImageRadioGroup
            options={themeOptions}
            selectedValue={selectedTheme}
            onValueChange={onSelectTheme}
          />
        </BottomSheet.Content>
      </BottomSheet>
      {/* notifications bottom sheet */}
      <BottomSheet
        ref={notificationsBottomSheetRef}
        bottomSheetProps={{ snapPoints: ["19%"] }}
        title={t("account_rowNotifications")}
      >
        <BottomSheet.Content>
          <SwitchGroup
            options={notificationOptions}
            onValueChange={onToggleNotification}
          />
        </BottomSheet.Content>
      </BottomSheet>
      {/* logout dialog */}
      <Modal title={t("logoutDialog_prompt")} visible={logoutConfirm}>
        <View style={styles.logoutModalContent}>
          <Button
            title={t("common_cancel")}
            onPress={() => setLogoutConfirm(false)}
          />
          <Button
            variant="link-danger"
            title={t("logoutDialog_confirmButton")}
            onPress={() => setLogoutConfirm(false)}
          />
        </View>
      </Modal>
    </>
  );
};

export default AccountScreen;
