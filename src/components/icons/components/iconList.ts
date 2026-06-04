import Chevron from "./Chevron";
import Eye from "./Eye";
import EyeOff from "./EyeOff";
import Lock from "./Lock";
import User from "./User";

const icons = {
  eye: Eye,
  "eye-off": EyeOff,
  lock: Lock,
  user: User,
  chevron: Chevron,
} as const;

export default icons;
