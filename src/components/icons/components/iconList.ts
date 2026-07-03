import BreifCase from "./BreifCase";
import Building from "./Building";
import Chevron from "./Chevron";
import Close from "./Close";
import Eye from "./Eye";
import EyeOff from "./EyeOff";
import Home from "./Home";
import Lock from "./Lock";
import Mail from "./Mail";
import MapPin from "./MapPin";
import User from "./User";

const icons = {
  eye: Eye,
  "eye-off": EyeOff,
  lock: Lock,
  user: User,
  chevron: Chevron,
  mail: Mail,
  close: Close,
  "map-pin": MapPin,
  "brief-case": BreifCase,
  home: Home,
  building: Building,
} as const;

export default icons;
