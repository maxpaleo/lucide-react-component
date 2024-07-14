# Lucide Icon Component

A simple, type-safe React component for displaying Lucide icons with autocomplete functionality.

## Installation

```bash
npm i lucide-icon-component
```

### Usage

```jsx
import Icon from 'lucide-icon-component';

<Icon icon="user-check" size={24} />;
```

### Autocomplete
The icon prop is type-safe, so you can use autocomplete to see all available icons.

<img src="https://github.com/maxpaleo/lucide-react-component/raw/main/media/auto.png" alt="Icon Component Example">


### Props

- `icon` (string): Specifies the name of the Lucide icon (type-safe).
- `size` (number): Optional. Specifies the size of the icon in pixels. The default value is 18.
- `className` (string): Optional. Specifies the class name of the icon.
- `strokeWidth` (number): Optional. Specifies the stroke width of the icon. The default value is 2.


### Types
- LucideIconNames: A union type of all Lucide icon names which can be used to specify the icon prop.

```typescript
icon: LucideIconNames;
```

