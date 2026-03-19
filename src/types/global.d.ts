// This is needed to make TypeScript happy with the custom elements
declare global {
  namespace JSX {
    interface IntrinsicElements {
      'gmp-map': any;
      'gmp-advanced-marker': any;
      'gmp-info-window': any;
    }
  }
}

// This empty export is needed to make this file a module.
export {};
