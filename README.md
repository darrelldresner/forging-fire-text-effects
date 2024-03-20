# forging-fire-text-effects

A lightweight JavaScript library for applying dynamic, fire-like text effects using GSAP animations. Perfect for making your text elements stand out with a blazing animation.

## Installation

To use `forging-fire-text-effects` in your project, you'll first need to install GSAP and the library itself via npm:

```bash
npm install gsap
npm install forging-fire-text-effects
```

## Usage

After installation, you can integrate `forging-fire-text-effects` into your project with just a few lines of code:

```javascript
import ForgingFireTextEffects from 'forging-fire-text-effects';

// Initialize the effect by passing the ID of the element you want to animate
new ForgingFireTextEffects('yourElementId');
```

### HTML

Your HTML should have an element with an ID that matches what you pass into the `ForgingFireTextEffects` constructor:

```html
<div id="yourElementId">Your Text Here</div>
```

## Configuration

Currently, `forging-fire-text-effects` doesn't require any configuration and applies a preset animation effect. Future versions may include customizable options.

## Browser Support

This library relies on GSAP, which supports a wide range of browsers including recent versions of Chrome, Firefox, Safari, and Edge.

## Contributing

Contributions are welcome! If you have ideas for improvements or have found a bug, please open an issue or submit a pull request.

## License

This project is licensed under the MIT License - see the LICENSE file for details.
