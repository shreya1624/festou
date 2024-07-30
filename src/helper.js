export function truncateText(text, maxLength) {
    if (text && text?.length > maxLength) {
      return text?.substring(0, maxLength - 3) + "...";
    }
    return text;
  }
  
  export function isMobileView() {
    const mobileView = window.matchMedia("(max-width: 767px)").matches;
    return mobileView;
  }