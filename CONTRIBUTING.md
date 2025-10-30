# Contributing to San Pedro Website

Thank you for your interest in contributing to the San Pedro Website project! We welcome contributions from the community.

## How to Contribute

### Reporting Bugs

If you find a bug, please create an issue with:
- A clear, descriptive title
- Steps to reproduce the issue
- Expected vs actual behavior
- Screenshots (if applicable)
- Your environment (OS, browser, Node version)

### Suggesting Enhancements

We welcome feature requests! Please create an issue with:
- A clear description of the feature
- Why this feature would be useful
- Any examples or mockups (if applicable)

### Pull Requests

1. **Fork the repository** and create your branch from `main`
2. **Install dependencies**: `npm install`
3. **Make your changes**:
   - Write clear, commented code
   - Follow the existing code style
   - Ensure your code passes linting: `npm run lint`
4. **Test your changes**: `npm run build` to ensure the build succeeds
5. **Commit your changes**:
   - Use clear, descriptive commit messages
   - Reference any related issues
6. **Push to your fork** and submit a pull request

### Pull Request Guidelines

- Keep PRs focused on a single feature or fix
- Update documentation if needed
- Ensure the build passes
- Respond to review feedback promptly

### Development Setup

```bash
# Clone your fork
git clone https://github.com/YOUR-USERNAME/san-pedro-website.git
cd san-pedro-website

# Install dependencies
npm install

# Copy environment variables (if needed)
cp .env.example .env.local

# Start development server
npm run dev
```

Visit `http://localhost:3000` to see your changes.

### Code Style

- This project uses ESLint for code quality
- Run `npm run lint` before submitting
- Use TypeScript types appropriately
- Follow React and Next.js best practices

### Need Help?

Feel free to ask questions by creating an issue with the "question" label.

## Code of Conduct

Please note that this project is released with a [Code of Conduct](CODE_OF_CONDUCT.md). By participating in this project you agree to abide by its terms.

## License

By contributing, you agree that your contributions will be licensed under the MIT License.
