import React from "react";
import lucideIconMap, { LucideIconNames } from "./lucide-icon-config";
interface IconProps {
  icon: LucideIconNames;
  size?: number;
  className?: string;
  strokeWidth?: number;
  defaultIcon?: string;
}

const Icon: React.FC<IconProps> = ({
  icon = "chevron-right",
  size = 18,
  className = "",
  strokeWidth = 2,
  defaultIcon,
}) => {
  const providedIcon = icon || (defaultIcon as string);
  const iconMap = lucideIconMap;
  const iconData =
    iconMap[providedIcon as LucideIconNames] ||
    (defaultIcon && iconMap[defaultIcon as LucideIconNames]);

  if (!iconData) {
    console.error(`Icon "${providedIcon}" not found.`);
    return null; // Or some fallback UI, such as a default icon
  }

  const IconComponent = iconData.component;
  return <IconComponent size={size} className={className} />;
};

export default React.memo(Icon);
