# Security Policy

## Reporting a Vulnerability

We take the security of the San Pedro Website seriously. If you discover a security vulnerability, please follow these steps:

### How to Report

**Please DO NOT create a public GitHub issue for security vulnerabilities.**

Instead, please report security vulnerabilities by:
1. Emailing the maintainer directly (contact info in GitHub profile)
2. Or using GitHub's private vulnerability reporting feature:
   - Go to the repository's "Security" tab
   - Click "Report a vulnerability"

### What to Include

When reporting a vulnerability, please include:
- Description of the vulnerability
- Steps to reproduce the issue
- Potential impact
- Any suggested fixes (if you have them)

### Response Timeline

- We will acknowledge your report within 48 hours
- We will provide a more detailed response within 7 days
- We will work on a fix and keep you updated on progress
- We will notify you when the vulnerability is fixed

### Disclosure Policy

- Please give us reasonable time to fix the vulnerability before public disclosure
- We will credit you for the discovery (unless you prefer to remain anonymous)
- Once fixed, we will publish a security advisory

## Supported Versions

| Version | Supported          |
| ------- | ------------------ |
| Latest  | :white_check_mark: |

## Security Best Practices for Contributors

When contributing to this project:

1. **Never commit sensitive data**:
   - API keys, tokens, or passwords
   - Private keys or certificates
   - Database credentials
   - `.env` files (use `.env.example` instead)

2. **Keep dependencies updated**:
   - Regularly update npm packages
   - Monitor Dependabot alerts

3. **Follow secure coding practices**:
   - Validate and sanitize user input
   - Use environment variables for configuration
   - Follow Next.js security best practices

4. **Review before committing**:
   - Check your changes before pushing
   - Use `git diff` to review what you're committing
   - Ensure `.gitignore` is properly configured

## Security Features

This project implements:
- Environment variable protection (`.env*` in `.gitignore`)
- Dependency vulnerability scanning (Dependabot)
- Automated security updates
- Secret scanning on GitHub

Thank you for helping keep San Pedro Website secure!
