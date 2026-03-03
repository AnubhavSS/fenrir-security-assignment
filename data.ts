/**
 * Represents a security scan result.
 */
export type Scan = {
  /** Unique identifier for the scan. */
  id: string;
  /** Human-readable name of the scanned target. */
  name: string;
  /** Methodology used for the scan. */
  type: "Greybox" | "Blackbox" | "Whitebox";
  /** Current execution status of the scan. */
  status: "Completed" | "Scheduled" | "Failed";
  /** Percentage of completion (0-100). */
  progress: number;
  /** Count of critical vulnerabilities found. */
  critical: number;
  /** Count of high-severity vulnerabilities found. */
  high: number;
  /** Count of medium-severity vulnerabilities found. */
  medium: number;
  /** Count of low-severity vulnerabilities found. */
  low: number;
  /** Relative time since the last scan was performed. */
  lastScan: string;
};

/**
 * Utility function to generate mock scan data for demonstration.
 * @param count - The number of mock scan objects to generate.
 * @returns An array of generated Scan objects.
 */
export const generateScans = (count: number) => {
  return Array.from({ length: count }, (_, i) => ({
    id: `scan-${100 + i}`,
    name: `Service Cluster ${i + 1}`,
    type: ["Greybox", "Blackbox", "Whitebox"][
      Math.floor(Math.random() * 3)
    ] as "Greybox" | "Blackbox" | "Whitebox",
    status: ["Completed", "Scheduled", "Failed"][
      Math.floor(Math.random() * 3)
    ] as "Completed" | "Scheduled" | "Failed",
    progress: Math.floor(Math.random() * 101),
    critical: Math.floor(Math.random() * 20),
    high: Math.floor(Math.random() * 25),
    medium: Math.floor(Math.random() * 15),
    low: Math.floor(Math.random() * 10),
    lastScan: `${Math.floor(Math.random() * 7)}d ago`,
  }));
};

/**
 * Mock activity logs simulating an automated penetration test workflow.
 */
export const activityLogs =  [
    {
      "timestamp": "09:00:00",
      "message": "I'll begin a systematic penetration test on helpdesk.democorp.com. Let me start with reconnaissance and enumeration."
    },
    {
      "timestamp": "09:01:00",
      "message": "Good! Target is online. Now let me perform port scanning to identify running services."
    },
    {
      "timestamp": "09:02:00",
      "message": "Excellent reconnaissance results: helpdesk.democorp.com is running Apache httpd 2.4.65 on port 80 (web server). Let me probe the web server and target first to understand its structure."
    },
    {
      "timestamp": "09:03:00",
      "message": "Great! I found a login page for a Help Desk Platform. I can see a useful comment: 'TODO: Delete the testing account (test:test)'. Let me test this credential. The login redirects to /password/test. Let me follow that path and explore it."
    },
    {
      "timestamp": "09:04:00",
      "message": "The POST method is not allowed on /password/test. Let me check what the JavaScript does — it posts to '/' which means the current page. Let me try a different approach."
    },
    {
      "timestamp": "09:05:00",
      "message": "It redirects back to /password/test. Let me check if there's an /api endpoint or look for other paths. Let me also try exploring with the test:test password directly on other endpoints."
    },
    {
      "timestamp": "09:06:00",
      "message": "Great! I can access the dashboard using the 'X-UserId: 10832' header. The dashboard shows 'Welcome, John Doe'. This suggests an IDOR vulnerability. I can access any user's dashboard by just changing the X-UserId header. Let me explore more of the application."
    }
  ]
