import { useEffect, useState } from "react";
import { Button } from "../Layout/Button";

export function Permissions() {
  const [notificationPermissionState, setNotificationPermissionState] =
    useState<undefined | PermissionState>(undefined);

  useEffect(function checkPermissions() {
    navigator.permissions
      .query({ name: "notifications" })
      .then((result): void => {
        console.log("check result: ", result.state);
        setNotificationPermissionState(result.state);
      });
  }, []);

  return (
    <div>
      {(() => {
        switch (notificationPermissionState) {
          case "granted":
            return <span>✅ notifications</span>;
          case "denied":
            return <span>denied</span>;
          case "prompt":
            return (
              <Button
                onPress={() => {
                  Notification.requestPermission().then((result) => {
                    setNotificationPermissionState(
                      result === "granted" ? "granted" : "denied"
                    );
                  });
                }}
              >
                approve notifications
              </Button>
            );
          default:
            return null;
        }
      })()}
    </div>
  );
}
