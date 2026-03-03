import { redirect, RedirectType } from 'next/navigation'

/**
 * Root page component that handles initial entry point redirection.
 * Redirects the user to the login page by default.
 */
export default function Home() {
  redirect('/login', RedirectType.replace)
  return (
    <></>
  );
}
