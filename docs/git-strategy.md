# Git Strategy

## Branching Strategy

### Main Branches

- **main**: The main branch where the source code of HEAD always reflects a production-ready state.

### Supporting Branches

- **feature/\<feature-name\>**: Used to develop new features for the upcoming or a distant future release.

## Workflow

### 1. Creating a new feature branch

```sh
git checkout master
git pull origin master
git checkout -b feature/<feature-name>
```

### 2. Merging a feature branch

```sh
git checkout master
git pull origin master
git merge feature/<feature-name>
git push origin master
```

## Rules

Direct commits to main are disallowed.
Each PR must have one approve before merging.
Only squash merges are allowed, ensuring a clean, single commit history.
