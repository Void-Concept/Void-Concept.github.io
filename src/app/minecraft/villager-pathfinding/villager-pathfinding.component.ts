import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-villager-pathfinding',
  templateUrl: './villager-pathfinding.component.html',
  styleUrls: ['./villager-pathfinding.scss']
})
export class VillagerPathfindingComponent implements OnInit {
  input = {
    npcTag: '',
    sequence: '',
    nodes: [{
      wait: 0,
      moveX: 0,
      moveY: 0,
      moveZ: 0,
      jump: false,
      moveYStart: 0,
      isRunning: false,
      ticks: 0,
    }],
    start: {
      x: 0,
      y: 0,
      z: 0,
      pitch: 0,
      yaw: 0,
    }
  };

  output = {
    runner: '',
    runTrig: '',
    trigger: '',
    start: '',
    alert: '',
    config: ''
  }
  constructor() { }

  ngOnInit() {
  }

  addNode() {
    this.output.alert = '';
    this.input.nodes.push({
      wait: 0,
      moveX: 0,
      moveY: 0,
      moveZ: 0,
      jump: false,
      moveYStart: 0,
      isRunning: false,
      ticks: 0,
    });
  }

  removeNode(index) {
    this.output.alert = '';
    this.input.nodes.splice(index, 1);
  }

  recalculateTime(node) {
    this.output.alert = '';
    if (node.jump && node.moveY > 1.2) {
      node.moveY = 1.2;
    }

    //get distance traveled
    let distance = Math.sqrt(Math.pow(node.moveX, 2) + Math.pow(node.moveZ, 2));
    //get approx. tick length
    let speed = node.isRunning ? 0.25 : 0.2;
    let approxTicks = distance / speed;
    //round up
    node.ticks = Math.ceil(approxTicks);

    let approxYTicks = 0;
    if (node.moveY || node.jump) {
      if (node.jump) {
        approxYTicks = Math.ceil(6 + (1.2 - node.moveY) / 0.2);
      } else {
        approxYTicks = Math.ceil(Math.abs(node.moveY) / 0.2);
      }
      approxYTicks += node.moveYStart
      node.ticks = Math.max(node.ticks, approxYTicks);
    }
  }

  generateOutput() {
    this.output.alert = '';
    if (!this.input.npcTag || !this.input.sequence) {
      this.output.alert = 'Missing tag or sequence';
      return;
    }

    this.output.runner = 'scoreboard players add @s progress 1\n';
    this.output.runner += `tp @s[score_progress_min=1,score_progress=1] ${this.input.start.x} ${this.input.start.y} ${this.input.start.z} ${this.input.start.pitch} ${this.input.start.yaw}\n\n`;

    let currentTick = 1;
    for (let node of this.input.nodes) {
      if (node.wait) currentTick += node.wait;
      if (node.ticks === 0) {
        continue;
      }
      let lastTick = currentTick + node.ticks - 1;

      let xSpeed = node.moveX / node.ticks;
      let zSpeed = node.moveZ / node.ticks;
      this.output.runner += `tp @s[score_progress_min=${currentTick},score_progress=${lastTick}] ~${xSpeed} ~ ~${zSpeed} ${Math.atan2(-xSpeed, zSpeed) * 180 / Math.PI} 0\n`;

      if (node.jump) {
        let jumpStartTick = currentTick + node.moveYStart;
        let jumpMidTick = jumpStartTick + 5;
        let jumpEndTick = jumpMidTick + Math.ceil((1.2 - node.moveY) / 0.2);
        let jumpSpeed = (1.2 - node.moveY) / (jumpEndTick - jumpMidTick);

        this.output.runner += `tp @s[score_progress_min=${jumpStartTick},score_progress=${jumpMidTick}] ~ ~.2 ~\n`;
        this.output.runner += `tp @s[score_progress_min=${jumpMidTick + 1},score_progress=${jumpEndTick}] ~ ~-${jumpSpeed} ~\n`;
      } else if (node.moveY) {
        let jumpStartTick = currentTick + node.moveYStart;
        let jumpEndTick = jumpStartTick + Math.ceil(Math.abs(node.moveY) / .2) - 1;
        let jumpSpeed = node.moveY / ((jumpEndTick + 1) - jumpStartTick);
        this.output.runner += `tp @s[score_progress_min=${jumpStartTick},score_progress=${jumpEndTick}] ~ ~${jumpSpeed} ~\n`;
      }

      this.output.runner += '\n'

      currentTick = lastTick + 1;
    }

    this.output.runner += `scoreboard players tag @s[score_progress_min=${currentTick}] add ${this.input.npcTag}:${this.input.sequence}:done\n`;
    this.output.runner += `scoreboard players tag @s[score_progress_min=${currentTick}] remove ${this.input.npcTag}:${this.input.sequence}`;

    this.output.runTrig = `execute @e[type=Villager,tag=${this.input.npcTag}:${this.input.sequence}] ~ ~ ~ execute @s[tag=!${this.input.npcTag}:${this.input.sequence}:done] ~ ~ ~ function ${this.input.npcTag}:${this.input.sequence}.runner`;

    this.output.trigger = `execute @e[type=Villager,tag=${this.input.npcTag}] ~ ~ ~ execute @s[tag=!${this.input.npcTag}:${this.input.sequence}] ~ ~ ~ execute @s[tag=!${this.input.npcTag}:${this.input.sequence}:done] ~ ~ ~ function ${this.input.npcTag}:${this.input.sequence}.start`;

    this.output.start = `scoreboard players tag @s add ${this.input.npcTag}:${this.input.sequence}\nscoreboard players set @s progress 0`;
  }

  export() {
    this.output.alert = '';
    if (!this.input.npcTag || !this.input.sequence) {
      this.output.alert = 'Missing tag or sequence';
      return;
    }
    this.output.config = JSON.stringify(this.input);
  }

  import() {
    this.output.alert = '';
    if (this.output.config) {
      let imported = JSON.parse(this.output.config);
      //validate top-level structure
      let validators = [
        ('npcTag' in imported),
        ('sequence' in imported),
        ('nodes' in imported),
        ('start' in imported)
      ];
      let valid = true;
      validators.forEach(validator => {
        if (!validator) valid = false;
      });
      if (!valid) return this.output.alert = 'Structure given is invalid';

      //validate nodes
      valid = true;
      imported.nodes.forEach(node => {
        validators = [
          ('wait' in node),
          ('moveX' in node),
          ('moveY' in node),
          ('moveZ' in node),
          ('jump' in node),
          ('moveYStart' in node),
          ('isRunning' in node),
        ];
        validators.forEach(validator => {
          if (!validator) valid = false;
        });
        if (!valid) return this.output.alert = 'Structure given is invalid';
      });

      //validate start
      validators = [
        ('x' in imported.start),
        ('y' in imported.start),
        ('z' in imported.start),
        ('pitch' in imported.start),
        ('yaw' in imported.start)
      ];
      validators.forEach(validator => {
        if (!validator) valid = false;
      });
      if (!valid) return this.output.alert = 'Structure given is invalid';

      if (valid) {
        this.input = imported;
        this.input.nodes.forEach(node => {
          this.recalculateTime(node);
        });
      }
    } else {
      this.output.alert = 'No config given';
    }
  }

}
