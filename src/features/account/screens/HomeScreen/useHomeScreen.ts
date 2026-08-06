const useHomeScreen = () => {
  const accountGroups = [
    {
      title: "Account",
      rows: [
        {
          icon: "user",
          title: "Edit Profile",
          trailing: "chevron",
          onPress: () => {},
        },
        {
          icon: "lock",
          title: "Change Password",
          trailing: "chevron",
          onPress: () => {},
        },
      ],
    },
    {
      title: "Shopping",
      rows: [
        {
          icon: "map-pin",
          title: "Shipping",
          trailing: "chevron",
          onPress: () => {},
        },
        {
          icon: "credit-card",
          title: "Payment Methods",
          trailing: "chevron",
          onPress: () => {},
        },
        {
          icon: "shopping-bag",
          title: "Store You Follow",
          trailing: "chevron",
          onPress: () => {},
        },
        {
          icon: "truck",
          title: "My Orders",
          trailing: "chevron",
          onPress: () => {},
        },
      ],
    },
    {
      title: "Preferences",
      rows: [
        {
          icon: "bell",
          title: "Notifications",
          trailing: "chevron",
          onPress: () => {},
        },
        {
          icon: "shield",
          title: "Security",
          trailing: "chevron",
          onPress: () => {},
        },
        {
          icon: "world",
          title: "Language",
          trailing: "chevronWithValue",
          trailingValue: "English",
          onPress: () => {},
        },
        {
          icon: "palette",
          title: "Theme",
          trailing: "chevronWithValue",
          trailingValue: "Light",
          onPress: () => {},
        },
      ],
    },
    {
      title: "Support",
      rows: [
        {
          icon: "help",
          title: "Help & Support",
          trailing: "chevron",
          onPress: () => {},
        },
        {
          icon: "file-text",
          title: "Legal & Policies",
          trailing: "chevron",
          onPress: () => {},
        },
        {
          variant: "danger",
          icon: "logout",
          title: "Logout",
          trailing: "chevron",
          onPress: () => {},
        },
      ],
    },
  ] as const;

  return { accountGroups };
};

export default useHomeScreen;
