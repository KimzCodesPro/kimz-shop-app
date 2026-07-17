import BreifCase from "./BreifCase";
import Building from "./Building";
import Camera from "./Camera";
import Check from "./Check";
import Chevron from "./Chevron";
import Close from "./Close";
import CreditCard from "./CreditCard";
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
  camera: Camera,
  check: Check,
  "credit-card": CreditCard,
} as const;

export default icons;
