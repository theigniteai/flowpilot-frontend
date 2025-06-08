import React, { useState } from "react";
import clsx from "clsx";

export const Tabs = ({ defaultValue, children, className }) => {
  const [activeTab, setActiveTab] = useState(defaultValue);

  // Provide context via prop drilling
  return React.Children.map(children, (child) => {
    if (!React.isValidElement(child)) return null;
    return React.cloneElement(child, {
      activeTab,
      setActiveTab,
      className,
    });
  });
};

export const TabsList = ({ children, className }) => {
  return <div className={clsx("flex gap-4 border-b mb-2", className)}>{children}</div>;
};

export const TabsTrigger = ({ value, activeTab, setActiveTab, children }) => {
  const isActive = value === activeTab;
  return (
    <button
      onClick={() => setActiveTab(value)}
      className={clsx(
        "py-2 px-4 border-b-2 font-medium",
        isActive
          ? "border-blue-600 text-blue-600"
          : "border-transparent text-gray-500 hover:text-blue-500"
      )}
    >
      {children}
    </button>
  );
};

export const TabsContent = ({ value, activeTab, children }) => {
  return value === activeTab ? <div className="mt-4">{children}</div> : null;
};
