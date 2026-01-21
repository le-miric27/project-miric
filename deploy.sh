#!/bin/bash
echo -e "\033[0;32mDeploying updates to GitHub...\033[0m"

# Build the project, ensuring the output is in the 'public' directory
# (Hugo builds to 'public' by default, so 'hugo' alone is usually enough)
hugo --minify

# Go to the public folder where Hugo generated the site
cd public

# Initialize a new Git repository in the public folder if it's not already one
# This ensures that we are only tracking the built site files
git init

# Add all files in the public directory to the new Git repository
git add .

# Commit the changes
# The || echo "No changes to commit" part is good for when there's nothing new
git commit -m "Deploy Hugo site to GitHub Pages" || echo "No changes to commit"

# Push the contents of the public directory to the gh-pages branch of your remote repository.
# The `git push -f` is important here as it overwrites the gh-pages branch with the
# content of your local 'public' directory.
git push -f "https://github.com/le-miric27/project-miric.git" HEAD:gh-pages

# Come back to the root of your project
cd ..

echo -e "\033[0;32mDeployment complete!\033[0m"
