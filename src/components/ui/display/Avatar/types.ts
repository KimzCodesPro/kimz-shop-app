export type AvatarProps =
  | { size?: "sm" | "md"; enableUploader?: never }
  | { size?: "lg"; enableUploader?: boolean };
