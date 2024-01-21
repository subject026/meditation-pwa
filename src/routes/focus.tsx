import { Layout } from "@/modules/core/components/Layout/Layout";
import { useSession } from "@/modules/session/context/TimerContext/SessionContext";
import { SessionInit } from "@/modules/session/components/SessionInit";
import { SessionList } from "@/modules/session/components/SessionList";
import { SessionRunning } from "@/modules/session/components/SessionRunning";

export function Focus() {
  const { sessionState } = useSession();

  return (
    <Layout>
      <div className="flex p-4 gap-4">
        <SessionList />
        <section className="grow flex flex-col gap-4 items-center">
          {(() => {
            switch (sessionState.status) {
              case "INIT":
                return <SessionInit />;
              case "RUNNING":
                return (
                  <SessionRunning
                    secondsPassed={sessionState.secondsPassed}
                    targetSeconds={sessionState.targetSeconds}
                  />
                );
            }
          })()}
        </section>
      </div>
    </Layout>
  );
}
