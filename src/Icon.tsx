// import React from "react";
// import lucideIconMap, { LucideIconNames } from "./lucide-icon-config";
// interface IconProps {
//   icon: LucideIconNames;
//   size?: number;
//   className?: string;
//   strokeWidth?: number;
// }

// const Icon: React.FC<IconProps> = ({
//   icon = "chevron-right",
//   size = 18,
//   className = "",
//   strokeWidth = 2,
// }) => {
//   const providedIcon = icon;
//   const iconMap = lucideIconMap;
//   const iconData = iconMap[providedIcon as LucideIconNames];

//   if (!iconData) {
//     console.error(`Icon "${providedIcon}" not found.`);
//     return null;
//   }

//   const IconComponent = iconData.component;
//   return <IconComponent size={size} className={className} />;
// };

// export default React.memo(Icon);

/**
 *
 *
 */

import React from "react";
import type { LucideIconNames } from "./lucide-icon-config";
import lucideIconMap from "./lucide-icon-config";

interface IconProps {
  icon: LucideIconNames;
  size?: number;
  className?: string;
  strokeWidth?: number;
}

// const Icon: React.FC<IconProps> = ({ icon = "chevron-right", size = 18, className = "", strokeWidth = 2 }) => {
//   const providedIcon = icon;
//   const iconMap = lucideIconMap;
//   const iconData = iconMap[providedIcon as LucideIconNames];
//   if (!iconData) return null;
//   const IconComponent = iconData.component;
//   return <IconComponent size={size} className={className} strokeWidth={strokeWidth} />;
// };

function Icon({ icon = "chevron-right", size = 18, className = "", strokeWidth = 2 }: IconProps) {
  const providedIcon = icon;
  const iconMap = lucideIconMap;
  const iconData = lucideIconMap[icon];
  if (!iconData) return null;
  const IconComponent = iconData.component;
  return <IconComponent size={size} className={className} strokeWidth={strokeWidth} />;
}

export default Icon;
export type { LucideIconNames };
