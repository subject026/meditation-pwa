import { Button } from "@/modules/core/components/Layout/Button";
import { Layout } from "@/modules/core/components/Layout/Layout";
import { useState } from "react";

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
  const [thing, setThing] = useState("init");

  return (
    <Layout>
      <Button
        onPress={() => {
          Notification.requestPermission().then((result) => {
            setThing("requested permission");
            if (result === "granted") {
              permissionGranted();
            }
          });
        }}
      >
        request permissions
      </Button>
      <div className="py-12 px-8">state: {thing}</div>
    </Layout>
  );
}
