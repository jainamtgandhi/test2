
import { eventBus, EVENTS } from '../../scripts/events.js';

document.addEventListener('DOMContentLoaded', () => {
  const projectButtons = [
    { id: 'gtm', program: 'project-gtm' },
    { id: 'research', program: 'project-research' },
    { id: 'positioning', program: 'project-positioning' },
    { id: 'sales', program: 'project-sales' },
    { id: 'market', program: 'project-market' },
    { id: 'digital', program: 'project-digital' },
  ];

  projectButtons.forEach(({ id, program }) => {
    const el = document.getElementById(id);
    if (el) {
      el.addEventListener('click', () => {
        eventBus.publish(EVENTS.PROGRAM_OPEN, { programName: program });
      });
    }
  });
});
