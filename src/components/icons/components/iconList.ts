import Chevron from "./Chevron";
import Eye from "./Eye";
import EyeOff from "./EyeOff";
import Lock from "./Lock";
import Mail from "./Mail";
import User from "./User";

const icons = {
  eye: Eye,
  "eye-off": EyeOff,
  lock: Lock,
  user: User,
  chevron: Chevron,
  mail: Mail,
} as const;

export default icons;
