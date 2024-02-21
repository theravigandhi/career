import React from "react";

function HeaderLayouts({ children }: { children: React.ReactNode }) {
  return <div className="pt-[90px] mx-4">{children}</div>;
}

export default HeaderLayouts;
