"use client";
import React, { useEffect } from "react";

interface IGWidgetProps {
  dataRef: string;
}

const IGWidget: React.FC<IGWidgetProps> = ({ dataRef }) => {
  useEffect(() => {
    const script = document.createElement("script");
    script.id = "EmbedSocialHashtagScript";
    script.src = "https://embedsocial.com/cdn/ht.js";
    script.async = true;
    document.head.appendChild(script);

    return () => {
      const existingScript = document.getElementById(
        "EmbedSocialHashtagScript"
      );
      if (existingScript) {
        document.head.removeChild(existingScript);
      }
    };
  }, []);

  return (
    <div className="mt-16">
      <div className="embedsocial-wrapper">
        <div className="embedsocial-hashtag" data-ref={dataRef}></div>
      </div>
    </div>
  );
};

export default IGWidget;
