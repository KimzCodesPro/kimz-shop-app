export const ADDRESS_TYPE_CONFIG = {
  home: { color: "success", icon: "home", label: "common_addressHome" },
  apartment: {
    color: "warning",
    icon: "building",
    label: "common_addressApartment",
  },
  office: { color: "info", icon: "briefcase", label: "common_addressOffice" },
  other: { color: "danger", icon: "map-pin", label: "common_addressOther" },
} as const;
