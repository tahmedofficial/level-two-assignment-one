## Differences Between Interfaces and Types in TypeScript

While `interface` and `type` in TypeScript may seem similar, there are key differences between them:

- **Declaration Merging**: `interface` supports declaration merging, meaning you can define the same interface multiple times, and TypeScript will merge them.
- **Extends and Implements**: `interface` can be extended or implemented by other interfaces or classes, which makes it ideal for object-oriented design patterns.
- **Describing Shapes**: Both `interface` and `type` can be used to describe the shape of objects and function signatures.
- **Additional Use Cases for `type`**: Unlike `interface`, `type` can also represent primitive types, union types, intersection types, and tuples.

### Summary
Use `interface` when you need extensibility and declaration merging. Use `type` when working with complex types like unions, primitives, or tuples.
