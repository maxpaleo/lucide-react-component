import Icon from "./Icon";
import lucideIconMap, { LucideIconNames } from "./lucide-icon-config";
/**
 * Lucide React Icon - A React component that displays a Lucide icon
 * @param icon - The icon to be displayed - All icons can be seen here: https://lucide.dev/icons/
 * @param size - The size of the icon
 * @param className - The class name of the icon
 * @param strokeWidth - The stroke width of the icon
 * @param defaultIcon - The default icon to be displayed if the icon is not found
 * @returns React.FC - A react functional component
 *
 * @example
 * <Icon icon="icon" size={18} />
 */
export default Icon;
export { lucideIconMap, LucideIconNames };
