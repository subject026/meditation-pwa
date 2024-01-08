import { Button } from "@/modules/core/componnents/Layout/Button";
import { Layout } from "@/modules/core/componnents/Layout/Layout";

function testNotification() {
  const options = {
    body: "hey its a meeeee!",
    icon: "/android-chrome-192x192.png",
  };
  new Notification("test notification", options);
}

function permissionGranted() {
  const options = {
    body: "you're going to love our notifactions I promise",
    icon: "/android-chrome-192x192.png",
  };
  new Notification("Notifications Turned On", options);

  setTimeout(testNotification, 10000);
}

export function PWATesting() {
  return (
    <Layout>
      <Button
        onClick={() => {
          Notification.requestPermission().then((result) => {
            if (result === "granted") {
              permissionGranted();
            }
          });
        }}
      >
        request permissions
      </Button>
    </Layout>
  );
}
