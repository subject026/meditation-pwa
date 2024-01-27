export function dispatchNotification({
  title,
  body,
}: {
  title: string;
  body: string;
}) {
  const options = {
    icon: "/android-chrome-192x192.png",
    body,
  };
  new Notification(title, options);
}
