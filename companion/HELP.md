# Capacitimer

NOTE: Compatible with Capacitimer v1.4.0+

## Network Discovery

The module uses mDNS/Bonjour to automatically discover Capacitimer instances on your network. Discovered instances appear in the configuration dropdown. Only instances whose service name starts with "capacitimer" are shown — if you have renamed your instance to something else, use the **Manual IP Address or Hostname** field instead (e.g. `mydevice.local` or `192.168.1.42`).

## WebSocket Connection

On connect, the module queries `GET /api/server/status` to detect the actual WebSocket port in use. If that endpoint is unreachable, the module falls back to scanning ports 3001–3010 in order. Once connected, the module reconnects automatically if the connection drops.

## Pro License

Some actions, feedbacks, and variables require a **Pro license** activated in the Capacitimer app. Features that require Pro are hidden automatically when no active license is detected — they reappear as soon as a license is activated.

---

## Actions

### Timer Control
- **Start Timer** — Start or resume the timer
- **Pause Timer** — Pause the timer, preserving current time with millisecond precision
- **Reset Timer** — Reset to the last start time (restarts automatically if the timer was running)
- **Toggle Timer** — Toggle between start and pause states
- **Set Timer** — Set timer to specific hours, minutes, and seconds
  - Option to keep running after setting
- **Adjust Timer** — Add or subtract seconds from the current time (positive to add, negative to subtract)

### Display Control
- **Toggle Timer Visibility** — Show/hide the main timer display
- **Toggle Time of Day** — Show/hide the current time of day
- **Set Timer Font Size** — Adjust timer font size (0–100%)
- **Set Time of Day Font Size** — Adjust time of day font size (0–100%)
- **Set Timer Font** *(Pro)* — Choose a font from the fonts installed on the host system
- **Set Output Display** — Move the output window to a specific display in fullscreen, or return to windowed mode

### Message *(Pro)*
- **Set Message Text** — Set the message shown on the display. Send an empty string to clear.
- **Show/Hide Message** — Toggle, show, or hide the message overlay

### Color & Appearance
- **Set Timer Colors** — Configure hex colors for normal, warning, and critical states
- **Set Color Thresholds** — Configure when color states activate
  - Warning threshold (default: 60s) with enable toggle
  - Critical threshold (default: 0s) with enable toggle
- **Set Time of Day Color** — Set the time of day text color

### Settings
- **Update Settings** — Batch update display settings
  - Show/hide hours, minutes, seconds, milliseconds
  - Count up after zero
  - Time of day format (12-hour / 24-hour)
  - Timer direction: Countdown or Count Up *(Pro)*

---

## Feedbacks

### Timer State
- **Timer Running** — Active when the timer is counting
- **Timer Paused** — Active when the timer is paused
- **Timer Stopped** — Active when the timer is neither running nor paused
- **Timer Negative** — Active when the timer has counted past zero

### Time-Based
- **Time Remaining Less Than** — Triggers when time remaining is below a configurable threshold (and above zero)
- **Time Remaining Greater Than** — Triggers when time remaining is above a configurable threshold

### Display State
- **Timer Visible** — Active when the main timer is visible on the display
- **Time of Day Visible** — Active when time of day is visible on the display

### Dynamic Color
- **Timer Color** — Mirrors the current timer color from the app. Automatically applies the correct color based on the thresholds and enable flags set in Capacitimer:
  - Critical color when `enableCritical` is on and time is at or below the critical threshold
  - Warning color when `enableWarning` is on and time is at or below the warning threshold
  - Normal color otherwise

### Message *(Pro)*
- **Message Visible** — Active when the message overlay is visible on the display

---

## Variables

### Timer State
- `time_remaining` — Time remaining, formatted (HH:MM:SS)
- `time_remaining_seconds` — Time remaining in raw seconds
- `is_running` — "Yes" or "No"
- `is_paused` — "Yes" or "No"
- `reset_time` — Reset time, formatted (HH:MM:SS)

### Display Settings
- `timer_visible` — "Yes" or "No"
- `time_of_day_visible` — "Yes" or "No"
- `timer_font_size` — Timer font size percentage (0–100)
- `time_of_day_font_size` — Time of day font size percentage (0–100)

### Colors & Thresholds
- `color_normal` — Normal state color (hex)
- `color_warning` — Warning state color (hex)
- `color_critical` — Critical state color (hex)
- `time_of_day_color` — Time of day color (hex)
- `threshold_warning` — Warning threshold in seconds
- `threshold_critical` — Critical threshold in seconds

### Display Output
- `display_is_fullscreen` — "Yes" or "No"
- `display_no_output` — "Yes" or "No" (whether the output window is closed)

### Pro Variables *(hidden without active license)*
- `timer_font` — Current timer font family name
- `timer_direction` — "countdown" or "countup"
- `message_text` — Current message text
- `message_visible` — "Yes" or "No"

---

## Variable Support

Most actions support Companion variables for dynamic control:
- Timer hours, minutes, and seconds fields
- Adjust timer seconds
- Font size percentages
- Color hex codes
- Threshold values
