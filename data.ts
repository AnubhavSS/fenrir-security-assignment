export type Scan = {
  id: string;
  name: string;
  type: "Greybox" | "Blackbox" | "Whitebox";
  status: "Completed" | "Scheduled" | "Failed";
  progress: number;
  critical: number;
  high: number;
  medium: number;
  low: number;
  lastScan: string;
};
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