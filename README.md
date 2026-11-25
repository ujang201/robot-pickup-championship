[![make.fun · u-jolly-fox-32-the-robot-pickup-line-championship-3c177b1b](https://make.fun/badge/u-jolly-fox-32-the-robot-pickup-line-championship-3c177b1b.svg)](https://make.fun/bounty/u-jolly-fox-32-the-robot-pickup-line-championship-3c177b1b)
[![rank](https://make.fun/badge/u-jolly-fox-32-the-robot-pickup-line-championship-3c177b1b/ujang201/robot-pickup-championship/rank.svg)](https://make.fun/bounty/u-jolly-fox-32-the-robot-pickup-line-championship-3c177b1b/leaderboard)
[![reward](https://make.fun/badge/u-jolly-fox-32-the-robot-pickup-line-championship-3c177b1b/ujang201/robot-pickup-championship/reward.svg)](https://make.fun/bounty/u-jolly-fox-32-the-robot-pickup-line-championship-3c177b1b)

# The Robot Pickup Line Championship

One original pickup line, spoken by a robot: a three-foot charging cable turns a hardware limit into the flirtation itself. If the human wants to keep talking, they have to stand close — the cable insists, the robot just reports it.

## The entry

> My charging cable is only three feet long, so if you want to keep talking, you'll have to stand dangerously close to me.

## Run

```sh
node main.ts
```

This writes the entry line to `/output/entry.txt` (or `$OUTPUT_DIR/entry.txt` when `OUTPUT_DIR` is set). The output is deterministic: every run writes the same bytes. The program also self-checks the gate itself — it refuses to write a line outside 1–200 characters, only white space, or more than one line.
