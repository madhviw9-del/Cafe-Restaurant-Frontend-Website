"use client";

import { AppleStyleDock as Dock1 } from "@/components/ui/dock-demo";

export default function DockWrapper() {
  const Dock = Dock1;

  if (!Dock) return null;

  return <Dock />;
}
