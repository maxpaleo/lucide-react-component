# Lucide Icon Component

The `lucide-icon-component` package provides a simple and efficient way to include Lucide icons in your React projects. 

This component, `<Icon />`, supports the full suite of Lucide icons with type-safe props that ensure easy integration and autocomplete functionality.

## Features

- **Type Safety:** Autocompletes icon names to prevent errors.
- **Efficiency:** No need to import each icon individually, just specify the icon name in the `icon` prop.
- **Simplicity:** Easy to use with minimal setup required.

## Installation

Install the package using npm:

```bash
npm i lucide-icon-component
```

Usage
Import the Icon component and use it in your project:

```jsx
Copy code
import Icon from 'lucide-icon-component';

function App() {
  return <Icon icon="expand" size={17} />;
}
```

Props
icon (string): Specifies the name of the Lucide icon (type-safe).
size (number): Optional. Specifies the size of the icon in pixels.
Example
Here's an example of using the Icon component to display multiple icons:

```jsx
Copy code
import Icon from 'lucide-icon-component';

function Toolbar() {
  return (
    <div>
      <Icon icon="edit" size={24} />
      <Icon icon="trash" size={24} />
      <Icon icon="archive" size={24} />
    </div>
  );
}
```

Contributing
Contributions are always welcome! Please read the contributing guide to learn how you can help improve this package.

License
This project is licensed under the MIT License - see the LICENSE file for details.

css
Copy code

This documentation provides a clear overview of how to install, use, and integrate the``