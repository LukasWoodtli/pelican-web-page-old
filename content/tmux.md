Title: tmux
Category: Programming
Tags: Tools, Cheat Sheet, Unix, Linux

[TOC]

# Prefix Key

The prefix key combination needs to be pressed before any command for tmux (when tmux is running).

By default the `PREFIX` is: `CTRL + b`


# Sessions

| Key Binding              | Function                |
|--------------------------|-------------------------|
| `tmux new -s <name>`     | Create a named session  |
| `tmux ls`                | List current sessions   |
| `tmux a`                 | Attach to last session  |
| `tmux a -t <name>`       | Attach to named session |
| `tmux kill-session -t <name>` | Kill named session |
| `PREFIX d`               | Detach from a running session |
| `PREFIX :`               | Enter command mode      |


Commands can be provided directly to tmux as arguments or can be entered
in command line (`PREFIX :`).

Commands:

- Check if a session is running: `has-session`
    - `-t`: Target session

## The Target Flag (`-t`)

 To specify the target session, window and pane for a command the flag `-t <session-name>:<window-id>.<pane-id>` is used.

- `<session-name>`: The name of the session
- `<window-id>` and `<pane-id>` (optional): id number of window or pane

Examples:

- `tmux split-window -v -t mysession`


## Additional Flags for `tmux new`

- `-d`: Create in background (detached)
- `-n <name>`: Name the first windows


# Windows

Like tabs in browser.

| Key Binding    | Function                   |
|----------------|----------------------------|
| `PREFIX c`     | Create a new window        |
| `PREFIX ,`     | Rename current window      |
| `PREFIX n`     | Move to next window        |
| `PREFIX p`     | Move to previous window    |
| `PREFIX <num>` | Move to window by index    |
| `PREFIX f`     | Find named window          |
| `PREFIX w`     | Show menu with all windows |
| `PREFIX &`     | Close current window       |


Commands:

- Create window: `new-window`
    - `-n`: name
    - `-t`: Target session
- Change to a window: `select-window `
    - `-t`: Target session and window

# Panes

| Key Binding | Function                      |
|-------------|-------------------------------|
| `PREFIX %`  | Split pane vertically         |
| `PREFIX "`  | Split pane horizontally       |
| `PREFIX o`  | Cycle through panes           |
| `PREFIX ←`, `PREFIX ↑`, `PREFIX →`, `PREFIX ↓`| Navigate around panes|
| `PREFIX x`  | Close current pane            |
| `PREFIX q`  | Show number of each pane      |
| `PREFIX z`  | Maximize/resize pane (toggle) |


Commands:

- Create new pane: `split-window`
    - `-v` or `-h`: vertically or horizontally
    - `-p` Percent of split
    - `-t` Target


## Pane Layouts


Command: `select-layout -t <session> <layout-type>`

There are following layout types:

- `even-horizontal`
- `even-vertical`
- `main-horizontal`
- `main-vertical`
- `tiled`

Cycle through layouts: `PREFIX SPACEBAR`

# Send Shell Commands

Shell commands can be sent to tmux:

`tmux send-keys -t <session-name>:<window-id>.<pane-id> '<command>' C-m`

Arguments and Flags:

- `-t`: Target
- `<command>`: Can be any shell command
- `C-m`: Carriage return (enter, `CTRL`-`M`)


# Config

- Personal config file: `~/.tmux.conf`
- A custom config file can be supplied when tmux is started
    - `tmux -f <file-name>`
    - add `source-file ~/.tmux.conf` as first line to get settings from default file
- Reload file: `source-file <file-name>`
- Bind commands to keys: `bind [-nr] <key> <command0> \; <command1> ...`
    - `-n`: Don't use `PREFIX`
    - `-r`: Command may repeat (hold key)
    - Separate commands by `\;`
