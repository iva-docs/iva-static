export function page(pageName, data) {
  if (process.env.NODE_ENV === "production") {
    analytics.page(pageName, data);
  }
}

export function identify() {
  analytics.identify();
}
