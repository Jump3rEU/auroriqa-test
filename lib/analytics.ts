// Analytics utility functions

// Type declaration for gtag
declare global {
  interface Window {
    gtag: (
      command: string,
      targetId: string,
      config?: Record<string, unknown>
    ) => void;
  }
}

export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID;

// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
export const pageview = (url: string) => {
  if (!GA_TRACKING_ID) return;
  
  window.gtag("config", GA_TRACKING_ID, {
    page_path: url,
  });
};

// https://developers.google.com/analytics/devguides/collection/gtagjs/events
export const event = ({
  action,
  category,
  label,
  value,
}: {
  action: string;
  category: string;
  label?: string;
  value?: number;
}) => {
  if (!GA_TRACKING_ID) return;

  window.gtag("event", action, {
    event_category: category,
    event_label: label,
    value: value,
  });
};

// Predefined events for common actions
export const trackButtonClick = (buttonName: string) => {
  event({
    action: "button_click",
    category: "engagement",
    label: buttonName,
  });
};

export const trackFormSubmit = (formName: string) => {
  event({
    action: "form_submit",
    category: "conversion",
    label: formName,
  });
};

export const trackLinkClick = (linkUrl: string) => {
  event({
    action: "link_click",
    category: "engagement",
    label: linkUrl,
  });
};

export const trackSectionView = (sectionName: string) => {
  event({
    action: "section_view",
    category: "engagement",
    label: sectionName,
  });
};

export const trackProjectStart = () => {
  event({
    action: "project_start_click",
    category: "conversion",
    label: "CTA Button",
  });
};

export const trackContactOpen = () => {
  event({
    action: "contact_open",
    category: "conversion",
    label: "Contact Section",
  });
};
