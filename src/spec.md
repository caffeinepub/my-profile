# Specification

## Summary
**Goal:** Make it easy to deploy the latest frontend + backend to the Internet Computer and verify the live app is running the newest build.

**Planned changes:**
- Add a repo-local deployment guide (e.g., `DEPLOYMENT.md`) documenting prerequisites, build steps, deploy steps, and how to retrieve the deployed canister URL using `dfx`.
- Add package scripts (or documented equivalent commands) to: build frontend assets, deploy canisters, and print the deployed frontend URL reliably.
- Display a build identifier in the app UI (non-intrusive, e.g., footer within the MobileShell layout) that is set at build time and readable on mobile in light/dark themes.

**User-visible outcome:** The project can be deployed from a clean checkout via documented steps/scripts, the deployed URL can be retrieved reliably, and the live app shows a build identifier so the newest deployment can be confirmed.
