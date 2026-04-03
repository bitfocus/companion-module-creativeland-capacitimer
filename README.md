# companion-module-capacitimer

Bitfocus Companion module for controlling [Capacitimer](https://github.com/tomhillmeyer/capacitimer).

NOTE: Compatible with Capacitimer v1.4.0+

## Features

### Timer Control
- Start, pause, reset, and toggle timer
- Set timer to specific hours, minutes, seconds (with variable support)
- Adjust timer up/down by seconds (with variable support)
- Real-time updates via WebSocket

### Display Control
- Toggle timer visibility
- Toggle time of day display
- Move output window to a specific display (fullscreen) or return to windowed mode
- Adjust timer and time of day font sizes independently (0–100%)
- Choose font from host system's installed fonts *(Pro)*

### Colors & Appearance
- Configure colors for normal, warning, and critical states
- Set warning and critical thresholds with individual enable toggles
- Customize time of day color
- Single **Timer Color** feedback that automatically mirrors the app's current color state

### Message Display *(Pro)*
- Set a custom text message on the display
- Show/hide message independently of the timer

### Feedbacks
- **Timer State**: Running, paused, stopped, counting past zero
- **Time-Based**: Less than / greater than configurable thresholds
- **Display State**: Timer visible, time of day visible, message visible *(Pro)*
- **Timer Color**: Automatically mirrors the app's normal/warning/critical color

### Variables
- Timer state: time remaining (formatted & seconds), running, paused, reset time
- Display settings: visibility, font size
- Colors and thresholds
- Display output state: fullscreen, window closed
- Pro: timer font, timer direction, message text, message visible

### Presets
- **Timer Control**: Start, pause, reset, toggle buttons
- **Quick Set**: 1min, 5min, 10min, 30min, 45min, 1hr, 1.5hr, 2hr presets
- **Adjustments**: +/- 1min and 5min buttons
- **Display**: Toggle visibility, set output display, toggle message *(Pro)*
- **Status**: Live timer display with automatic color coding

## Actions

### Timer Control
- Start Timer
- Pause Timer
- Reset Timer
- Toggle Timer (Start/Pause)
- Set Timer (hours, minutes, seconds with keepRunning option)
- Adjust Timer (add/subtract seconds)

### Display Control
- Toggle Timer Visibility
- Toggle Time of Day
- Set Timer Font Size (0–100%)
- Set Time of Day Font Size (0–100%)
- Set Timer Font *(Pro)* — populated from host system fonts
- Set Output Display — fullscreen on a specific display, or windowed

### Message *(Pro)*
- Set Message Text
- Show/Hide Message (Toggle / Show / Hide)

### Color & Appearance
- Set Timer Colors (normal, warning, critical)
- Set Color Thresholds (warning and critical, each with enable toggle)
- Set Time of Day Color

### Settings
- Update Settings (show/hide hours, minutes, seconds, milliseconds; count up after zero; time of day format; timer direction *(Pro)*)

## Feedbacks

### Timer State
- Timer Running
- Timer Paused
- Timer Stopped
- Timer Negative (counting past zero)

### Time-Based
- Time Remaining Less Than
- Time Remaining Greater Than

### Display State
- Timer Visible
- Time of Day Visible
- Message Visible *(Pro)*

### Dynamic Color
- Timer Color — mirrors the app's current color based on enabled thresholds

## Variables

### Timer State
- `time_remaining` — Formatted (HH:MM:SS)
- `time_remaining_seconds` — Raw seconds
- `is_running` — "Yes" / "No"
- `is_paused` — "Yes" / "No"
- `reset_time` — Formatted (HH:MM:SS)

### Display Settings
- `timer_visible`, `time_of_day_visible` — "Yes" / "No"
- `timer_font_size`, `time_of_day_font_size` — Percentage (0–100)

### Colors & Thresholds
- `color_normal`, `color_warning`, `color_critical`, `time_of_day_color` — Hex strings
- `threshold_warning`, `threshold_critical` — Seconds

### Display Output
- `display_is_fullscreen` — "Yes" / "No"
- `display_no_output` — "Yes" / "No"

### Pro *(hidden without active license)*
- `timer_font` — Font family name
- `timer_direction` — "countdown" or "countup"
- `message_text` — Current message text
- `message_visible` — "Yes" / "No"

## Setup

1. Install and run the Capacitimer application
2. Add this module in Companion
3. Configure the connection:
   - Select from **Discovered Capacitimers** (auto-discovery via mDNS/Bonjour — requires the instance name to start with "capacitimer")
   - Or manually enter an IP address or hostname (e.g. `capacitimer.local`, `mydevice.local`, or `192.168.1.42`)
4. The module auto-detects the WebSocket port by querying the server status endpoint. If that fails, it scans ports 3001–3010.

## Pro License

Pro features (custom fonts, timer direction, message display, background colors) require a Pro license activated in the Capacitimer app. This module detects the license status on connect and automatically shows or hides Pro actions, feedbacks, and variables.

## License

MIT — See [LICENSE](./LICENSE)
