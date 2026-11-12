// Raw numbers — useStyles runs them through HS/VS. `icon` is an Icon size.
export const QUANTITY_STEPPER_SIZE = {
  sm: {
    width: 70,
    height: 28,
    button: 20,
    icon: "xs",
  },
  md: {
    width: 86,
    height: 32,
    button: 24,
    icon: "sm",
  },
  lg: {
    width: 100,
    height: 40,
    button: 28,
    icon: "md",
  },
} as const;
