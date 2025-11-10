# Testing Documentation

## Overview

This portfolio project now includes comprehensive unit tests following industry best practices. The test suite is built using **Vitest**, **Testing Library**, and includes proper coverage thresholds.

## Test Statistics

- **Total Tests**: 132
- **Test Files**: 24
- **Coverage**: 70%+ (exceeds recommended thresholds)
  - Lines: 70.12%
  - Functions: 72.33%
  - Branches: 50.88%
  - Statements: 70.07%

## Technology Stack

- **Test Framework**: Vitest (fast, modern Vite-native test framework)
- **Testing Library**: React Testing Library (user-centric testing)
- **Coverage**: Vitest Coverage (v8 provider)
- **Mocking**: Vitest built-in mocking capabilities

## Test Coverage Breakdown

### ✅ Fully Tested Components (100% Coverage)

#### Common Components

- `BackToHomePage.tsx` - Navigation back to home
- `Link/index.tsx` - Custom link component with animations
- `MysteriousText.tsx` - Animated text component
- `PageContainer.tsx` - Page layout wrapper
- `PageTransition.tsx` - Page transition animations
- `Spinner/index.tsx` - Loading spinner

#### Hooks

- `useBreakpoint.tsx` - Responsive breakpoint detection

#### Home Page Components

- `Home/index.tsx` - Main home page
- `Hero/index.tsx` - Hero section
- `Hero/Header/index.tsx` - Header component
- `Hero/Header/TopNav.tsx` - Navigation bar
- `Hero/Header/DownloadCV.tsx` - CV download buttons
- `Hero/Footer/index.tsx` - Hero footer
- `Hero/Footer/OpenToWork.tsx` - Work availability indicator
- `Hero/Footer/ScrollDownIcon/index.tsx` - Scroll indicator
- `Footer/index.tsx` - Page footer
- `SelectedCompanies/index.tsx` - Companies showcase

#### Theme

- `EmotionTheme.tsx` - Theme provider

### 🔶 Well-Tested Components (85%+ Coverage)

- `Advantages/Advantage.tsx` - Individual advantage item
- `Advantages/index.tsx` - Advantages list
- `Hero/Title.tsx` - Animated hero title
- `Footer/GetInTouch.tsx` - Contact link
- `MyLinks/index.tsx` - Social media links

### 📝 Test Coverage Exclusions

The following are intentionally excluded from coverage requirements:

- Test files (`**/*.test.{ts,tsx}`)
- Test utilities (`test-utils.tsx`)
- Type definitions (`**/*.d.ts`)
- Configuration files (`**/*.config.*`)
- Setup files (`setupTests.ts`)
- Build output (`build/`)

## Running Tests

### Run all tests

```bash
npm test
```

### Run tests in watch mode

```bash
npm run test:watch
```

### Run tests with coverage

```bash
npm run test:coverage
```

### Run tests with UI

```bash
npm run test:ui
```

## Coverage Thresholds

The project enforces the following coverage thresholds:

| Metric     | Threshold |
| ---------- | --------- |
| Lines      | 70%       |
| Functions  | 70%       |
| Branches   | 45%       |
| Statements | 70%       |

These thresholds are enforced during `npm run test:coverage`. The build will fail if coverage falls below these levels.

## Test Structure

### Test Files Location

Tests are co-located with their source files:

```
src/
  components/
    common/
      Link/
        index.tsx
        index.test.tsx  ← Test file
```

### Test Utilities

**Location**: `src/test-utils.tsx`

Provides:

- Pre-configured `render` function with all providers
- Theme provider setup
- Router setup (MemoryRouter)
- Breakpoint provider setup
- Re-exports all Testing Library utilities

**Usage**:

```typescript
import { render, screen } from '../../test-utils';

test('renders component', () => {
  render(<MyComponent />);
  expect(screen.getByText('Hello')).toBeInTheDocument();
});
```

## Best Practices Implemented

### 1. **User-Centric Testing**

Tests focus on user interactions rather than implementation details:

- Query by role, label, or text (not by class names)
- Test visible behavior, not internal state
- Verify accessibility

### 2. **Proper Mocking**

- React Spring animations are mocked for deterministic tests
- SVG imports are mocked appropriately
- Child components are mocked in parent component tests

### 3. **Comprehensive Coverage**

- Components are tested for rendering, props, user interactions
- Hooks are tested for all return values and edge cases
- Event handlers and cleanup functions are verified

### 4. **Testing Patterns**

#### Component Tests

```typescript
describe('ComponentName', () => {
  it('should render without crashing', () => {
    render(<Component />);
    expect(screen.getByText('Content')).toBeInTheDocument();
  });

  it('should handle user interactions', async () => {
    const user = userEvent.setup();
    render(<Component />);
    await user.click(screen.getByRole('button'));
    // assertions
  });
});
```

#### Hook Tests

```typescript
describe('useCustomHook', () => {
  it('should return expected value', () => {
    const { result } = renderHook(() => useCustomHook());
    expect(result.current).toBe(expectedValue);
  });
});
```

## Common Testing Scenarios

### Testing Links

```typescript
const link = screen.getByRole('link', { name: /click here/i });
expect(link).toHaveAttribute('href', '/expected-url');
```

### Testing Buttons

```typescript
const button = screen.getByRole('button', { name: /submit/i });
await user.click(button);
expect(mockHandler).toHaveBeenCalled();
```

### Testing Forms

```typescript
const input = screen.getByLabelText(/email/i);
await user.type(input, 'test@example.com');
expect(input).toHaveValue('test@example.com');
```

### Testing Async Behavior

```typescript
await waitFor(() => {
  expect(screen.getByText('Loaded')).toBeInTheDocument();
});
```

## Troubleshooting

### Common Issues

#### Issue: "window.matchMedia is not a function"

**Solution**: Already configured in `setupTests.ts`

#### Issue: React Spring animations causing test failures

**Solution**: Mocks are provided in individual test files

#### Issue: SVG imports failing

**Solution**: Use `vi.mock()` with appropriate default exports

## CI/CD Integration

### GitHub Actions Workflow

The project includes a **Deploy Workflow** (`.github/workflows/deploy.yml`) that runs on every push to main:

**Automated Steps:**

1. ✅ **Linting** - Checks code quality with ESLint
2. ✅ **Type Checking** - Validates TypeScript types
3. ✅ **Tests with Coverage** - Runs all 132 tests and enforces 70% coverage
4. ✅ **Production Build** - Creates optimized build
5. 🚀 **Deploy to GitHub Pages** - Deploys if all checks pass

### Quality Gates

**Deployment is blocked if:**

- Any test fails
- Coverage drops below 70% (lines, functions, statements)
- Coverage drops below 45% (branches)
- Linting errors exist
- Type checking fails
- Build fails

This ensures only tested, quality code reaches production! 🛡️

### Running Locally Before Push

Test everything locally before pushing:

```bash
# Quick check
npm run lint
npm run type-check
npm test

# Full deployment simulation
npm run lint && \
npm run type-check && \
npm run test:coverage && \
npm run build
```

## Continuous Improvement

### Adding New Tests

When adding new components:

1. Create a `.test.tsx` file next to the component
2. Import from `test-utils.tsx` instead of `@testing-library/react`
3. Follow existing test patterns
4. Run `npm run test:coverage` to verify coverage

### Maintaining Tests

- Update tests when component behavior changes
- Keep mocks up to date with dependencies
- Review coverage reports regularly
- Refactor tests to improve readability

## Resources

- [Vitest Documentation](https://vitest.dev/)
- [Testing Library](https://testing-library.com/docs/react-testing-library/intro/)
- [Testing Library Queries](https://testing-library.com/docs/queries/about)
- [Common Testing Mistakes](https://kentcdodds.com/blog/common-mistakes-with-react-testing-library)

## Summary

This portfolio project now has a robust test suite that:

- ✅ Covers 70%+ of the codebase
- ✅ Follows industry best practices
- ✅ Provides confidence in refactoring
- ✅ Documents component behavior
- ✅ Catches regressions early
- ✅ Improves code quality
