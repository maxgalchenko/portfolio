# Code Quality Setup Guide

This document explains the code quality tools configured in this project and how to use them effectively.

## 🛠️ Tools Installed

### Core Tools

- **ESLint 9** - Modern linting with flat config format
- **Prettier** - Opinionated code formatter
- **Husky** - Git hooks management
- **lint-staged** - Run linters on staged files only
- **TypeScript** - Static type checking

### ESLint Plugins

- `eslint-plugin-react` - React-specific linting rules
- `eslint-plugin-react-hooks` - Rules for React Hooks
- `eslint-plugin-jsx-a11y` - Accessibility linting
- `typescript-eslint` - TypeScript support for ESLint
- `eslint-plugin-prettier` - Integrates Prettier with ESLint

## 📋 What Happens Automatically

### On Every Commit (Pre-commit Hook)

When you run `git commit`, the following happens automatically:

1. **Identifies Changed Files** - Only processes files you've staged
2. **ESLint Auto-fix** - Fixes linting issues that can be auto-fixed
3. **Prettier Format** - Formats code according to style rules
4. **Fast Execution** - Typically completes in 2-5 seconds

**If any errors can't be auto-fixed**, the commit will be blocked until you fix them manually.

## 📝 Available npm Scripts

### Linting

```bash
npm run lint              # Check for linting errors
npm run lint:fix          # Fix auto-fixable linting errors
```

### Formatting

```bash
npm run format            # Format all source files
npm run format:check      # Check if files are formatted (no changes)
```

### Type Checking

```bash
npm run type-check        # Run TypeScript type checking
```

### Combined Quality Check

```bash
npm run lint && npm run type-check && npm run test
```

## ⚙️ Configuration Files

### ESLint Configuration

- **File**: `eslint.config.js`
- **Format**: ESLint 9 flat config (modern)
- **Rules**: Configured for React 19 + TypeScript + accessibility
- **Ignores**: node_modules, build, dist, config files

### Prettier Configuration

- **File**: `.prettierrc.json`
- **Style**:
  - Single quotes for strings
  - Semicolons enabled
  - 2 spaces indentation
  - 80 character line width
  - Trailing commas in ES5 style
  - LF line endings

### Husky Hooks

- **Directory**: `.husky/`
- **Active Hooks**: pre-commit
- **Hook Command**: Runs `lint-staged`

### lint-staged Configuration

- **File**: `package.json` (lint-staged section)
- **TypeScript/React files**: ESLint + Prettier
- **JSON/CSS/MD files**: Prettier only

## 🎯 Best Practices

### 1. Let the Tools Work for You

- Don't manually format code - let Prettier handle it
- Commit frequently - hooks are fast
- Trust auto-fix for most issues

### 2. Before Committing Large Changes

```bash
npm run lint:fix          # Fix all auto-fixable issues
npm run format            # Format all files
npm run type-check        # Verify no type errors
npm test                  # Run tests
```

### 3. VS Code Integration

The project includes `.vscode/settings.json` with:

- Format on save enabled
- ESLint auto-fix on save
- Proper TypeScript integration

**Recommended VS Code Extensions:**

- ESLint (`dbaeumer.vscode-eslint`)
- Prettier (`esbenp.prettier-vscode`)

### 4. Bypassing Hooks (Emergency Only)

If you absolutely need to skip pre-commit hooks:

```bash
git commit --no-verify -m "emergency fix"
```

**⚠️ Use sparingly!** This bypasses all quality checks.

## 🔧 Customization

### Adding ESLint Rules

Edit `eslint.config.js`:

```javascript
rules: {
  'your-rule': 'error',
  // ...
}
```

### Changing Prettier Style

Edit `.prettierrc.json`:

```json
{
  "printWidth": 100, // Change line width
  "semi": false // Disable semicolons
  // ...
}
```

### Modifying lint-staged Behavior

Edit `package.json` → `lint-staged` section:

```json
"lint-staged": {
  "*.{ts,tsx}": [
    "eslint --fix",
    "prettier --write",
    "vitest related --run"  // Add tests
  ]
}
```

## 🚀 Performance

### Why This Setup is Fast

- **lint-staged**: Only processes changed files (not entire codebase)
- **No build step**: Pre-commit doesn't run `npm run build`
- **No full tests**: Full test suite runs in CI/CD only
- **Efficient caching**: ESLint and Prettier cache results

### Typical Pre-commit Performance

- 1-2 files changed: ~2 seconds
- 5-10 files changed: ~5 seconds
- 20+ files changed: ~10 seconds

## 📊 What's NOT in Pre-commit

These run in CI/CD (GitHub Actions) instead:

- ❌ Full production build (`npm run build`)
- ❌ Full test suite (`npm run test`)
- ❌ Build artifact generation
- ❌ Deployment steps

**Why?** These are too slow for pre-commit hooks but critical for CI/CD.

## 🐛 Troubleshooting

### "Hooks not running"

```bash
npm run prepare          # Reinstall Husky hooks
```

### "ESLint errors blocking commit"

```bash
npm run lint:fix         # Auto-fix what can be fixed
npm run lint             # See remaining issues
# Fix manually, then commit
```

### "Type errors in commit"

```bash
npm run type-check       # See all type errors
# Fix issues, then commit
```

### "Prettier formatting conflicts"

```bash
npm run format           # Format all files
git add .                # Stage formatted files
git commit               # Try again
```

## 📚 Learn More

- [ESLint Documentation](https://eslint.org/docs/latest/)
- [Prettier Documentation](https://prettier.io/docs/en/)
- [Husky Documentation](https://typicode.github.io/husky/)
- [lint-staged Documentation](https://github.com/okonet/lint-staged)

## ✅ Quick Verification

Test your setup is working:

```bash
# 1. Check all tools are installed
npm run lint
npm run format:check
npm run type-check

# 2. Test pre-commit hook
echo "// test" >> src/test.ts
git add src/test.ts
git commit -m "test commit"
# You should see lint-staged running!
git reset HEAD~1  # Undo test commit
rm src/test.ts    # Clean up
```

---

**Setup completed by:** Code Quality Tools Setup Script  
**Last updated:** November 2025
