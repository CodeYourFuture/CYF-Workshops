#!/bin/bash

# Find the root directory of the git repository
repoRoot=$(git rev-parse --show-toplevel)

# Ensure we're in the root of the git repository
cd "$repoRoot" || exit

# Path to the _index.md file in the /content directory
indexFile="${repoRoot}/micro-front-end/content/_index.md"

# Loop over each directory in the root
for dir in */ ; do
  # Remove the trailing slash from directory name
  dirName=${dir%/}

  # Skip the directory we are copying into
  if [ "$dirName" == "micro-front-end" ]; then
    continue
  fi

  # Format the directory name for URL
  formattedDirName=$(echo "$dirName" | sed 's/ /%20/g')

  # Define the block to append with formatted link
  blockToAdd="[[blocks]]\nname=\"$dirName\"\nsrc=\"https://github.com/CodeYourFuture/CYF-Workshops/tree/main/$formattedDirName\"\ntime=0"

  # Check if the block already exists
  if ! grep -q "$blockToAdd" "$indexFile"; then
    # Find the line number of the last occurrence of +++
    lastPlusLine=$(grep -n '+++' "$indexFile" | tail -1 | cut -d: -f1)

    # Check if we found the line to insert before
    if [ -n "$lastPlusLine" ]; then
      # Calculate the line number to insert before the last +++
      insertLine=$((lastPlusLine - 1))

      # Use awk to insert blockToAdd before the last +++
      awk -v line="$insertLine" -v text="$blockToAdd" 'NR == line {print text} {print}' "$indexFile" > temp && mv temp "$indexFile"
    else
      # Throw an error if +++ wasn't found
      echo "Error: +++ not found in $indexFile. Cannot update the file correctly." >&2
      exit 1
    fi
  fi
done

echo "Updated _index.md with directory blocks."
