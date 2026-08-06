import { userPlaceholder } from "@/src/assets/images";
import { UserGreeting } from "@/src/components/ui/display";
import { Button, RadioGroup } from "@/src/components/ui/inputs";
import { ScreenLayout } from "@/src/components/ui/layout";
import { RowNav, TopBar } from "@/src/components/ui/navigations";
import { BottomSheet, Modal } from "@/src/components/ui/overlay";
import { View } from "react-native";
import { RowsGroup } from "./components";
import styles from "./screenStyles";
import useHomeScreen from "./useHomeScreen";

const HomeScreen = () => {
  const {
    t,
    accountGroups,
    logoutConfirm,
    setLogoutConfirm,
    languageOptions,
    selectedLanguage,
    onSelectLanguage,
    languageBottomSheetRef,
    themeBottomSheetRef,
  } = useHomeScreen();

  return (
    <ScreenLayout
      scrollable
      hasTabBar
      customTopBar={<TopBar title={t("account_account")} />}
    >
      <UserGreeting
        size="lg"
        imgSrc={userPlaceholder}
        userName="Kareem Nour"
        meta="kareem@gmail.com"
      />
      {accountGroups.map((group) => (
        <RowsGroup key={group.title} title={group.title}>
          {group.rows.map((row) => (
            <RowNav key={row.title} {...row} />
          ))}
        </RowsGroup>
      ))}
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
        bottomSheetProps={{ snapPoints: ["25%"] }}
        title={t("account_theme")}
      >
        <BottomSheet.Content>
          {/* Theme selection content goes here */}
        </BottomSheet.Content>
      </BottomSheet>
      {/* logout dialog */}
      <Modal title={t("account_logoutConfirm")} visible={logoutConfirm}>
        <View style={styles.modalContent}>
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
    </ScreenLayout>
  );
};

export default HomeScreen;
