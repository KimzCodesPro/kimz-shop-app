import { userPlaceholder } from "@/src/assets/images";
import { UserGreeting } from "@/src/components/ui/display";
import { ScreenLayout } from "@/src/components/ui/layout";
import { RowNav, TopBar } from "@/src/components/ui/navigations";
import { RowsGroup } from "./components";
import useHomeScreen from "./useHomeScreen";

const HomeScreen = () => {
  const { accountGroups } = useHomeScreen();

  return (
    <ScreenLayout scrollable hasTabBar customTopBar={<TopBar title="Account" />}>
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
    </ScreenLayout>
  );
};

export default HomeScreen;
