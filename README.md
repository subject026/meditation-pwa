# Meditation PWA

2 views: new/running session + session history

    - on init
      - get saved settings
      - show settings UI

    - user can:
      -> choose session duration
      -> choose background sound
      -> choose ending bell
      -> start session

    - on start session
      - start timer
      - start sound loop

    - user can:
      -> pause

    - on pause
      - stop audio
      - pause timer

      - user can:
        -> resume session
        -> discard session
        -> complete session

    - time reaches end
    - play ending bell/gong
    - save/discard session buttons
