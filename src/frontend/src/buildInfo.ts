/**
 * Build information module
 * Provides build identifier for display in the UI
 */

/**
 * Get the build identifier set at build time
 * Falls back to "dev" if not set (local development)
 */
export function getBuildId(): string {
  const buildId = import.meta.env.VITE_BUILD_ID;
  return buildId || 'dev';
}

/**
 * Get formatted build info for display
 */
export function getBuildDisplay(): string {
  const id = getBuildId();
  return id === 'dev' ? 'Build: dev' : `Build: ${id}`;
}
