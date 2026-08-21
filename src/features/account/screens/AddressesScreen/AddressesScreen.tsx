import { AddressCard } from "@/components/ui/display";
import { Button } from "@/components/ui/inputs";
import { ScreenLayout, VerticalScrollView } from "@/components/ui/layout";
import { TopBar } from "@/components/ui/navigations";
import { useTranslation } from "@/hooks";
import { useRouter } from "expo-router";
import { useState } from "react";
import { View } from "react-native";
import styles from "./addressesScreenStyles";

const addresses = [
  {
    id: "1",
    city: "Cairo",
    address: "12 El Nasr Street, Nasr City",
    type: "home",
  },
  {
    id: "2",
    city: "Giza",
    address: "45 Gameat El Dewal El Arabeya, Mohandessin",
    type: "office",
  },
  {
    id: "3",
    city: "Alexandria",
    address: "8 El Geish Road, Sidi Gaber",
    type: "apartment",
  },
] as const;

const AddressesScreen = () => {
  const { t } = useTranslation();
  const router = useRouter();
  const [selectedId, setSelectedId] = useState<string>(addresses[0].id);

  return (
    <ScreenLayout
      renderTopBar={() => <TopBar title={t("account_address")} goBack />}
    >
      {/* The list scrolls on its own so the button below stays pinned. */}
      <VerticalScrollView style={styles.scrollView}>
        <View style={styles.list}>
          {addresses.map((item) => (
            <AddressCard
              key={item.id}
              city={item.city}
              address={item.address}
              type={item.type}
              isSelected={selectedId === item.id}
              onPress={() => setSelectedId(item.id)}
            />
          ))}
        </View>
      </VerticalScrollView>

      <Button
        title={t("account_addNewAddress")}
        onPress={() => router.push("/account/addAddress")}
      />
    </ScreenLayout>
  );
};

export default AddressesScreen;
