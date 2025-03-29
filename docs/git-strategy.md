# Git Strategy

## Branching Strategy

### Main Branches
- **main**: The main branch where the source code of HEAD always reflects a production-ready state.
- **develop**: The main branch where the source code of HEAD always reflects a state with the latest delivered development changes for the next release.

### Supporting Branches
- **feature/\<feature-name\>**: Used to develop new features for the upcoming or a distant future release.
- **release/\<release-version\>**: Used to prepare a new production release.
- **hotfix/\<hotfix-name\>**: Used to quickly patch production releases.

## Workflow

### 1. Creating a new feature branch
   ```sh
   git checkout develop
   git pull origin develop
   git checkout -b feature/<feature-name>
```

### 2. Merging a feature branch
```sh
git checkout develop
git pull origin develop
git merge feature/<feature-name>
git push origin develop
```
### 3. Creating a release branch
```sh
   git checkout develop
   git pull origin develop
   git checkout -b release/<release-version>
 ```
### 4. Merging a release branch
```sh
    git checkout main
    git pull origin main
    git merge release/<release-version>
    git push origin main
 ```   
### 5. Creating a hotfix branch
```sh
    git checkout main
    git pull origin main
    git checkout -b hotfix/<hotfix-name>
```
### 6. Creating a release branch **  
```sh
git checkout develop
git pull origin develop
git checkout -b release/<release-version>
```
### 7. Merging a release branch
```sh
git checkout main
git pull origin main
git merge release/<release-version>
git push origin main
```