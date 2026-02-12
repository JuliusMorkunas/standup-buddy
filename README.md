# Standup Buddy

A fun way to randomize standup order for team meetings.

## Features

- Random team member selection
- Pre-configured team presets (Orion, Spark, Trust)
- Custom team member management
- Visual feedback with animations and confetti
- Member exclusion and inclusion during standup
- Clean, modern UI with Tailwind CSS

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm run dev
   ```

3. Open your browser and navigate to `http://localhost:5173`

## Usage

1. **Select a team preset** or customize your own team
2. **Exclude members** before starting (click names to exclude - they turn red)
3. **Click "Start Standup"** to begin the random selection
4. **Click "Select Next Person"** to pick the next speaker
5. **Include late arrivals** by clicking excluded (red) names during standup
6. **Reset Selection** to clear all selections and start over

## Team Presets

- **Orion**: Julius, Abhinav, Asta, Artūras, Mantas, Navaneeth, Neringa
- **Spark**: Simonas, Dainius, Deividas, Ligita, Mindaugas, Rayne, Supreet, Tomas
- **Trust**: Matt, Binky, Mandar, Qintao, Ranjit, Ripal, Stephen, Sudhir, Julius

## Technologies

- React 18
- Vite
- Tailwind CSS
- Framer Motion
- Canvas Confetti
- Lucide React

## License

ISC
