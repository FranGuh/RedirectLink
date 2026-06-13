# conductor-revert

Revert a track only when explicitly requested.

## When to Use
- User explicitly asks to undo a track
- Implementation needs to be rolled back
- Changes need to be removed

## What It Does
- Reverts all changes from a track
- Restores previous state
- Documents the revert

## Usage
Only run this skill when the user explicitly requests a revert. Do not use proactively.
