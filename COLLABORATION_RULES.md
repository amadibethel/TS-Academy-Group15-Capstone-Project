# Group Collaboration Rules

## Project Overview

This project is a collaborative React capstone project. Every member is responsible for contributing meaningful work, following proper Git workflows, and maintaining code quality.

The objective is not just to finish the project, but to simulate a real-world frontend development workflow.

---

# Core Rules

## 1. Respect the Structure

Nobody should work directly on the `main` branch.

All work must:

* be done on a separate branch
* be reviewed through a Pull Request
* be merged only after approval

---

## 2. Branch Naming Convention

Use clear branch names.

Format:

```bash
feature/component-name
fix/issue-name
refactor/component-name
```

Examples:

```bash
feature/navbar
feature/planet-card
fix/mobile-layout
refactor/footer-section
```

Do NOT use branch names like:

```bash
newbranch
update
work
finalwork
```

---

# Git Workflow Rules

## 3. Pull Request Rules

Every contribution must come through a PR.

### PR Requirements

A PR must:

* contain a clear title
* contain a short explanation of changes
* be tested before submission
* not break existing functionality

Example:

```md
## What was done
- Added responsive navbar
- Implemented mobile menu toggle
- Fixed spacing issues
```

---

## 4. No Self-Merging

The person who creates a PR MUST NOT:

* review their own PR
* merge their own PR

Another member must:

* review the code
* test the feature
* approve the PR
* merge it

---

## 5. Avoid Bad Commits

Do NOT spam commits.

Bad examples:

```bash
git commit -m "update"
git commit -m "work"
git commit -m "final"
```

Good examples:

```bash
git commit -m "Create reusable planet card component"
git commit -m "Implement form validation logic"
git commit -m "Fix responsive footer layout"
```

---

# Code Rules

## 6. Component Structure

Everything should be componentized.

Examples:

* Navbar
* Hero section
* CTA button
* Planet card
* Footer
* Form section

Avoid giant files.

---

## 7. Reusability First

Do not duplicate code.

If multiple sections use the same UI structure:

* create reusable components
* use props properly
* avoid repeated JSX

---

## 8. Naming Conventions

Use meaningful names.

### Components

```jsx
PlanetCard.jsx
ContactForm.jsx
HeroSection.jsx
```

### Variables

```js
planetData
isMenuOpen
fetchPlanets
```

Avoid:

```js
x
data1
temp
```

---

## 9. Folder Structure

Recommended structure:

```bash
src/
 ├── assets/
 ├── components/
 ├── pages/
 ├── services/
 ├── styles/
 ├── hooks/
 └── App.jsx
```

---

# React Rules

## 10. React Best Practices

* Use functional components
* Use hooks properly
* Keep components focused
* Avoid unnecessary state
* Keep logic separated where possible

---

## 11. Fetch API Rules

Planet data must:

* be fetched dynamically
* handle loading states
* handle errors properly

Do NOT hardcode API data.

---

## 12. Forms

The contact form must:

* validate fields
* prevent empty submissions
* show success feedback
* submit to the required endpoint

---

# Responsive Design Rules

## 13. Mobile Responsiveness is Mandatory

The site must work properly on:

* mobile
* tablet
* desktop

Nobody should merge a feature that breaks responsiveness.

Always test:

* layout
* spacing
* overflow
* font scaling
* navigation

---

# Collaboration Rules

## 14. Communication

If you are blocked:

* ask questions early
* do not disappear
* update the team on progress

Silence destroys collaborative projects.

---

## 15. Task Ownership

If you claim a task:

* finish it properly
* communicate delays
* do not abandon work midway without informing the team

---

## 16. Respect Other People's Work

Do NOT:

* rewrite someone else's code unnecessarily
* delete another person's work without discussion
* force push to shared branches

---

# Team Lead Rules

## 17. Team Lead Responsibilities

The team lead must:

* organize tasks
* monitor progress
* maintain project structure
* ensure PR reviews happen
* ensure deadlines are respected

The assistant lead helps enforce these rules.

---

# README Requirements

## 18. README Must Include

* project summary
* names of all members
* GitHub profile links
* setup instructions
* technologies used
* live deployment link
* contribution breakdown

---

# Deployment Rules

## 19. Deployment

The final project must:

* be publicly accessible
* work without errors
* be tested before submission

Recommended platforms:

* Vercel
* Netlify

---

# Final Standard

This project should look like:

* a real frontend project
* a collaborative engineering workflow
* a production-minded implementation

Not:

* random commits
* broken branches
* duplicated code
* unfinished UI
* unreviewed merges

---

# Ground Rule

If your code would make collaboration harder for others, it is bad code regardless of whether it works.
