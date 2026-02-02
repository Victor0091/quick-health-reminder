# Quick Health Reminder 

A modern web application that promotes wellness by reminding you to take breaks during your screen time. Complete health-focused tasks every 30 minutes and track your wellness progress in real-time.

---

## Features 

- **Smart Screen Time Tracking** – Monitors your active screen presence and triggers wellness reminders every 30 minutes
- **Task-Based Wellness** – Complete curated health tasks (hydration, stretching, eye breaks, etc.)
- **Real-Time Progress** – Visual progress bar showing completed tasks and completion percentage
- **Pause/Resume Control** – Pause awareness tracking when needed and resume without losing session data
- **Visual Status Indicators** – Real-time status display showing wellness awareness and screen tracking state
- **Countdown Timer** – Live countdown to next wellness reminder
- **Responsive Design** – Clean, intuitive UI that works on all devices

---

## Tech Stack 

- **React 19.2** – Modern UI framework
- **Vite 7.2** – Lightning-fast build tool and dev server
- **ESLint 9** – Code quality and consistency
- **CSS3** – Styling with modern features (flexbox, transitions, animations)

---

## Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/Victor0091/quick-health-reminder.git
cd quick-health-reminder
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to the URL displayed in terminal (typically `http://localhost:5173`)

---

## Available Scripts 

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server with hot module reloading |
| `npm run build` | Build optimized production bundle |
| `npm run preview` | Preview production build locally |
| `npm run lint` | Run ESLint to check code quality |

---

## Project Structure 

```
src/
├── components/
│   ├── Alert/              # Screen alert notifications
│   ├── Awareness/          # Wellness awareness toggle controls
│   ├── Header/             # App header with status display
│   ├── Progress/           # Task progress indicator
│   └── Tasks/              # Task list and individual task items
├── data/
│   └── tasks.js            # Wellness task definitions
├── App.jsx                 # Main application component
├── main.jsx                # React entry point
└── index.css               # Global styles
```

---

# How It Works 

1. **Start Wellness Awareness** – Click "Start Wellness Awareness" button to begin tracking
2. **Track Screen Time** – The app monitors active screen presence in 1-minute intervals
3. **Receive Reminders** – Every 30 minutes, an alert appears prompting a wellness break
4. **Complete Tasks** – Choose from health-focused activities to complete during each break
5. **Track Progress** – Visual progress bar updates as you complete tasks
6. **End Session** – Click "End Session" when you're done or want to reset

---

## Features Breakdown 

### Header Component
- Displays app title and tagline: "Stay active. Stay hydrated. Stay well."
- Real-time status indicators for wellness awareness and screen tracking

### Task List
- Emoji-based task cards for visual appeal
- Each task includes title and subtitle description
- One-click completion with visual feedback
- Disabled state for completed tasks

### Progress Indicator
- Visual progress bar showing completion percentage
- Text summary: "X of Y tasks completed (Z%)"

### Awareness Controls
- **Start/Pause Button** – Toggle wellness awareness on/off
- **End Session Button** – Stops tracking and resets timer
- **Countdown Footer** – Shows minutes until next reminder

### Alert System
- Polite notification when 30-minute mark is reached
- Clean design that doesn't disrupt workflow

---

## Customization 

### Modify Task List
Edit `src/data/tasks.js` to add or modify wellness tasks. Each task should include:
- `id` – Unique identifier
- `emoji` – Visual icon for the task
- `title` – Task name
- `subtitle` – Brief description

### Change Reminder Interval
In `App.jsx`, modify the `REMINDER_INTERVAL` constant:
```javascript
const REMINDER_INTERVAL = 30; 
```

### Styling
Global styles are in `index.css`. Component-specific styles are in individual `.css` files within component folders. The design uses a clean, light color scheme with green accents for wellness.

---

## Browser Support 

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

---

## Contributing 

Contributions are welcome! Feel free to:
- Report bugs
- Suggest new wellness tasks
- Improve UI/UX
- Optimize performance

---

## License 

This project is open source and available under the MIT License.

---

## Future Enhancements 

- [ ] Local storage persistence for task completion history
- [ ] Customizable wellness tasks per user
- [ ] Sound/vibration notifications
- [ ] Dark mode theme
- [ ] Task suggestions based on time of day
- [ ] Detailed wellness statistics and insights
- [ ] Desktop notifications support
- [ ] Settings panel for reminder preferences

---

## Support 

For questions or issues, please create an issue on the GitHub repository.

**Stay healthy!**
